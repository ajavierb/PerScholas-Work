import react from "react";
import Score from "./Score";

export default function Student(props) {
  const { name, bio, scores } = props.student;

  return (
    <div className="student-container">
      <h3>{name}</h3>
      <div className="student-content">
        <p>{bio}</p>
        <h4>Scores:</h4>
        <ul>
          {scores.map((score, index) => (
            <Score key={index} score={score} />
          ))}
        </ul>
      </div>
    </div>
  );
}