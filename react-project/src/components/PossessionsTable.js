import React from "react";

const PossessionTable = ({ possessions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Libelle</th>
          <th>Valeur Initiale</th>
          <th>Date Debut</th>
          <th>Date Fin</th>
          <th>Amortissement</th>
          <th>Valeur Actuelle</th>
        </tr>
      </thead>
      <tbody>
        {possessions.map((possession, index) => (
          <tr key={index}>
            <td>{possession.libelle}</td>
            <td>{possession.valeur}</td>
            <td>{possession.dateDebut.toDateString()}</td>
            <td>{possession.dateFin.toDateString()}</td>
            <td>{possession.tauxAmortissement}%</td>
            <td>{possession.getValeur(new Date()).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PossessionTable;
