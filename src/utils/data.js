import WaterImage from "../assets/images/projects/Water.gif"
import PokemonImage from "../assets/images/projects/Pokemon.gif"
import AByteSizedMuseumImage from "../assets/images/projects/AByteSizedMuseum.png"
import WFCImage from "../assets/images/projects/WFC_Python.png"
import PCDefenderImage from "../assets/images/projects/PCDefender.png"
import ScatterImage from "../assets/images/projects/Scatter.png"
import GeneticAlgorithmImage from "../assets/images/projects/GeneticAlgorithm.png"
import EnderDragonAIImage from "../assets/images/projects/EnderDragonAI.gif"
import PortfolioImage from "../assets/images/projects/PortfolioImage.png"
import ThreeWaterImage from "../assets/images/projects/ThreeJSWater.gif"

export const data = {
    projects: [
        {
            id: "1",
            title: "Water Simulation with Unity and HLSL Shaders",
            tags: ["Game Development"],
            imageSrc: WaterImage.src,
            description: "My first attempt at creating a simple simulation of waves using Unity and HLSL.",
            tech: ["Unity", "CSharp", "HLSL"],
            details: [
                "Implemented Sum of Sines and Basic Phong lighting.",
                "Learned how to work with and configure Vertex and Fragment Shaders using Unity's Shader Language.",
            ],
            isPlayable: false,
            href: "#",
        },
        {
            id: "2",
            title: "Water Simulation with Three.js and GLSL Shaders",
            tags: ["Game Development", "Web Development"],
            imageSrc: ThreeWaterImage.src,
            description:
                "My second attempt at creating a simple simulation of waves. This time using Three,js and GLSL.",
            tech: ["Javascript", "React", "ThreeJS", "GLSL"],
            details: [
                "Implemented Fractional Browinian Motion for the wave effect and a combination of Phong Lighting with Fresnel Reflection and Subsurface Scattering for the scene's lighting model.",
                "Learned how to create GLSL Vertex and Fragment Shaders using Three.js",
            ],
            isPlayable: true,
            href: "https://darreltraballo.github.io/threejs-playground/#/Water",
        },
        {
            id: "3",
            title: "Pokemon Battle System Clone",
            tags: ["Game Development"],
            imageSrc: PokemonImage.src,
            description: "A simplified recreation of Pokemon's Generation 1 battle system.",
            tech: ["Unity", "CSharp"],
            details: [
                "Used PokeAPI to collect and display Pokemon data.",
                "Learned how to use Unity's custom inspector.",
                "Learned how to create/edit Scriptable Objects programmatically.",
            ],
            isPlayable: false,
            href: "#",
        },
        {
            id: "4",
            title: "A Byte-Sized Museum",
            tags: ["Game Development"],
            imageSrc: AByteSizedMuseumImage.src,
            description:
                "A Game-Based Learning application that introduces computer programming concepts using Wave Function Collapse for procedural generation.",
            tech: ["Unity", "CSharp"],
            details: ["3D game project developed for my Thesis."],
            isPlayable: true,
            href: "https://squeegeexd.itch.io/a-byte-sized-museum",
        },
        {
            id: "5",
            title: "Wave Function Collapse Algorithm",
            tags: ["Game Development"],
            imageSrc: WFCImage.src,
            description: "A Python-based implementation of the Tile-Based Wave Function Collapse Algorithm",
            tech: ["Python", "Pygame", "Numpy"],
            details: ["Served as a prototype for testing for my final Thesis output."],
            isPlayable: false,
            href: "#",
        },
        {
            id: "6",
            title: "PCDefender",
            tags: ["Game Development"],
            imageSrc: PCDefenderImage.src,
            description:
                "A 2D Tower Defense game where you play as a computer's Antivirus Software defending against waves of computer malware.",
            tech: ["Unity", "CSharp"],
            details: ["Made in 5 days for a Hackathon held by our University."],
            isPlayable: false,
            href: "#",
        },
        {
            id: "7",
            title: "Scatter",
            tags: ["Game Development"],
            imageSrc: ScatterImage.src,
            description: "A 2D RTS game where survival depends on real-time resource scavenging.",
            tech: ["Unity", "CSharp"],
            details: [
                "Made in 2 weeks with a friend for the Pirate Software Game Jam 14 (Jan 12, 2024 – Jan 27, 2024).",
            ],
            isPlayable: true,
            href: "https://squeegeexd.itch.io/scatter",
        },
        {
            id: "8",
            title: "Genetic Algorithm for Solving a Multiple Variable Combinatorial Optimization Problem",
            tags: ["Others"],
            imageSrc: GeneticAlgorithmImage.src,
            description:
                "A Python-based program using a Genetic Algorithm to solve a multi-variable combinatorial optimization problem.",
            tech: ["Python", "Numpy", "Pandas", "Matplotlib"],
            details: [
                "Made alongside a research manuscript of the same title as a final project for my Discrete Structures 2 course.",
                "Manuscript was recognized as runner-up for Best Manuscript in class.",
            ],
            isPlayable: false,
            href: "#",
        },
        {
            id: "9",
            title: "Ender Dragon AI Clone",
            tags: ["Game Development"],
            imageSrc: EnderDragonAIImage.src,
            description: "An attempt to recreate Minecraft's Ender Dragon AI in Unity.",
            tech: ["Unity", "CSharp"],
            details: [
                "Ender Dragon's behavior patterns were created to be as close to the original game as possible",
                "Learned how to implement enemy AI behavior using State Machines to manage the Ender Dragon's behavior patterns.",
            ],
            isPlayable: false,
            href: "#",
        },
        {
            id: "10",
            title: "Portfolio Website",
            tags: ["Web Development"],
            imageSrc: PortfolioImage.src,
            description:
                "A personal website built using Astro, React, and Tailwind CSS, showcasing my game development and algorithm-focused projects.",
            tech: ["Javascript", "React", "TailwindCSS", "Astro"],
            details: [
                "Custom background effect was created by implementing Delauney Triangulation and Poisson Disc Sampling.",
            ],
            isPlayable: true,
            href: "https://darreltraballo.github.io",
        },
    ],
    skills: {
        languages: [
            {
                name: "C#",
                proficiency: "Intermediate",
                yearsOfExperience: 3,
                certifications: [],
                additionalDetails: "",
            },
            {
                name: "Java",
                proficiency: "Intermediate",
                yearsOfExperience: 2,
                certifications: [],
                additionalDetails: "",
            },
            {
                name: "Python",
                proficiency: "Intermediate",
                yearsOfExperience: 2,
                certifications: [],
                additionalDetails: "",
            },
            {
                name: "Javascript",
                proficiency: "Beginner",
                yearsOfExperience: 2,
                certifications: [],
                additionalDetails: "",
            },
        ],
        technologies: {
            game_development: [
                {
                    name: "Unity",
                    proficiency: "Intermediate",
                    yearsOfExperience: 2,
                    certifications: [],
                    additionalDetails: "",
                },
                {
                    name: "HLSL",
                    proficiency: "Beginner",
                    yearsOfExperience: 1,
                    certifications: [],
                    additionalDetails: "",
                },
                {
                    name: "GLSL",
                    proficiency: "Beginner",
                    yearsOfExperience: 1,
                    certifications: [],
                    additionalDetails: "",
                },
                {
                    name: "Pygame",
                    proficiency: "Beginner",
                    yearsOfExperience: 1,
                    certifications: [],
                    additionalDetails: "",
                },
            ],
            web_development: [
                {
                    name: "React",
                    proficiency: "Beginner",
                    yearsOfExperience: 0,
                    certifications: [],
                    additionalDetails: "",
                },
                {
                    name: "Astro",
                    proficiency: "Beginner",
                    yearsOfExperience: 0,
                    certifications: [],
                    additionalDetails: "",
                },
                {
                    name: "TailwindCSS",
                    proficiency: "Beginner",
                    yearsOfExperience: 0,
                    certifications: [],
                    additionalDetails: "",
                },
            ],
            others: [
                {
                    name: "Numpy",
                    proficiency: "Beginner",
                    yearsOfExperience: 1,
                    certifications: [],
                    additionalDetails: "",
                },
                {
                    name: "Pandas",
                    proficiency: "Beginner",
                    yearsOfExperience: 1,
                    certifications: [],
                    additionalDetails: "",
                },
                {
                    name: "Matplotlib",
                    proficiency: "Beginner",
                    yearsOfExperience: 1,
                    certifications: [],
                    additionalDetails: "",
                },
            ],
        },
    },
    // TODO: Add professional experience
    // include internship, just tag it as Others
    professional_experience: [],
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
