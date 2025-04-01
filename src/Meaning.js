import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  const meaning = props.meaning;

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>

      <div className="definition">
        <span className="definition-label">Definition:</span> {meaning.definition}
      </div>

      {meaning.example && (
        <div className="example">“{meaning.example}”</div>
      )}

      {meaning.synonyms && meaning.synonyms.length > 0 && (
        <Synonyms synonyms={meaning.synonyms} />
      )}
    </div>
  );
}
