import React, { useState } from 'react';
import './BMICalculator.css';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h || w <= 0 || h <= 0) {
      setResult('Please enter valid weight and height.');
      return;
    }

    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);

    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal weight';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';

    setResult(`Your BMI is ${bmi.toFixed(2)} (${category})`);
  };

  return (
    <div className="bmi-container">
      <h1>BMI Calculator</h1>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="e.g. 70"
        />
      </div>
      <div className="input-group">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="e.g. 170"
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      <div className="result">{result}</div>
    </div>
  );
}

export default BMICalculator;