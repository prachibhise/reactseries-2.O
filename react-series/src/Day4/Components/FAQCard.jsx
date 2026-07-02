import { useState } from "react";
import "./FAQCard.css";

function FAQCard(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  function toggleAnswer() {
    setShowAnswer(!showAnswer);
  }

  return (
    <div className="faqCard">

      <div className="faqHeader" onClick={toggleAnswer}>
        <h2>{props.question}</h2>

        <span className="icon">
          {showAnswer ? "−" : "+"}
        </span>
      </div>

      {showAnswer && (
        <p className="answer">{props.answer}</p>
      )}

    </div>
  );
}

export default FAQCard;