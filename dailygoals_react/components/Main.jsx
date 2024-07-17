// Main.js
import React from 'react';
import DailySection from './DailySection';

const Main = () => {
    const days = [
        {
            id: 'monday',
            name: 'Monday',
            exercises: [
                { src: '/images/man-doing-standing-dumbbell-bicep-260nw-1850250391.webp', alt: 'Bicep Curl', description: 'Bicep Curl: 3 sets of 12 reps' },
                { src: '/images/13991101.webp', alt: 'Tricep Dip', description: 'Tricep Dip: 3 sets of 12 reps' },
                { src: '/images/Male_Chest_Press_1296x728-header-1296x728.webp', alt: 'Chest Press', description: 'Chest Press: 3 sets of 12 reps' },
            ],
            diet: { src: '/images/5a9c35b317076400b397de774cd04404.jpg', alt: 'Omelette', description: 'Omelette with vegetables and whole wheat toast' }
        },
        {
            id: 'tuesday',
            name: 'Tuesday',
            exercises: [
                { src: '/images/images.png', alt: 'Squat', description: 'Squat: 3 sets of 12 reps' },
                { src: '/images/images.jpeg', alt: 'Lunges', description: 'Lunges: 3 sets of 12 reps' },
                { src: '/images/beinpresse.webp', alt: 'Leg Press', description: 'Leg Press: 3 sets of 12 reps' },
            ],
            diet: { src: '/images/Grown_Strong_Grilled_Chicken_With_Quinoa_Roasted_Vegetables.webp', alt: 'Grilled Chicken', description: 'Grilled chicken breast with quinoa and steamed vegetables' }
        },
        {
            id: 'wednesday',
            name: 'Wednesday',
            exercises: [
                { src: '/images/health-benefits-of-pushups-GettyImages-498315681-7008d40842444270868c88b516496884.jpg', alt: 'Push-up', description: 'Push-up: 3 sets of 12 reps' },
                { src: '/images/man-in-sportswear-lies-on-the-gym-bench-and-workout-royalty-free-image-1678124106.jpg', alt: 'Incline Dumbbell Press', description: 'Incline Dumbbell Press: 3 sets of 12 reps' },
                { src: '/images/dumbbell-lateral-raise.webp', alt: 'Lateral Raise', description: 'Lateral Raise: 3 sets of 12 reps' },
            ],
            diet: { src: '/images/images (1).jpeg', alt: 'Salad', description: 'Mixed green salad with grilled chicken, avocado, and whole wheat croutons' }
        },
        {
            id: 'thursday',
            name: 'Thursday',
            exercises: [
                { src: '/images/Blog-Deadlifting-Male_1800x672_1200x672_acf_cropped.jpg', alt: 'Deadlift', description: 'Deadlift: 3 sets of 12 reps' },
                { src: '/images/0_960x540.jpg', alt: 'Bent Over Row', description: 'Bent Over Row: 3 sets of 12 reps' },
                { src: '/images/seated-dumbbell-shoulder-press-800.jpg', alt: 'Shoulder Press', description: 'Shoulder Press: 3 sets of 12 reps' },
            ],
            diet: { src: '/images/cP40JX9hRM2dJk38Bng3_banana-spinach-smoothie-2.jpg', alt: 'Smoothie', description: 'Protein smoothie with banana, spinach, and almond milk' }
        },
        {
            id: 'friday',
            name: 'Friday',
            exercises: [
                { src: '/images/images (1).png', alt: 'Bicycle Crunch', description: 'Bicycle Crunch: 3 sets of 12 reps' },
                { src: '/images/rtwist1-jpg-1570636420.jpg', alt: 'Russian Twist', description: 'Russian Twist: 3 sets of 12 reps' },
                { src: '/images/maxresdefault.jpg', alt: 'Leg Raise', description: 'Leg Raise: 3 sets of 12 reps' },
            ],
            diet: { src: '/images/SalmonQuinoaAsparagus-9.webp', alt: 'Grilled Salmon', description: 'Grilled salmon with quinoa and steamed asparagus' }
        },
        {
            id: 'saturday',
            name: 'Saturday',
            exercises: [
                { src: '/images/images (3).jpeg', alt: 'Rest Day', description: 'Rest Day' },
            ],
            diet: { src: '/images/images (2).jpeg', alt: 'Oatmeal', description: 'Oatmeal with banana, honey, and almond milk' }
        },
        {
            id: 'sunday',
            name: 'Sunday',
            exercises: [
                { src: '/images/images (3).jpeg', alt: 'Rest Day', description: 'Rest Day' },
            ],
            diet: { src: '/images/1484024438211.jpeg', alt: 'Scrambled Eggs', description: 'Scrambled eggs with whole wheat toast and avocado' }
        },
    ];

    return (
        <main>
            {days.map(day => (
                <DailySection
                    key={day.id}
                    name={day.name}
                    exercises={day.exercises}
                    diet={day.diet}
                />
            ))}
        </main>
    );
};

export default Main;
