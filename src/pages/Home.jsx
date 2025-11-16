import { motion } from "framer-motion";
import Courses from './Courses';

const Home = () => {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white antialiased md:pt-16"
      >
        <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-14 xl:gap-0">
          <div className="content-center justify-self-start md:col-span-7 md:text-start">
            <h1 className="mb-4 text-4xl text-violet-700 font-extrabold leading-none tracking-tight md:max-w-2xl md:text-5xl xl:text-6xl">
              Limited Time Offer!<br />Up to 18% OFF!
            </h1>
            <p className="mb-4 max-w-2xl text-gray-700  md:mb-12 md:text-lg lg:mb-5 lg:text-xl">
              Don't Wait - Limited Students at Unbeatable Prices!
            </p>
          </div>

          <div className="hidden md:col-span-5 md:mt-0 md:flex">
            <img src="/banner.svg" alt="shopping illustration" />
          </div>
        </div>
      </motion.section>

      <Courses />
    </div>
  );
}

export default Home;
