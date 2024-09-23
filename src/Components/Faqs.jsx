import React, { useState } from "react";

const Faqs = () => {
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

  //faq open /close
  const [faqOpen, setFaqopen] = useState([]);
  const handleToggle = (index) => {
    if (faqOpen.includes(index)) {
      const values = faqOpen.filter((item) => item != index);
      setFaqopen(values);
    } else {
      setFaqopen([...faqOpen, index]);
    }
  };

  return (
    <div>
      <h1>Frequently Asked Question</h1>
      {faqData.map((faq, index) => (
        <div>
          <div
            onClick={() => handleToggle(index)}
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "18px",
              marginBottom: "10px",
            //   borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
            }}
          >
            {faq.question}
          </div>
        
          {faqOpen.includes(index) && <div style={{ fontSize: '16px', color: '#555' }}>{faq.answer}</div>}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Faqs;
