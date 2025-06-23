import { useEffect, useState } from "react";

export function Jokes() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomjokes?limit=10")
      .then((res) => res.json())
      .then((data) => setJokes(data.data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log("Jokes", jokes);

  return (
    <div>
      <h1>Top 10 Jokes</h1>
      <ul>
        {jokes.map((jokes) => (
          <li key={jokes.id}>{jokes.content}</li>
        ))}
      </ul>
    </div>
  );
}
