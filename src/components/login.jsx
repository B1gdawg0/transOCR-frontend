import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(email.trim() != "" && password.trim() != ""){
            try{
                const response = await fetch("http://127.0.0.1:5000/login", {
                    method:"POST",
                    headers:{
                        'Content-Type':"application/json"
                    },
                    body:JSON.stringify({email, password})
                })

                if (response.status == 200){
                    const {email,token} = await response.json();
                    localStorage.setItem('uselessToken', token);
                    localStorage.setItem('email', email);
                    navigate("/scan")
                }else{
                    alert("error register")
                }
            }catch(e){
                console.log(e)
            }
            
        }else{
            alert("Email/Password ของคุณไม่สามารถใช้งานได้. กรุณาลองใหม่อีกครั้ง")
        }
    };

    const handleSignUp = (e) =>{
        e.preventDefault
        navigate("/register")
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-3xl font-bold mb-8 text-[#016b67] text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#016b67] focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-8">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#016b67] focus:outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#016b67] text-white p-3 rounded-lg hover:bg-[#014f4d] transition-colors duration-300 font-semibold text-lg"
                    >
                        Login
                    </button>

                    <center>
                        <p className='mt-6 text-neutral-500 text-[13px]'> 
                            Don't have any acount? <span className='text-sky-400 cursor-pointer' onClick={handleSignUp}>Sign up now.</span>
                        </p>
                    </center>
                </form>
            </div>
        </div>
    );
}

export default Login;
