
import React, { useState } from 'react';
import '../styles/Child.css'

const Selection = ({ applyColor }) => {
  const [selectionStyle, updateSelectionStyle] = useState({ background: "" });

  return (
    <div
      className="fix-box"
      style={selectionStyle}
      onClick={() => applyColor(updateSelectionStyle)}
    >
     <h1 >Selection</h1>
    </div>
  );
};

export default Selection;
