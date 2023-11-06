import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <h1>Date Counter</h1>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span className="step-count">Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span className="step-count">Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <div className="text">
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}
