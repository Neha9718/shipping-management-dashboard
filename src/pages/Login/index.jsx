import React from 'react'
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            if (email === "admin@test.com" && password === "123456") {
                localStorage.setItem("user", JSON.stringify({ email }));
                navigate("/dashboard");
            } else {
                alert("Invalid Credentials");
            }
        } catch (err) {
            alert("Login Failed");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className='flex flex-col items-center justify-center h-screen bg-gray-900'>
                <h1 className='text-white font-semibold text-3xl mb-10 uppercase '>User Login </h1>
                <form className='w-1/3 shadow-md bg-white p-10 rounded-lg' onSubmit={handleLogin} >
                    <input type="email" value={email} placeholder='Email' className='w-full border p-2 mb-8 rounded' onChange={(e) => setEmail(e.target.value)} />
                    <div className="relative mb-8 w-full">
                        <input type={showPassword ? "text" : "password"} value={password} placeholder="Password" className="w-full border p-2 rounded pr-10" onChange={(e) => setPassword(e.target.value)} />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-4 text-gray-500">
                            {showPassword ? <Eye size={12} /> : <EyeOff size={12} />}
                        </button>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded"> {loading ? "Logging in..." : "Login"}</button>
                </form>
            </div>

        </>
    )
}

export default Login