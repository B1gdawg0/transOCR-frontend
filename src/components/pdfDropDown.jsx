import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigationOff } from 'lucide-react';

function PdfDropdown() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setDone] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  async function fetchData() {
    try {
      const response = await fetch(`http://127.0.0.1:5000/info/${localStorage.getItem("email")}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.subjects.length !== 0) {
        setDone(true);
        localStorage.setItem("subjects", JSON.stringify(data.subjects))
      }

    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  useEffect(() => { fetchData() }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);


    if (!selectedFile) {
      setMessage('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch(`http://127.0.0.1:5000/upload/${localStorage.getItem("email")}`, {
        method: 'PATCH',
        body: formData,
      });

      if (response.ok) {
        const response_ocr = await fetch(`http://127.0.0.1:5000/doOCR/${localStorage.getItem("email")}`, {
          method: 'PATCH',
          body: {},
        });

        if (response_ocr.ok) {
          setDone(true);

          fetchData()
          navigate("/data")
        } else {
          alert("Something went wrong");
        }
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      {isDone ? (
        <div className='p-5 max-w-4xl w-full h-full bg-white rounded-xl shadow-md space-y-4 mt-5 flex flex-col justify-center'>
          <center><NavigationOff className='text-gray-500'></NavigationOff></center>
          <center><p className='text-gray-500'>You have already submitted. Please check the history page.</p></center>
        </div>
      ) : (
        <div className='p-5 max-w-4xl w-full h-full bg-white rounded-xl shadow-md space-y-4 mt-5 flex flex-col'>
          <div className="flex flex-col">
            <label htmlFor="pdf-upload" className="mb-3 text-black font-medium">Choose a PDF:</label>
            <input
              type="file"
              id="pdf-upload"
              accept=".pdf"
              onChange={handleFileChange}
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {selectedFile && (
            <div className="flex-grow mt-0 pt-0 px-8 pb-8 mb-8">
              <h3 className="text-lg font-medium text-purple-800">Selected File: {selectedFile.name}</h3>
              <div className="relative mt-4 border border-gray-300 rounded-md overflow-hidden h-full">
                <iframe
                  src={URL.createObjectURL(selectedFile)}
                  title="PDF Preview"
                  className="w-full h-full rounded-md"
                ></iframe>
              </div>
            </div>
          )}

          <div className="flex justify-end mt-4">
            <button
              onClick={handleSubmit}
              type="button"
              disabled={!selectedFile}
              className={`py-2 px-4 rounded-md text-white font-semibold focus:outline-none ${!selectedFile ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} shadow-md`}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {isSubmitting && (
        <div className="flex flex-col items-center">
          <div className="loader border-t-transparent border-4 border-black rounded-full w-12 h-12 animate-spin"></div>
          <p className="mt-4 text-gray-700">Loading...</p>
        </div>
      )}

      {!isSubmitting && isDone && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 flex-col z-50">
          <div className="text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className='mt-3 text-white block'>Submission Completed!</h1>
        </div>
      )}
    </div>
  );
}

export default PdfDropdown;
