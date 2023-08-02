import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("click button below");
  const [count, setcount] = useState(0);

  async function getadvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setcount(count + 1);
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getadvice} id="butt">
        Get Advice
      </button>
      <p>
        you have seen <strong>{count}</strong> advice
      </p>
    </div>
  );
}
