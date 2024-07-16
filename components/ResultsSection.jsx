import React from 'react';
import '../App.css'; 


function ResultsSection({ isUploaded, nutritionalData }) {
  return (
    <section className={`results-section ${isUploaded ? '' : 'hidden'}`}>
      <h3>Nutritional Breakdown (Simulated)</h3>
      <div id="nutrition-details">
        <p>Calories: <span id="calories">{nutritionalData.calories}</span></p>
        <p>Protein: <span id="protein">{nutritionalData.protein}</span></p>
        <p>Fat: <span id="fat">{nutritionalData.fat}</span></p>
        <p>Carbs: <span id="carbs">{nutritionalData.carbs}</span></p>
      </div>
      <p id="suggestions">{/* Add suggestions based on nutritional data */}</p>
    </section>
  );
}

export default ResultsSection;
