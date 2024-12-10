import React, { useState } from "react";

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div>
        {children.map((child, index) =>
          child.type === Tab ? (
            <button
              key={index}
              style={{ fontWeight: activeTab === index ? "bold" : "normal" }}
              onClick={() => setActiveTab(index)}
            >
              {child.props.title}
            </button>
          ) : null
        )}
      </div>
      <div>{children[activeTab]}</div>
    </div>
  );
};


