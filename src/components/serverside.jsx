import React, { useEffect, useState } from 'react';
import ErrorReport from './errorreport';

function Serverside() {
  const [errorData, setErrorData] = useState({ email: '', fromfile: '' });

  useEffect(() => {
    const storedData = localStorage.getItem('errorData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setErrorData({
        transOCR_client_email: parsedData.transOCR_client_email || '',
        fromfile: parsedData.fileFrom || ''
      });
    }
  }, []);

  return (
    <div className="h-screen w-screen">
      <div className="h-full ml-[130px] mt-10 mr-10 pl-6 pt-6 pr-6 bg-gray-50 rounded">
        <h1 className="text-[50px]">DashBoard</h1>
        <p className="text-neutral-400">หน้าต่าง dashboard สำหรับเช็ค error จากการ OCR และสร้าง email</p>
        <br />
        <div className="w-full h-[2px] bg-neutral-500"></div>
        <br />

        {errorData.transOCR_client_email && errorData.fromfile ? (
          <ErrorReport email={errorData.transOCR_client_email} fromfile={errorData.fromfile} />
        ) : (
          <p>No error data available</p>
        )}
      </div>
    </div>
  );
}

export default Serverside;
