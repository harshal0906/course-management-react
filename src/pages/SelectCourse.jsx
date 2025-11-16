import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCourse } from '../features/course/courseSlice'
import { motion } from "framer-motion"

const SelectCourse = () => {
  const [input, setinput] = useState({
    name: "", age: "", email: "", phone: "", course: ""
  });

  const [error, seterror] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlechange = (e) => {
    setinput({ ...input, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const tempError = {};

    if (input.name.trim() === "") tempError.name = "Please Enter The Name..";
    if (input.age.trim() === "") tempError.age = "Please Enter Age..";
    if (input.course === "") tempError.course = "Please Enter Course..";
    if (input.email.trim() === "") tempError.email = "Please Enter Email..";
    if (input.phone.trim() === "" || input.phone.length < 10)
      tempError.phone = "Please Check phone number..";

    if (Object.keys(tempError).length === 0) {
      dispatch(addCourse(input));
      navigate('/course-list');
    }

    seterror(tempError);
  };

  return (
    <>
      <section className="container mx-auto w-4/12">
       <motion.form
          onSubmit={handleSubmit}
          className="border-2 p-10 rounded-md mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >

          <div className="grid gap-6 mb-6 md:grid-cols-2">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
              <input type="text" id="name"
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                   focus:ring-violet-600 focus:border-violet-500 outline-none block w-full p-2.5"
                placeholder="John"
                onChange={handlechange} value={input.name}
              />
              {error.name && <p className="text-red-600 text-sm">{error.name}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">Age</label>
              <input type="text" id="age"
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                   focus:ring-violet-600 focus:border-violet-500 outline-none block w-full p-2.5"
                placeholder="Enter Age"
                onChange={handlechange} value={input.age}
              />
              {error.age && <p className="text-red-600 text-sm">{error.age}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
              <input type="email" id="email"
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                   focus:ring-violet-600 focus:border-violet-500 outline-none block w-full p-2.5"
                placeholder="Enter your email"
                onChange={handlechange} value={input.email}
              />
              {error.email && <p className="text-red-600 text-sm">{error.email}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
              <input type="tel" id="phone"
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                   focus:ring-violet-600 focus:border-violet-500 outline-none block w-full p-2.5"
                placeholder="1234567890"
                pattern="[0-9]{10}"
                onChange={handlechange} value={input.phone}
              />
              {error.phone && <p className="text-red-600 text-sm">{error.phone}</p>}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900">Course</label>
            <select id="course" onChange={handlechange} value={input.course}
              className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                   focus:ring-violet-600 focus:border-violet-500 outline-none block w-full p-2.5"
            >
              <option value="" disabled>Select your course..</option>
              <option value="1">Web Development</option>
              <option value="2">Mobile App Development</option>
              <option value="3">Cyber Security</option>
              <option value="4">UI/UX Design</option>
              <option value="5">Cloud Computing</option>
              <option value="6">Game Development</option>
              <option value="7">Digital Marketing</option>
              <option value="8">Software Testing</option>
              <option value="9">DevOps & CI/CD</option>
              <option value="10">Blockchain & Web3</option>
              <option value="11">Programming Languages</option>
              <option value="12">DSA</option>
            </select>
            {error.course && <p className="text-red-600 text-sm">{error.course}</p>}
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full text-white bg-violet-600 hover:bg-violet-700 
                       transition-all font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Submit
          </motion.button>

        </motion.form>

      </section>
    </>
  )
}

export default SelectCourse;
