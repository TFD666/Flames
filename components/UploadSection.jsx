import React from 'react';
import '../App.css'; 

function UploadSection({ onImageUpload }) {
  return (
    <section className="upload-section">
      <h3>Track Your Nutrition - It's Simple!</h3>
      <p>Select an image of your meal for a simulated nutritional analysis (real-time processing not yet available).</p>
      <input type="file" id="foodImage" accept="image/*" className="upload-button" onChange={onImageUpload} />
      <p id="image-upload-message"></p>
    </section>
  );
}

export default UploadSection;
