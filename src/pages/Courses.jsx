import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Courses = () => {
    return (
        <div>
            <div>
                <section className="py-8 antialiased md:pb-16">
                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
                            <h2 className="text-gray-900 text-4xl font-extrabold">Courses by category</h2>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">

                            {[
                                "Web Development",
                                "Mobile App Development",
                                "Cyber Security",
                                "UI/UX Design",
                                "Cloud Computing",
                                "Game Development",
                                "Digital Marketing",
                                "Software Testing",
                                "DevOps & CI/CD",
                                "Blockchain & Web3",
                                "Programming Languages (C, C++, Java, Python)",
                                "DSA"
                            ].map((title, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="flex cursor-pointer items-center  
                                    rounded-lg border border-violet-600 bg-white
                                    px-4 py-5 hover:bg-violet-500 transition-all"
                                >
                                    <svg className="me-2 h-4 w-4 shrink-0 text-gray-900" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                                    </svg>
                                    <span className="text-sm text-gray-900 font-bold">{title}</span>
                                </motion.div>
                            ))}

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Courses;
