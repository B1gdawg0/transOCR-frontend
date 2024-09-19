import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import Footer from './footer';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email.trim() !== "" && password.trim() !== "") {
            try {
                const response = await fetch("http://127.0.0.1:5000/auth/login", {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });

                if (response.status === 200) {
                    const {data , _ } = await response.json();
                    localStorage.setItem('email', data.email);
                    localStorage.setItem('auth_token', data.token)
                    navigate("/scan");
                } else {
                    alert("error register");
                }
            } catch (e) {
                console.log(e);
            }

        } else {
            alert("Email/Password ของคุณไม่สามารถใช้งานได้. กรุณาลองใหม่อีกครั้ง");
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        navigate("/register");
    };

    const handleBack = () => {
        navigate('/'); // Navigates back to the previous page
    };


    return (
        <>
            <div
                className="flex items-center justify-center min-h-screen bg-cover bg-center relative overflow-hidden" // Replace with your image URL
                id="login-page"
            >
                <div className="absolute top-4 left-4">
                    <button
                        onClick={handleBack}
                        className="text-black hover:text-red-500 font-bold text-lg"
                    >
                        &larr; Back
                    </button>
                </div>
                <div className="relative z-10 bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-sm border-2 border-black">
                    <h2 className="text-3xl font-bold mb-8 text-black text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-black font-medium mb-2">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border border-black rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="password" className="block text-black font-medium mb-2">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border border-black rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white text-black p-3 rounded-lg border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 font-semibold text-lg"
                        >
                            Login
                        </button>

                        <center>
                            <p className="mt-6 text-gray-400 text-[13px]">
                                Don't have any account? <span className="text-black cursor-pointer transition duration-200 hover:text-red-500" onClick={handleSignUp}>Sign up now.</span>
                            </p>
                        </center>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Login;
