import React, { useEffect, useState } from "react";

function Jeopardy(props) {
  let [score, setScore] = useState(0);
  let [jeopardyData, setJeopardyData] = useState({});
  let [userAnswer, setUserAnswer] = useState("");
  let [resultMessage, setResultMessage] = useState("");

  // When the component mounts, get the first question
  useEffect(() => {
    getNewQuestion();
  }, []);

  // Get a new random question from the API and add it to the data object in state
  let getNewQuestion = () => {
    // Use fetch to make an API call and get a random Jeopardy question (returns a promise)
    fetch(`https://jservice.xyz/api/random-clue`)
      // On success of the fetch request, turn the response that came back into JSON
      .then((response) => response.json())
      // On success of turning the response into JSON (data we can work with), lets add that data to state
      .then((data) => {
        // Put the data in the console just so we can see it
        console.log("data from the api", data);

        // Update state with the data from the API causing the page to re-render
        setJeopardyData(data);
        setResultMessage(""); // Clear any previous result messages
      })
      // Handle any errors/failures with getting data from the API
      .catch((error) => {
        console.log(error);
      });
  };

  // Handle the user's answer submission
  let handleSubmit = (event) => {
    event.preventDefault();

    // Check if the user's answer matches the correct answer (ignoring case)
    if (userAnswer.toLowerCase() === jeopardyData.answer.toLowerCase()) {
      setScore(score + jeopardyData.value); // Increase the score
      setResultMessage("Correct! Well done.");
    } else {
      setScore(score - jeopardyData.value); // Decrease the score
      setResultMessage("Incorrect. The correct answer was: " + jeopardyData.answer);
    }

    setUserAnswer(""); // Clear the input field
    getNewQuestion(); // Get a new question
  };

  // Present the results to the user
  return (
    <div>
      <h1>Jeopardy Game</h1>
      <h2>Score: {score}</h2>
      {jeopardyData.question ? (
        <div>
          <p>Category: {jeopardyData.category && jeopardyData.category.title}</p>
          <p>Point Value: {jeopardyData.value}</p>
          <p>Question: {jeopardyData.question}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Your answer"
            />
            <button type="submit">Submit Answer</button>
          </form>
          {resultMessage && <p>{resultMessage}</p>}
        </div>
      ) : (
        <p>Loading question...</p>
      )}
    </div>
  );
}

export default Jeopardy;
