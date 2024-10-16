import WaterImage from "../assets/images/projects/Water.gif"
import PokemonImage from "../assets/images/projects/Pokemon.gif"
import AByteSizedMuseumImage from "../assets/images/projects/AByteSizedMuseum.png"
import WFCImage from "../assets/images/projects/WFC_Python.png"
import PCDefenderImage from "../assets/images/projects/PCDefender.png"
import ScatterImage from "../assets/images/projects/Scatter.png"
import GeneticAlgorithmImage from "../assets/images/projects/GeneticAlgorithm.png"
import EnderDragonAIImage from "../assets/images/projects/EnderDragonAI.gif"
import PortfolioImage from "../assets/images/projects/PortfolioImage.png"

export const data = {
    projects: [
        {
            id: "1",
            title: "Water Simulation",
            tag: "Game Development",
            imageSrc: WaterImage.src,
            description:
                "An attempt to create a simple simulation of waves using Unity's Shader Language, implementing Sum of Sines and Lambertian Diffuse lighting.",
            tech: ["Unity", "CSharp"],
            details: [
                "Learned how to work with and configure Vertex and Fragment Shaders using Unity's Shader Language.",
            ],
        },
        {
            id: "2",
            title: "Pokemon Battle System Clone",
            tag: "Game Development",
            imageSrc: PokemonImage.src,
            description: "A simplified recreation of Pokemon's Generation 1 battle system.",
            tech: ["Unity", "CSharp"],
            details: [
                "Used PokeAPI to collect and display Pokemon data.",
                "Learned how to use Unity's custom inspector.",
                "Learned how to create/edit Scriptable Objects programmatically.",
            ],
        },
        {
            id: "3",
            title: "A Byte-Sized Museum",
            tag: "Game Development",
            imageSrc: AByteSizedMuseumImage.src,
            description:
                "A Game-Based Learning application that introduces computer programming concepts using Wave Function Collapse for procedural generation.",
            tech: ["Unity", "CSharp"],
            details: ["3D game project developed for my Thesis."],
        },
        {
            id: "4",
            title: "Wave Function Collapse Algorithm",
            tag: "Game Development",
            imageSrc: WFCImage.src,
            description: "A Python-based implementation of the Tile-Based Wave Function Collapse Algorithm",
            tech: ["Python", "Pygame", "Numpy"],
            details: ["Served as a prototype for testing for my final Thesis output."],
        },
        {
            id: "5",
            title: "PCDefender",
            tag: "Game Development",
            imageSrc: PCDefenderImage.src,
            description:
                "A 2D Tower Defense game where you play as a computer's Antivirus Software defending against waves of computer malware.",
            tech: ["Unity", "CSharp"],
            details: ["Made in 5 days for a Hackathon held by our University."],
        },
        {
            id: "6",
            title: "Scatter",
            tag: "Game Development",
            imageSrc: ScatterImage.src,
            description: "A 2D RTS game where survival depends on real-time resource scavenging.",
            tech: ["Unity", "CSharp"],
            details: [
                "Made in 2 weeks with a friend for the Pirate Software Game Jam 14 (Jan 12, 2024 – Jan 27, 2024).",
            ],
        },
        {
            id: "7",
            title: "Genetic Algorithm for Solving a Multiple Variable Combinatorial Optimization Problem",
            tag: "Others",
            imageSrc: GeneticAlgorithmImage.src,
            description:
                "A Python-based program using a Genetic Algorithm to solve a multi-variable combinatorial optimization problem.",
            tech: ["Python", "Numpy", "Pandas", "Matplotlib"],
            details: [
                "Made alongside a research manuscript of the same title as a final project for my Discrete Structures 2 course.",
                "Manuscript was recognized as runner-up for Best Manuscript in class.",
            ],
        },
        {
            id: "8",
            title: "Ender Dragon AI Clone",
            tag: "Game Development",
            imageSrc: EnderDragonAIImage.src,
            description: "An attempt to recreate Minecraft's Ender Dragon AI in Unity.",
            tech: ["Unity", "CSharp"],
            details: [
                "Ender Dragon's behavior patterns were created to be as close to the original game as possible",
                "Learned how to implement enemy AI behavior using State Machines to manage the Ender Dragon's behavior patterns.",
            ],
        },
        {
            id: "9",
            title: "Portfolio Website",
            tag: "Web Development",
            imageSrc: PortfolioImage.src,
            description:
                "A personal website built using Astro, React, and Tailwind CSS, showcasing my game development and algorithm-focused projects.",
            tech: ["Javascript", "React", "TailwindCSS", "Astro"],
            details: [
                "Custom background effect was created by implementing Delauney Triangulation and Poisson Disc Sampling.",
            ],
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
                yearsOfExperience: 1,
                certifications: [],
                additionalDetails: "",
            },
            {
                name: "Javascript",
                proficiency: "Beginner",
                yearsOfExperience: 0,
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
                    name: "Unity Shader Programming (HLSL)",
                    proficiency: "Beginner",
                    yearsOfExperience: 0,
                    certifications: [],
                    additionalDetails: "",
                },
                {
                    name: "Pygame",
                    proficiency: "Beginner",
                    yearsOfExperience: 0,
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
                    yearsOfExperience: 0,
                    certifications: [],
                    additionalDetails: "",
                },
                {
                    name: "Pandas",
                    proficiency: "Beginner",
                    yearsOfExperience: 0,
                    certifications: [],
                    additionalDetails: "",
                },
                {
                    name: "Matplotlib",
                    proficiency: "Beginner",
                    yearsOfExperience: 0,
                    certifications: [],
                    additionalDetails: "",
                },
                {
                    name: "Test item",
                    proficiency: "Advanced",
                    yearsOfExperience: 5,
                    certifications: ["Test Certification 1", "Test Certification 2", "Test Certification 3"],
                    additionalDetails:
                        "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
                },
            ],
        },
    },
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
