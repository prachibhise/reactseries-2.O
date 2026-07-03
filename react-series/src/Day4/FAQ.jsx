import "./FAQ.css";
import FAQCard from "./Components/FAQCard";

function FAQ() {
  const faqs = [
    {
      question: "What is your Name?",
      answer:
        "Prachi."
    },
    {
      question: "2+3?",
      answer: "5"
    },
    {
      question: "What is Capital of INDIA?",
      answer: "Delhi"
    },
    {
      question: "What is name of Our Galaxy?",
      answer: "Milky Way"
    },
    {
      question: "Why Age Grow?",
      answer: "Because Time goes."
    }
  ];

  return (
    <div className="app">
      <h1> FAQ Accordion</h1>

      <div className="faqContainer">
        {faqs.map((faq, index) => (
          <FAQCard
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQ;