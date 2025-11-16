import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = ({ islogedIn, setIslogedIn }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleClick = () => {
        setIslogedIn(false)
        localStorage.setItem("islogedIn", JSON.stringify(false))
        navigate('/')
        toast.success("Logged Out successfully...")
    }

    return (
        <div>
            <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-y-4">
                    <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/logo.jpg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-bold underline whitespace-nowrap text-violet-600">
                            Course Management
                        </span>
                    </Link>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 
                            border border-gray-100 rounded-lg bg-gray-50 
                            md:flex-row md:space-x-8 rtl:space-x-reverse 
                            md:mt-0 md:border-0 md:bg-white">

                            <li>
                                <Link
                                    to="/"
                                    className={`${pathname === '/' ?
                                        "block py-2 px-3 rounded-sm text-violet-600 underline font-bold transition-all" :
                                        "block py-2 px-3 rounded-sm text-black hover:text-violet-600 hover:underline font-bold transition-all"
                                        }`}
                                >
                                    <i className="ri-home-4-fill"></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/courses"
                                    className={`${pathname === '/courses' ?
                                        "block py-2 px-3 rounded-sm text-violet-600 underline font-bold transition-all" :
                                        "block py-2 px-3 rounded-sm text-black hover:text-violet-600 hover:underline font-bold transition-all"
                                        }`}
                                >
                                    <i className="ri-book-open-fill"></i> Courses
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className={`${pathname === '/contact' ?
                                        "block py-2 px-3 rounded-sm text-violet-600 underline font-bold transition-all" :
                                        "block py-2 px-3 rounded-sm text-black hover:text-violet-600 hover:underline font-bold transition-all"
                                        }`}
                                >
                                    <i className="ri-contacts-fill"></i> Contact
                                </Link>
                            </li>

                            {islogedIn &&
                                <li>
                                    <Link
                                        to="/course-list"
                                        className={`${pathname === '/course-list' ?
                                            "block py-2 px-3 rounded-sm text-violet-600 underline font-bold transition-all" :
                                            "block py-2 px-3 rounded-sm text-black hover:text-violet-600 hover:underline font-bold transition-all"
                                            }`}
                                    >
                                        <i className="ri-list-check"></i> Selected List
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>

                    <div className="flex gap-6">

                        <button
                            type="button"
                            onClick={() => navigate('/SelectCourse')}
                            className="w-full md:w-auto inline-flex items-center font-bold py-2 px-4 justify-center 
                                text-sm text-violet-600 rounded-lg 
                                hover:bg-gradient-to-r from-violet-500 to-violet-800 hover:text-white 
                                transition-all focus:outline-none border-2 border-violet-500 shadow-md"
                        >
                            START LEARNING
                        </button>

                        <div>
                            {islogedIn ? (
                                <button
                                    type="button"
                                    className="w-full md:w-auto inline-flex items-center font-bold py-2 px-4 justify-center 
                                        text-sm text-red-600 rounded-lg 
                                        hover:bg-red-600 hover:text-white transition-all focus:outline-none 
                                        border-2 border-red-500 shadow-md"
                                    onClick={handleClick}
                                >
                                    LOG OUT
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="w-full md:w-auto inline-flex items-center font-bold py-2 px-4 justify-center 
                                        text-sm text-violet-600 rounded-lg 
                                        hover:bg-violet-600 hover:text-white transition-all focus:outline-none 
                                        border-2 border-violet-500 shadow-md"
                                    onClick={() => navigate("/login")}
                                >
                                    LOG IN
                                </button>
                            )}
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
