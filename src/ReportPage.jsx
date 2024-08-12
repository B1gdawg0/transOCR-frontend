import React, { useState } from 'react';

const ReportPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Message:", message);
        console.log("Subject:", subject);
        window.open(`mailto:fsciscr@ku.ac.th?subject=${subject}&body=${message}`);
        setEmail('');
        setMessage('');
        setSubject('');
    };

    return (
        <div className='flex-col h-screen w-screen bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center p-4'>
            <form onSubmit={handleSubmit} className='w-full max-w-md bg-white p-6 rounded-lg shadow-lg'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
                    สวัสดี, ให้เราช่วยเรื่องอะไรดี ?
                </h2>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-semibold mb-2' htmlFor='subject'>
                        Select a Subject:
                    </label>
                    <select
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500'
                    >
                        <option placeholder='เลือกหัวข้อที่จะติดต่อ' value="" disabled className='text-blue-50'> เลือกหัวข้อที่จะติดต่อ</option>
                        <option value="General Inquiry">ติดต่อสอบถาม</option>
                        <option value="Technical Support">รายงานปัญหา</option>
                        <option value="Feedback">ข้อเสนอแนะ</option>
                        <option value="Other">อื่นๆ</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-semibold mb-2' htmlFor='message'>
                        Message:
                    </label>
                    <textarea
                        id='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500'
                        placeholder='Enter your message'
                        rows={6}

                    />
                </div>
                <button type='submit' className='bg-indigo-500 text-white p-3 rounded-lg w-full hover:bg-indigo-600 transition duration-300'>
                    Send
                </button>
            </form>
        </div>
    );
};

export default ReportPage;
