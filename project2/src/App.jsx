import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [stephandler, setStephandler] = useState(1);
  function handlePrevious() {
    // setStephandler((stephandler) => ());
    // stephandler > 1 && setStephandler((stephandler) => stephandler - 1);
    stephandler > 1 && setStephandler(stephandler - 1);
    console.log(stephandler);
  }
  function handleNext() {
    stephandler < messages.length &&
      // setStephandler((stephandler) => stephandler + 1);
      setStephandler(stephandler + 1);
    console.log(stephandler);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={stephandler >= 1 ? "active" : ""}>1</div>
        <div className={stephandler >= 2 ? "active" : ""}>2</div>
        <div className={stephandler >= 3 ? "active" : ""}>3</div>
      </div>
      {stephandler > messages.length ? null : (
        <p className="message">
          Step: {stephandler} {messages[stephandler - 1]}
        </p>
      )}

      <div className="buttons">
        <button
          style={{
            backgroundColor: "#7950f2",
            color: "#fff",
            padding: "10px 15px",
          }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{
            backgroundColor: "#7950f2",
            color: "#fff",
            padding: "10px 15px",
          }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
