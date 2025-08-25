import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div
            className="relative w-full h-full bg-cover bg-center flex items-center justify-center text-white p-4 md:p-20"
            style={{ backgroundImage: "url('/hero.png')" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative z-10 max-w-2xl text-center">
                <span className="block mb-2 text-sm font-medium text-blue-300 md:text-base">
                    Cloud Computing Enthusiast
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                    Hi, I'm <span className="text-blue-400">Bukeka Nxumalo</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                    ICT student building a career in Cloud Computing, with a growing portfolio in Software Engineering.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <Link
                        to="/portfolio"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center transition-all duration-300 transform hover:scale-105"
                    >
                        View My Projects <ArrowRightIcon size={20} className="ml-2" />
                    </Link>
                    
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link
                            to="https://github.com/devzwide"
                            target="_blank"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <GithubIcon size={28} />
                        </Link>
                        <Link
                            to="https://www.linkedin.com/in/devzwide/"
                            target="_blank"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <LinkedinIcon size={28} />
                        </Link>
                        <Link
                            to="mailto:nxumalobukeka4@gmail.com"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <MailIcon size={28} />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;