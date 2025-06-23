import React from "react";
import { useSpecialJokes } from "./hooks/useSpecialJokes";

function JokesWithHooks() {
  const { jokes, loading } = useSpecialJokes();

  if (loading) {
    return <h1>Loading...</h1>;
  }

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

export default JokesWithHooks;
