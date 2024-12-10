import React, { useState } from "react";

const Dropdown = () => {
  const [active, setActive] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const data = [
    {
      title: "Title 01",
      options: [
        "Option 01",
        "Option 02",
        { subTitle: "SubTitle 01", subOptions: ["SubOption 01", "SubOption 02"] },
      ],
    },
    {
      title: "Title 02",
      options: ["Option 01", "Option 02"],
    },
    {
      title: "Title 03",
      options: ["Option 01", "Option 02", "Option 03"],
    },
  ];

  const handleClickDropDown = (index) => {
    setActive(active === index ? null : index);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredOptions = (options) =>
    options.filter((option) =>
      typeof option === "string"
        ? option.toLowerCase().includes(searchQuery)
        : option.subTitle.toLowerCase().includes(searchQuery)
    );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div style={{ width: "300px", margin: "50px auto", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "20px",
            border: "1px solid #ccc",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            padding: "10px",
          }}
        >
          {data.map((item, index) => (
            <div key={index}>
              <p
                onClick={() => handleClickDropDown(index)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "#e6e6e6",
                  padding: "10px",
                  margin: "5px 0",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#d1d1d1")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#e6e6e6")}
              >
                {item.title}
              </p>
              {index === active && (
                <div>
                  {filteredOptions(item.options).map((option, idx) =>
                    typeof option === "string" ? (
                      <p
                        key={idx}
                        style={{
                          cursor: "pointer",
                          padding: "5px 10px",
                          marginLeft: "20px",
                          backgroundColor: "#f1f1f1",
                          borderRadius: "5px",
                        }}
                      >
                        {option}
                      </p>
                    ) : (
                      <div key={idx}>
                        <p
                          style={{
                            cursor: "pointer",
                            padding: "5px 10px",
                            marginLeft: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          {option.subTitle}
                        </p>
                        <div style={{ marginLeft: "20px" }}>
                          {option.subOptions.map((subOption, subIdx) => (
                            <p
                              key={subIdx}
                              style={{
                                padding: "5px 10px",
                                backgroundColor: "#e0e0e0",
                                borderRadius: "5px",
                                marginLeft: "20px",
                              }}
                            >
                              {subOption}
                            </p>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
