import { useEffect, useState } from "react";
export default function App() {
  const [amount, setAmount] = useState();
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();
        setConverted(data.rates[toCur]);
        setIsLoading(false);
      }
      if (fromCur === toCur) return setConverted(amount);
      convert();
    },
    [amount, fromCur, toCur, isLoading]
  );

  return (
    <div className="app">
      <Input amount={amount} setAmount={setAmount} isLoading={isLoading} />
      <SelectFrom
        fromCur={fromCur}
        setFromCur={setFromCur}
        isLoading={isLoading}
      />
      <SelectTo toCur={toCur} setToCur={setToCur} />
      <Output
        converted={converted}
        setConverted={setConverted}
        toCur={toCur}
        isLoading={isLoading}
      />
    </div>
  );
}

// API Link: `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

function Input({ amount, setAmount, isLoading }) {
  return (
    <input
      type="number"
      placeholder="Input amount to convert"
      value={amount}
      onChange={(e) => setAmount(Number(e.target.value))}
      className="input-field"
      disabled={isLoading}
    />
  );
}

function SelectFrom({ fromCur, setFromCur, isLoading }) {
  return (
    <select
      value={fromCur}
      onChange={(e) => setFromCur(e.target.value)}
      className="currency"
      disabled={isLoading}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}

function SelectTo({ toCur, setToCur, isLoading }) {
  return (
    <select
      value={toCur}
      onChange={(e) => setToCur(e.target.value)}
      className="currency"
      disabled={isLoading}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}

function Output({ converted, toCur }) {
  return (
    <p className="output">
      OutPut: {converted} {toCur}
    </p>
  );
}
