import React, { useState } from 'react';
//import './App.css'; // Import the CSS file
import Header from './components/Header';
import UploadSection from './components/UploadSection';
import ResultsSection from './components/ResultsSection';
function App() {
  const [isUploaded, setIsUploaded] = useState(false);
  const [nutritionalData, setNutritionalData] = useState({
    calories: 0,
    protein: 0,
    fat: 0,
    carbs: 0,
  });

  // Simulate nutritional analysis (replace with actual processing logic)
  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    setIsUploaded(true);
    setNutritionalData({
      calories: Math.floor(Math.random() * 1000),
      protein: Math.floor(Math.random() * 100),
      fat: Math.floor(Math.random() * 50),
      carbs: Math.floor(Math.random() * 200),
    });
  };

  return (
    <div className="App">
     <Header/>
      <main className="main-container">
        <UploadSection onImageUpload={handleImageUpload} />
        <ResultsSection isUploaded={isUploaded} nutritionalData={nutritionalData} />
      </main>
    </div>
  );
}

export default App;
