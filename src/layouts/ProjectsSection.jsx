import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { data } from '../data.js'

const projects = data.projects

const tabVariants = {
    hidden: { x: "100%", opacity: 0 },
    enter: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
}

export default function ProjectsSection() {
    const [selectedTab, setSelectedTab] = useState("Game Development")

    const handleTabClick = (category) => {
        setSelectedTab(category)
    }

    const filteredProjects = projects.filter((project) => 
        selectedTab === "All" || project.tag === selectedTab
    )

    const categories = ["All", "Game Development", "Web Development", "Others"]

    return (
        <section id="projects" className="mb-12">
            <h2 className="text-2xl md:text-3xl text-center font-bold mb-8">Projects</h2>
            <div className='flex flex-wrap justify-center gap-6 mb-8'>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`text-lg md:text-xl px-3 py-2 font-bold transition-all duration-200 
                        ${selectedTab === category 
                            ? "border-b-2 border-secondary-bg" 
                            : "hover:border-b-2 hover:border-secondary-bg"}`}
                        onClick={() => handleTabClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className='relative overflow-hidden'>
                <AnimatePresence mode="wait">
                <motion.div 
                    key={selectedTab}
                    variants={tabVariants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch px-4 md:px-8 lg:px-12">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                tag={project.tag}
                                techs={project.tech}
                                description={project.description}
                                details={project.details}
                                imageSrc={project.imageSrc}
                            />
                        ))
                    ) : (
                        <h2 className="text-2xl md:text-3xl font-bold col-span-full text-center mb-8 py-12">No projects yet.</h2>
                    )}
                </motion.div>
                </AnimatePresence>
            </div>
        </section>
        
    )
}