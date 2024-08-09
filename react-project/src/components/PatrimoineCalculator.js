import React, { useState } from "react";

const PatrimoineCalculator = ({ patrimoine }) => {
  const [date, setDate] = useState(new Date());
  const [valeurPatrimoine, setValeurPatrimoine] = useState(0);

  const handleDateChange = (e) => {
    setDate(new Date(e.target.value));
  };

  const calculerValeurPatrimoine = () => {
    setValeurPatrimoine(patrimoine.getValeur(date));
  };

  return (
    <div>
      <input type="date" onChange={handleDateChange} />
      <button onClick={calculerValeurPatrimoine}>Valider</button>
      <p>Valeur du Patrimoine : {valeurPatrimoine.toFixed(2)}</p>
    </div>
  );
};

export default PatrimoineCalculator;
