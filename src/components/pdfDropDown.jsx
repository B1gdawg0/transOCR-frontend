import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PdfDropdown() {
  const [selectedFile, setSelectedFile] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();


  const handleSelectChange = (event) => {
    const file = event.target.value;
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      if (selectedFile !== "picture2.png") {
        localStorage.setItem('filename', selectedFile);
        navigate('/data')
      } else {
        localStorage.setItem('errorData', JSON.stringify({
          transOCR_client_email: localStorage.getItem('transOCR_client_email'),
          fileFrom: selectedFile
        }));

        alert('ไฟล์ของคุณอาจไม่ชัดหรือเอียง กรุณาส่งใหม่อีกครั้ง');
        navigate('/scan');
      }

      setIsSubmitting(false);
      setSelectedFile("");
    }, 4000);
  };

  return (
    <div className='h-screen w-screen mt-20'>
      <div className={`p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 mt-5`}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="pdf-select" className="mb-3 text-black font-medium">Choose a PDF:</label>
            <select
              id="pdf-select"
              value={selectedFile}
              onChange={handleSelectChange}
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--Please choose an option--</option>
              <option value="picture1.png">picture1.png</option>
              <option value="picture2.png">picture2.png</option>
              {/* <option value="picture3.png">picture3.png</option>
              <option value="picture4.png">picture4.png</option> */}

            </select>
          </div>
        </form>

        {selectedFile && (
          <div className="mt-4">
            <h3 className="text-lg font-medium text-black">Selected File: {selectedFile}</h3>
            <div className="relative w-full h-full mt-4 border border-gray-300 rounded-md overflow-hidden">
              <img src={`src/assets/${selectedFile}`} alt="preview" className="w-full h-auto" />
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

      {isSubmitting && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 flex-col z-50">
          <svg className="animate-spin h-16 w-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="none" d="M4 12a8 8 0 0 1 8-8v2a6 6 0 0 0-6 6H4zm16 0a8 8 0 0 0-8-8v2a6 6 0 0 1 6 6h2zm-8 8a8 8 0 0 1-8 8v-2a6 6 0 0 0 6-6h2z" />
          </svg>

          <h1 className='mt-3 text-white block'>Loading...!</h1>
        </div>
      )}
    </div>
  );
}

export default PdfDropdown;
