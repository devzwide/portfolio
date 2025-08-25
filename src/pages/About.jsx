import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CodeIcon, CloudIcon, DatabaseIcon, GitBranchIcon, CpuIcon, ServerIcon, BotIcon, ShieldCheckIcon, TerminalIcon, WorkflowIcon } from "lucide-react";

const skills = [
    { name: "React.js", icon: <CodeIcon className="w-8 h-8 mx-auto" /> },
    { name: "Express.js", icon: <ServerIcon className="w-8 h-8 mx-auto" /> },
    { name: "Flask", icon: <ServerIcon className="w-8 h-8 mx-auto" /> },
    { name: "MongoDB", icon: <DatabaseIcon className="w-8 h-8 mx-auto" /> },
    { name: "PostgreSQL", icon: <DatabaseIcon className="w-8 h-8 mx-auto" /> },
    { name: "Git & GitHub", icon: <GitBranchIcon className="w-8 h-8 mx-auto" /> },
    { name: "CI/CD", icon: <WorkflowIcon className="w-8 h-8 mx-auto" /> },
    { name: "AWS", icon: <CloudIcon className="w-8 h-8 mx-auto" /> },
];

const About = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const x = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "-100%"]);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="bg-white text-gray-800">
            <div ref={targetRef} className="relative h-[165vh]">
                <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                    <motion.div style={{ scale }} className="absolute inset-0">
                        <img src="/about.jpg" alt="About Me" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30"></div>
                    </motion.div>
                    <motion.div style={{ x }} className="relative text-center p-4">
                        <p className="text-2xl md:text-4xl font-semibold text-white mb-4">I build for the future, one cloud at a time.</p>
                        <p className="text-lg md:text-xl text-blue-200">Bukeka Nxumalo</p>
                    </motion.div>    
                </div>
            </div>

            <div className="-mt-[100vh] relative z-10 bg-white py-20 px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
                    >
                        <div className="md:col-span-1">
                            <h2 className="text-3xl font-bold text-blue-600">Hi, I’m Zwide.</h2>
                        </div>
                        <div className="md:col-span-2 text-lg md:text-xl space-y-4">
                            <p>I'm a passionate ICT student at DUT on a mission to become a leading Cloud Engineer. I thrive on building robust, scalable full-stack applications and architecting elegant solutions for complex problems.</p>
                            <p>My journey is fueled by a deep curiosity for technology and a drive to continuously learn and share my knowledge with the open-source community.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-4xl font-bold text-center mb-12">My Toolkit</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                            {skills.map((skill) => (
                                <div key={skill.name} className="text-center p-4 rounded-lg bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-blue-600 mb-2">{skill.icon}</div>
                                    <p className="font-semibold">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-12"
                    >
                        <div className="md:col-span-2 text-lg md:text-xl space-y-4">
                            <p>I believe in the power of clean code, elegant architecture, and user-centric design. For me, it's not just about writing code that works, but about crafting solutions that are maintainable, scalable, and a joy to use.</p>
                            <p>My focus is on leveraging the cloud to its full potential, embracing automation and DevOps principles to build the next generation of intelligent applications.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
     );

};
 
 export default About;