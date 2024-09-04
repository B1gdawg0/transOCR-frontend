import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterForm(){
    const navigator = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(confirm !== password){
            return alert("Email must be the same as confirm password")
        }
        if(email.trim() != "" && password.trim() != ""){
            try{
                const response = await fetch("http://127.0.0.1:5000/register",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        email,
                        password
                    })
                });


                if (response.status == 200){
                    const data = await response.json()
                    console.log(data)

                    navigator(-1)
                }else{
                    alert("Something error")
                }

            }catch(e){
                console.log(e)
            }
        }else{
            alert("Email/Password ของคุณไม่สามารถใช้งานได้. กรุณาลองใหม่อีกครั้ง")
        }
    };


    const handleSignIn = ()=> navigator("/")

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-black">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-black mb-2">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-black mb-2">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm-password" className="block text-black mb-2">Confirm Password</label>
                        <input
                            id="confirm-password"
                            type="password"
                            onChange={(e) => setConfirm(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition-colors duration-300"
                    >
                        Register
                    </button>
                </form>


                <center>
                    <p className='mt-6 text-neutral-500 text-[13px]'> 
                        Already have acount? <span className='text-sky-400 cursor-pointer' onClick={handleSignIn}>Sign in</span> here.
                    </p>
                </center>
            </div>
        </div>
    );
}

export default RegisterForm