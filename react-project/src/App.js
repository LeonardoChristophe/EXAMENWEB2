import React from "react";
import PossessionTable from "./components/PossessionTable";
import PatrimoineCalculator from "./components/PatrimoineCalculator";
import Patrimoine from "../../patrimoine-economique/Patrimoine";
import BienMateriel from "../../patrimoine-economique/BienMateriel";
import Personne from "../../patrimoine-economique/Personne";

const App = () => {
  const personne = new Personne("John Doe");
  const possessions = [
    new BienMateriel(
      personne,
      "Voiture",
      15000,
      new Date("2020-01-01"),
      new Date("2025-01-01"),
      10
    ),
    // Ajouter d'autres possessions ici
  ];

  const patrimoine = new Patrimoine(personne, possessions);

  return (
    <div>
      <PossessionTable possessions={patrimoine.possessions} />
      <PatrimoineCalculator patrimoine={patrimoine} />
    </div>
  );
};

export default App;
