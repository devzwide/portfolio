import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
    const [zIndex, setZIndex] = useState(0);

    const updateZIndex = () => {
        const els = document.querySelectorAll(".drag-elements");

        let maxZIndex = -Infinity;

        els.forEach((el) => {
        let zIndex = parseInt(
            window.getComputedStyle(el).getPropertyValue("z-index")
        );

        if (!isNaN(zIndex) && zIndex > maxZIndex) {
            maxZIndex = zIndex;
        }
    });

    setZIndex(maxZIndex + 1);
};

return (
    <motion.img
        onMouseDown={updateZIndex}
        style={{
            top,
            left,
            rotate,
            zIndex,
        }}
        className={twMerge(
            "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
            className
        )}
        src={src}
        alt={alt}
        drag
        dragConstraints={containerRef}
        dragElastic={0.65}
    />);
};

const Cards = () => {
    const containerRef = useRef(null);

    return (
        <div className="absolute inset-0 z-10" ref={containerRef}>
            <Card containerRef={containerRef} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s" alt="React" rotate="6deg" top="20%" left="25%" className="w-36 md:w-56" />
            <Card containerRef={containerRef} src="https://www.curotec.com/wp-content/uploads/2024/08/Express-1.png?w=1024" alt="Node + Express" rotate="12deg" top="45%" left="60%" className="w-24 md:w-48" />
            <Card containerRef={containerRef} src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" alt="Flask" rotate="-2deg" top="65%" left="60%" className="w-28 md:w-44" />
            <Card containerRef={containerRef} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuawUuQCcq6fD-KpdmL4QixUOyqQqdrVNIDg&s" alt="Firebase" rotate="-6deg" top="20%" left="40%" className="w-52 md:w-80" />
            <Card containerRef={containerRef} src="https://cdn.prod.website-files.com/638106149a6441f0708f5c0a/66c72620456d49ce94e2a2bb_66c72560c6e3b9a31fd0d85b_github-git-cocos-creator.webp" alt="Git + Github" rotate="8deg" top="50%" left="40%" className="w-48 md:w-72" />
            <Card containerRef={containerRef} src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="MongoDB" rotate="-6deg" top="60%" left="40%" className="w-28 md:w-44" />
            <Card containerRef={containerRef} src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="Postgres" rotate="3deg" top="75%" left="80%" className="w-24 md:w-40" />
            <Card containerRef={containerRef} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHs-UkmWtgnj-jIXlINXtO1GcbQoRpXlmGg&s" alt="AWS" rotate="-4deg" top="55%" left="10%" className="w-24 md:w-36" />
            <Card containerRef={containerRef} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1b24P1VApeuzyiUTLGFJF3yHH-m0p9SCnrQ&s" alt="CI/CD" rotate="-4deg" top="55%" left="10%" className="w-24 md:w-36" />
        </div>
    );
};

const projects = [
    {
        id: 1,
        title: "Campus Security App",
        subtitle: "Group Project",
        description: "Mobile-native app using Kotlin + Jetpack Compose, integrated Firebase services.",
        image:'/campus-security.png',
        technologies: ["Kotlin", "Jetpack Compose", "Firebase"],
        liveLink: '#',
        githubLink: 'https://github.com/iangovender/PBDV_SecurityApp',
    },
    {
        id: 2,
        title: "Peer Tutoring Platform",
        subtitle: "Group Project",
        description: "Web app built with Flask (Python)",
        image:'/tute-me.png',
        technologies: ["Flask", "Python", "Web Development"],
        liveLink: '#',
        githubLink: 'https://github.com/levs2424/PBDV-PROJECT',
    }
];

const Portfolio = () => {
    return (
        <div className="bg-gray-50">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="relative grid min-h-[70vh] w-full place-content-center overflow-hidden bg-gray-100"
            >
                <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
                    ZWIDE<span className="text-indigo-500">.</span>
                </h2>
                <Cards />
            </motion.div>

            <div className="p-4 md:p-10">
                <motion.div
                    className="mx-auto max-w-5xl text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Hi, I’m Zwide — I build software applications.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        I'm a third-year ICT student at DUT with a passion for building full-stack applications and a drive to become an AI Cloud Engineer. I love sharing my work and contributing to the open-source community.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-white rounded-xl overflow-hidden transition-shadow duration-300 transform"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover shadow-lg"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-1 text-gray-800">{project.title}</h3>
                                <p className="text-sm text-gray-500 mb-3">{project.subtitle}</p>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-start items-center gap-4">
                                    {project.liveLink && project.liveLink !== '#' ? (
                                        <a
                                            href={project.liveLink}
                                            className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLinkIcon size={16} />
                                            <span>Live Demo</span>
                                        </a>
                                    ) : (
                                        <button
                                            className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-400 bg-gray-200 rounded-md cursor-not-allowed"
                                            disabled
                                        >
                                            <ExternalLinkIcon size={16} />
                                            <span>Live Demo</span>
                                        </button>
                                    )}
                                    <a
                                        href={project.githubLink}
                                        className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-md shadow-md hover:bg-gray-200 transition-all duration-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <GithubIcon size={16} />
                                        <span>GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;