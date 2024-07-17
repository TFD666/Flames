import React from 'react';

const DailySection = ({ name, exercises, diet }) => {
    return (
        <section>
            <h2>{name}</h2>
            <div>
                <h3>Exercises</h3>
                {exercises.map((exercise, index) => (
                    <div key={index}>
                        <img src={exercise.src} alt={exercise.alt} />
                        <p>{exercise.description}</p>
                    </div>
                ))}
            </div>
            <div>
                <h3>Diet</h3>
                <div>
                    <img src={diet.src} alt={diet.alt} />
                    <p>{diet.description}</p>
                </div>
            </div>
        </section>
    );
};

export default DailySection;
