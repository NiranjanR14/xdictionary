import React, { useState } from "react";

const Dictionary = () => {
  // Initialize the dictionary state
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  // Handle the search functionality
  const handleSearch = () => {
    const foundWord = dictionary.find((entry) => entry.word.toLowerCase() === searchTerm.toLowerCase());
    if (foundWord) {
      setResult(<> <p>{foundWord.meaning}</p></>);
    } else {
      setResult(<> <p>Word not found in the dictionary.</p></>);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Dictionary App</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter a word"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <button onClick={handleSearch} style={{ padding: "10px 20px" }}>
          Search
        </button>
      </div>
      <div>
        {result && (
          <div style={{ marginTop: "20px", fontSize: "18px" }}>
            <h3>Definition:</h3>
             {typeof result === "string" ? <p>{result}</p> : result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dictionary;