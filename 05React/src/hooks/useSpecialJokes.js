import { useEffect, useState } from "react";

export const useSpecialJokes = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomjokes?limit=10")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load the jokes");
        }
        return res.json();
      })
      .then((data) => {
        setJokes(data.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        throw new Error(err.message);
        setLoading(false);
      });
  }, []);

  return { jokes, loading };
};
