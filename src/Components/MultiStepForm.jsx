// components/MultiStepForm.js
import { useState } from "react";

const MultiStepForm = () => {
  // Form step and data state
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: ""
  });

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle form input changes
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  // Handle form submission (final step)
  const handleSubmit = () => {
    // Submit the form data, for example, via an API request
    console.log("Form submitted:", formData);
    alert("Form submitted!");
  };

  // Form steps rendering
  switch (step) {
    case 1:
      return (
        <UserInfo
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 2:
      return (
        <AddressInfo
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 3:
      return (
        <Confirm
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          formData={formData}
        />
      );
    default:
      return <div>Unknown Step</div>;
  }
};

// Step 1: User Info Component
const UserInfo = ({ nextStep, handleChange, formData }) => {
  return (
    <div>
      <h2>User Information</h2>
      <label>
        Name:
        <input
          type="text"
          value={formData.name}
          onChange={handleChange("name")}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
        />
      </label>
      <br />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

// Step 2: Address Info Component
const AddressInfo = ({ prevStep, nextStep, handleChange, formData }) => {
  return (
    <div>
      <h2>Address Information</h2>
      <label>
        Address:
        <input
          type="text"
          value={formData.address}
          onChange={handleChange("address")}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          value={formData.city}
          onChange={handleChange("city")}
        />
      </label>
      <br />
      <label>
        Country:
        <input
          type="text"
          value={formData.country}
          onChange={handleChange("country")}
        />
      </label>
      <br />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

// Step 3: Confirm and Submit Component
const Confirm = ({ prevStep, handleSubmit, formData }) => {
  return (
    <div>
      <h2>Confirm Your Information</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Address:</strong> {formData.address}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>Country:</strong> {formData.country}</p>
      <br />
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default MultiStepForm;
