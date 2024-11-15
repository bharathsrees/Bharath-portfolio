import React from "react";
import Movies from '../assets/Movies.png';
import Path from '../assets/path.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 duration-300">
            {/* Image with Slide-In Animation */}
            <img
                className="w-full rounded-t-lg h-auto object-cover slide-in-up"
                src={image}
                alt={title}
            />

            <div className="p-4 sm:p-6">
                {/* Title with Zoom-In Animation */}
                <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500 zoom-in">
                    {title}
                </h5>

                {/* Description with Slide-In-Left Animation */}
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400 slide-in-left">
                    {description}
                </p>
            </div>

            {/* Technologies and GitHub Link */}
            <div className="m-2 sm:m-4 lg:m-6 flex justify-between fade-in">
                <div className="flex flex-wrap gap-2 pl-2">
                    {technologies.map((tag, index) => (
                        <p key={`${index}-${tag}`} className="text-[14px] text-blue-500">
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} target="_blank" rel="noopener noreferrer" className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">
                    GitHub
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export const project = [
    {
        title: 'Pathfinder Pro',
        description: 'Pathfinder Pro is a sleek and user-friendly mobile application UI designed using FlutterFlow. It offers a clean interface for real-time traffic updates, optimal route suggestions, and parking spot discovery, enhancing the overall commuting experience.',
        image: Path,
        git: 'https://github.com/bharathsrees/Code-with-Google-Maps',
        technologies: ['FlutterFlow', 'Flutter', 'Firebase']
    },
    {
        title: 'Movie Genre Classification',
        description: 'Movie Genre Classification is a machine learning project that uses TF-IDF vectorization and Naive Bayes to predict movie genres from plot descriptions, offering quick insights into film categories.',
        image: Movies,
        git: "https://github.com/bharathsrees/CODSOFT-INTERNSHIP-MACHINE-LEARNING/tree/main/Task_1_Movie_Genre_Classification",
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Joblib']
    }
];

export default Projects;
