import React from 'react';

export default function Projects() {
    return (
        <div className="work-list">
        <h1>My Projects</h1>
            <ul className="work-list">
                <li>
                    <label htmlFor="work-link">
                        Full Stack Project: <a href="https://quirky-heisenberg-45af30.netlify.com/"> RPG Character Builder</a>
                    </label>
                    <p>The RPG Character Builder is a full stack web application designed to allow users to choose from a preset list of options in order t create custom characters. The application is built using React.js, Redux, Express, Node,Javascript, and Chai.</p>
                    <a href="https://github.com/JTHUTCH94/Character-Builder-Client">GitHub</a>
                </li>
            </ul>
        </div>
    )
};