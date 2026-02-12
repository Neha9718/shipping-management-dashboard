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
            <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">

                <div className="w-full max-w-md bg-white p-6 md:p-10 rounded-lg shadow-md">

                    <h1 className="text-xl md:text-2xl font-semibold text-center mb-5 uppercase">User Login</h1>

                    <form onSubmit={handleLogin} className="space-y-6">

                        <input
                            type="email"
                            value={email}
                            placeholder="Email"
                            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                placeholder="Password"
                                className="w-full border border-gray-300 p-3 rounded pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>

                    </form>

                </div>
            </div>


        </>
    )
}

export default Login