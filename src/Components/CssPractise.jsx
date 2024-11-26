import React from "react";

const CssPractise = () => {
  return (
    <div>
      <>
        <div className="container">
          <div className="flex-item">1</div>
          <div className="flex-item">2</div>
          <div className="flex-item">3</div>
        </div>

        <div class="grid-container">
          <div class="grid-item">1</div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>
          <div class="grid-item">4</div>
          <div class="grid-item">5</div>
          <div class="grid-item">6</div>
        </div>

        <div className="grid-container-input">
          <div>
            <input type="text" value={""} className="style-input" />
          </div>
          <div>
            <input type="text" value={""} className="style-input" />
          </div>
          <div>
            <input type="text" value={""} className="style-input" />
          </div>
          <div>
            <input type="text" value={""} className="style-input" />
          </div>
        </div>
      </>
    </div>
  );
};

export default CssPractise;
