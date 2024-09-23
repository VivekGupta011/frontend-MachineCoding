import React, { useState } from "react";

const Faq = () => {
  const faqData = [
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework for building fast web applications with features like server-side rendering and static site generation.",
    },
    {
      question: "How do I install Next.js?",
      answer:
        "You can install Next.js using npm or yarn by running `npx create-next-app` or `yarn create next-app` in your terminal.",
    },
    {
      question: "What is server-side rendering?",
      answer:
        "Server-side rendering (SSR) is a technique where pages are rendered on the server instead of the client, allowing for faster page load times and better SEO.",
    },
  ];

  //state to track which FAQ is expanded
  const [activeIndex, setActiveIndex] = useState(null);

  //   toggle function to open/close FAQ answer
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h1>Frequently Asked Question</h1>
      <div>
        {faqData.map((faq, index) => (
          <div>
            <h3 onClick={() => toggleFAQ(index)}>{faq.question}</h3>
            {activeIndex === index && <p>{faq.answer}</p>}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
