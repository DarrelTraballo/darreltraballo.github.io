export const data = {
    projects: [
        {
            id: "1",
            title: "Water Simulation",
            imageSrc: "/images/Water.gif",
            description: "An attempt to create a simple simulation of waves using Unity's Shader Language, implementing Sum of Sines and Lambertian Diffuse lighting.",
            tech: ["Unity", "C#"],
            details: [
                "Introductory shader programming project."
            ],
        },
        {
            id: "2",
            title: "Pokemon Battle System Clone",
            imageSrc: "/images/Pokemon.gif",
            description: "A simplified recreation of Pokemon's Generation 1 battle system.",
            tech: ["Unity", "C#"],
            details: [
                "Used PokeAPI to collect and display Pokemon data.",  
                "Learned how to use Unity's custom inspector.", 
                "Learned how to create/edit Scriptable Objects programmatically."
            ],
        },
        {
            id: "3",
            title: "A Byte-Sized Museum",
            imageSrc: "/images/AByteSizedMuseum.png",
            description: "A Game-Based Learning application that introduces computer programming concepts using Wave Function Collapse for procedural generation.",
            tech: ["Unity", "C#"],
            details: [
                "3D game project developed for my Thesis."
            ],
        },
        {
            id: "4",
            title: "Wave Function Collapse Algorithm",
            imageSrc: "/images/WFC_Python.png",
            description: "A Python-based implementation of the Tile-Based Wave Function Collapse Algorithm",
            tech: ["Python", "Pygame", "Numpy"],
            details: [
                "Served as a prototype for testing for my final Thesis output."
            ],
        },
        {
            id: "5",
            title: "PCDefender",
            imageSrc: "/images/PCDefender.png",
            description: "A 2D Tower Defense game where you play as a computer's Antivirus Software defending against waves of computer malware.",
            tech: ["Unity", "C#"],
            details: [
                "Made in 5 days for a University Hackathon."
            ],
        },
        {
            id: "6",
            title: "Scatter",
            imageSrc: "/images/Scatter.png",
            description: "A 2D RTS game where survival depends on real-time resource scavenging.",
            tech: ["Unity", "C#"],
            details: [
                "Made in 2 weeks with a friend for the Pirate Software Game Jam 14 (Jan 12, 2024 – Jan 27, 2024)."
            ],
        },
        {
            id: "7",
            title: "Genetic Algorithm for Solving a Multiple Variable Combinatorial Optimization Problem",
            imageSrc: "/images/GeneticAlgorithm.png",
            description: "A Python-based program using a Genetic Algorithm to solve a multi-variable combinatorial optimization problem.",
            tech: ["Python", "Numpy", "Pandas", "Matplotlib"],
            details: [
                "Made alongside a research manuscript of the same title as a final project for my Discrete Structures 2 course."
            ],
        },
    ],
    technologies: [
        {
            // split into two parts: "Preferred Languages" and "Other known Languages"
            // but not yet since there aren't a lot yet xdd
            category: "Languages",
            items: ["C#", "Python", "Java", "Javascript"],
        },
        {
            category: "Game Development",
            items: ["Unity", "Shader Programming", "Pygame"],
        },
        {
            category: "Web Development",
            items: ["Astro", "React (learning)", "Tailwind CSS"],
        },
        {
            category: "Data Analysis & Visualization",
            items: ["Numpy", "Pandas", "Matplotlib"],
        },
        {
            category: "Agorithm Development",
            items: ["Genetic Algorithms", "Procedural Generation"],
        },
    ],
    professional_experience:[],
    education: [
        {
            title: "Bachelor of Computer Science",
            major: "Application Development Elective Track",
            institution: "University of Makati",
            location: "Makati City, Metro Manila, Philippines",
            date: "2020 - 2024",
        },
    ],
}