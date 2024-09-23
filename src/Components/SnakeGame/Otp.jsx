import React, { useState, useRef } from 'react';

const TwoFactorCodeInput = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;

    // Only accept digits 0-9
    if (/^[0-9]$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to the next input if not the last
      if (index < 3 && value !== '') {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newCode = [...code];

      // If the current input is empty, move focus to the previous input and clear its value
      if (newCode[index] === '' && index > 0) {
        inputsRef.current[index - 1].focus();
        newCode[index - 1] = '';
        setCode(newCode);
      } else {
        newCode[index] = '';
        setCode(newCode);
      }
    }

    // Arrow keys for easier navigation between inputs
    if (e.key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1].focus();
    } else if (e.key === 'ArrowRight' && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    submitCode(fullCode);
  };

  const submitCode = (inputCode) => {
    const hardcodedCode = '1234';
    if (inputCode === hardcodedCode) {
      alert('Code is correct!');
    } else {
      alert('Incorrect code. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputsRef.current[index] = el)}
            style={{
              width: '50px',
              height: '50px',
              fontSize: '24px',
              textAlign: 'center',
            }}
          />
        ))}
      </div>
      <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
        Submit Code
      </button>
    </form>
  );
};

export default TwoFactorCodeInput;
