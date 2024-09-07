import React, { useState } from 'react';

const ReportPage = () => {
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(message)
        console.log(subject)
        try{
            const response = await fetch (`http://127.0.0.1:5000/report/${localStorage.getItem("email")}`,{
                method:"POST",
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify({
                    "category":subject,
                    "report":message
                })
            })


            if(response.ok){
                alert("Done! your request has sent to server")
            }else{
                alert("Something error: "+response.body.message)
            }
        }catch(e){
            alert("Something error: "+response.body.message)
        }


        setMessage('');
        setSubject('');
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-white p-4' id='report-bg'>
            <form onSubmit={handleSubmit} className='w-full max-w-md bg-gray-50 p-8 rounded-lg shadow-md'>
                <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
                    สวัสดี, ให้เราช่วยเรื่องอะไรดี ?
                </h2>
                <div className='mb-5'>
                    <label className='block text-gray-700 font-semibold mb-3' htmlFor='subject'>
                        เลือกหัวข้อที่จะติดต่อ:
                    </label>
                    <select
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#016b67]'
                    >
                        <option value="" disabled className='text-gray-400'>เลือกหัวข้อที่จะติดต่อ</option>
                        <option value="General Inquiry">ติดต่อสอบถาม</option>
                        <option value="Technical Support">รายงานปัญหา</option>
                        <option value="Feedback">ข้อเสนอแนะ</option>
                        <option value="Other">อื่นๆ</option>
                    </select>
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 font-semibold mb-3' htmlFor='message'>
                        ข้อความ:
                    </label>
                    <textarea
                        id='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#016b67]'
                        placeholder='พิมพ์ข้อความของคุณที่นี่'
                        rows={6}
                    />
                </div>
                <button type='submit' className='bg-black text-white p-3 rounded-lg w-full hover:bg-[#014f4d] transition duration-300'>
                    ส่งข้อความ
                </button>
            </form>
        </div>
    );
};

export default ReportPage;
