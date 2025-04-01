import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (!props.results) {
    return null;
  }

  return (
    <div className="Results">
      <section>
        <h2>{props.results.word}</h2>
        {props.results.phonetic && (
          <div className="phonetic">/{props.results.phonetic}/</div>
        )}
      </section>

      {props.results.meanings &&
        [...props.results.meanings]
          .sort((a, b) => {
            const order = ["noun", "verb", "adjective", "adverb"];
            return (
              order.indexOf(a.partOfSpeech) - order.indexOf(b.partOfSpeech)
            );
          })
          .map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
    </div>
  );
}

