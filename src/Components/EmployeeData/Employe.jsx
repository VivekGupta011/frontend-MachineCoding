import React, { useState, useEffect } from "react";
// import './App.css'; // Add your CSS here

const employeeData = [
  {
    id: 1001,
    imageUrl: "https://cdn-icons-png.flaticon.com/512/0/93.png",
    firstName: "Thomas",
    lastName: "Leannon",
    email: "Thomas.Leannon@dummyapis.com",
    contactNumber: "4121091095",
    age: 43,
    dob: "26/08/1979",
    salary: 1,
    address: "Address1",
  },
  {
    id: 1002,
    imageUrl: "https://cdn-icons-png.flaticon.com/512/0/93.png",
    firstName: "Faye",
    lastName: "Sauer",
    email: "Faye.Sauer@dummyapis.com",
    contactNumber: "4914696673",
    age: 60,
    dob: "28/06/1962",
    salary: 2,
    address: "Address2",
  },
  //   {
  //     id: 1003,
  //     imageUrl: "https://cdn-icons-png.flaticon.com/512/0/93.png",
  //     firstName: "Deven",
  //     lastName: "Halvorson",
  //     email: "Deven.Halvorson@dummyapis.com",
  //     contactNumber: "4479795571",
  //     age: 29,
  //     dob: "06/01/1993",
  //     salary: 3,
  //     address: "Address3",
  //   },
  //   {
  //     id: 1004,
  //     imageUrl: "https://cdn-icons-png.flaticon.com/512/0/93.png",
  //     firstName: "Melisa",
  //     lastName: "Schuppe",
  //     email: "Melisa.Schuppe@dummyapis.com",
  //     contactNumber: "4443995334",
  //     age: 38,
  //     dob: "06/09/1984",
  //     salary: 4,
  //     address: "Address4",
  //   },
  //   {
  //     id: 1005,
  //     imageUrl: "https://cdn-icons-png.flaticon.com/512/0/93.png",
  //     firstName: "Dell",
  //     lastName: "Kris",
  //     email: "Dell.Kris@dummyapis.com",
  //     contactNumber: "4505692843",
  //     age: 89,
  //     dob: "14/03/1933",
  //     salary: 5,
  //     address: "Address5",
  //   },
  //   {
  //     id: 1006,
  //     imageUrl: "https://cdn-icons-png.flaticon.com/512/0/93.png",
  //     firstName: "Marcia",
  //     lastName: "Gutmann",
  //     email: "Marcia.Gutmann@dummyapis.com",
  //     contactNumber: "4746199430",
  //     age: 56,
  //     dob: "24/07/1966",
  //     salary: 6,
  //     address: "Address6",
  //   },
  //   {
  //     id: 1007,
  //     imageUrl: "https://cdn-icons-png.flaticon.com/512/0/93.png",
  //     firstName: "Jarrod",
  //     lastName: "Ortiz",
  //     email: "Jarrod.Ortiz@dummyapis.com",
  //     contactNumber: "4859095720",
  //     age: 82,
  //     dob: "26/12/1940",
  //     salary: 7,
  //     address: "Address7",
  //   },
  //   {
  //     id: 1008,
  //     imageUrl: "https://cdn-icons-png.flaticon.com/512/0/93.png",
  //     firstName: "Gabriella",
  //     lastName: "Wilkinson",
  //     email: "Gabriella.Wilkinson@dummyapis.com",
  //     contactNumber: "4379190775",
  //     age: 36,
  //     dob: "24/06/1986",
  //     salary: 8,
  //     address: "Address8",
  //   },
  //   {
  //     id: 1009,
  //     imageUrl: "https://cdn-icons-png.flaticon.com/512/0/93.png",
  //     firstName: "Elisabeth",
  //     lastName: "Hayes",
  //     email: "Elisabeth.Hayes@dummyapis.com",
  //     contactNumber: "4394091994",
  //     age: 66,
  //     dob: "17/08/1956",
  //     salary: 9,
  //     address: "Address9",
  //   },
  //   {
  //     id: 1010,
  //     imageUrl: "https://cdn-icons-png.flaticon.com/512/0/93.png",
  //     firstName: "Jaime",
  //     lastName: "Reichel",
  //     email: "Jaime.Reichel@dummyapis.com",
  //     contactNumber: "4622392580",
  //     age: 41,
  //     dob: "21/01/1981",
  //     salary: 10,
  //     address: "Address10",
  //   },
];

const EmployeeApp = () => {
  const [employees, setEmployees] = useState(employeeData || []);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(
    employees[0]?.id || null
  );
  const [selectedEmployee, setSelectedEmployee] = useState(
    employees[0] || null
  );
  const [showModal, setShowModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    dob: "",
    address: "",
  });

  // Set selected employee
  useEffect(() => {
    const emp = employees.find((emp) => emp.id === selectedEmployeeId);
    setSelectedEmployee(emp || null);
  }, [selectedEmployeeId, employees]);

  const handleAddEmployee = (e) => {
    e.preventDefault();
    const id = employees[employees.length - 1]?.id + 1 || 1001;
    const age =
      new Date().getFullYear() - parseInt(newEmployee.dob.slice(0, 4), 10);
    const empData = {
      ...newEmployee,
      id,
      age,
      imageUrl: "https://cdn-icons-png.flaticon.com/512/0/93.png",
    };
    setEmployees([...employees, empData]);
    setShowModal(false);
    setNewEmployee({
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      dob: "",
      address: "",
    });
  };

  const handleDeleteEmployee = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
    if (selectedEmployeeId === id) {
      setSelectedEmployeeId(updatedEmployees[0]?.id || null);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Employee Management</h1>
        <button onClick={() => setShowModal(true)}>Add Employee</button>
      </header>

      <div className="employees">
        <div className="employees__names">
          <h3 className="employees__names--title">Employee List</h3>
          <div className="employees__names--list">
            {employees.length > 0 ? (
              employees.map((emp) => (
                <span
                  key={emp.id}
                  className={`employees__names--item ${
                    selectedEmployeeId === emp.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedEmployeeId(emp.id)}
                >
                  {emp.firstName} {emp.lastName}
                  <i
                    className="employeeDelete"
                    onClick={() => handleDeleteEmployee(emp.id)}
                  >
                    ❌
                  </i>
                </span>
              ))
            ) : (
              <p>No Employees Available</p>
            )}
          </div>
        </div>

        <div className="employees__single">
          {selectedEmployee ? (
            <div className="employees__single--info">
              <img
                src={selectedEmployee.imageUrl}
                alt={selectedEmployee.firstName}
              />
              <div>
                <span className="employees__single--heading">
                  {selectedEmployee.firstName} {selectedEmployee.lastName} (
                  {selectedEmployee.age})
                </span>
              </div>
              <div>
                <span>{selectedEmployee.address}</span>
              </div>

              <div>
                <span>{selectedEmployee.email}</span>
              </div>

              <div>
                <span>Mobile - {selectedEmployee.contactNumber}</span>
              </div>

              <div>
                <span>DOB - {selectedEmployee.dob}</span>
              </div>
            </div>
          ) : (
            <p>Please select an employee to view details.</p>
          )}
        </div>
      </div>

      {showModal && (
        <div className="addEmployee">
          <div className="addEmployee_create">
            <h3>Add New Employee</h3>
            <form onSubmit={handleAddEmployee}>
              <input
                type="text"
                placeholder="First Name"
                value={newEmployee.firstName}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, firstName: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={newEmployee.lastName}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, lastName: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={newEmployee.email}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, email: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Contact Number"
                value={newEmployee.contactNumber}
                onChange={(e) =>
                  setNewEmployee({
                    ...newEmployee,
                    contactNumber: e.target.value,
                  })
                }
                required
              />
              <input
                type="date"
                value={newEmployee.dob}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, dob: e.target.value })
                }
                required
                max={`${new Date().getFullYear() - 18}-${new Date()
                  .toISOString()
                  .slice(5, 10)}`}
              />
              <input
                type="text"
                placeholder="Address"
                value={newEmployee.address}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, address: e.target.value })
                }
                required
              />
              <button type="submit">Add Employee</button>
            </form>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeApp;
