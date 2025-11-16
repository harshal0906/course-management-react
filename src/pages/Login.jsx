import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { motion } from "framer-motion"

const Login = ({ setIslogedIn }) => {

    const [input, setInput] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.email.trim() === "" || input.password.trim() === "") {
            toast.warning("Please enter email and password...");
        }

        if (input.email === "admin@gmail.com" && input.password === "admin123") {
            toast.success("Logged in successfully!");
            setIslogedIn(true);
            localStorage.setItem("islogedIn", JSON.stringify(true));
            navigate("/");
        } else {
            toast.error("Invalid email or password...");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[90vh] lg:py-0">

            {/* Animated Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="w-full bg-white rounded-lg shadow-lg border-2 md:mt-0 sm:max-w-md xl:p-0"
            >
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold leading-tight tracking-tight text-violet-500"
                    >
                        LOG IN
                    </motion.h1>

                    <form noValidate className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <label htmlFor="email" className="font-bold block mb-2 text-sm text-gray-900">
                                Your email
                            </label>
                            <input
                                type="email"
                                onChange={handleChange}
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                                placeholder="name@company.com"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <label htmlFor="password" className="font-bold block mb-2 text-sm text-gray-900">
                                Password
                            </label>
                            <input
                                type="password"
                                onChange={handleChange}
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ delay: 0.5 }}
                            className="justify-center opacity-30"
                        >
                            <span>mail:- admin@gmail.com pass:-admin123</span>
                        </motion.div>

                        <motion.button
                            type="submit"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full text-white bg-violet-500 transition-all duration-300 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Log In.
                        </motion.button>

                    </form>
                </div>
            </motion.div>
        </div>
    )
}

export default Login
