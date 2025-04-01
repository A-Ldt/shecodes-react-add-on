import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="main-title">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a href="https://github.com/A-Ldt" target="_blank" rel="noopener noreferrer">
              Alina Linscheidt
            </a>{" "}
            and is{" "}
            <a href="https://github.com/A-Ldt/shecodes-react-add-on" target="_blank" rel="noopener noreferrer">
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a href="https://digital-dictionary.netlify.app/" target="_blank" rel="noopener noreferrer">
              hosted on Netlify
            </a>.
          </small>
        </footer>
      </div>
    </div>
  );
}
