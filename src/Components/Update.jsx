// "use client";
import React, { useState } from "react";

const Update = () => {
  const [studentList, setStudentList] = useState([]);
  const [student, setStudent] = useState({
    FirstName: "",
    LastName: "",
    RoleNo: null,
    Marks: null,
  });
  const [editStudent, setEditStudent] = useState({
    FirstName: "",
    LastName: "",
    RoleNo: null,
    Marks: null,
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (input, event) => {
    setStudent({ ...student, [input]: event.target.value });
  };

  const handleEditInputChange = (input, event) => {
    setEditStudent({ ...editStudent, [input]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!student.FirstName.trim() || !student.LastName.trim() || !student.RoleNo || !student.Marks) {
      alert("Please fill in all the fields with valid data.");
      return;
    }
    setStudentList((prevList) => [...prevList, student]);
    setStudent({ FirstName: "", LastName: "", RoleNo: "", Marks: "" });
  };

  const deleteStudentList = (index) => {
    setStudentList((prevList) => prevList.filter((_, ind) => ind !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditStudent(studentList[index]);
  };

  const handleSaveData = (e) => {
    e.preventDefault();
    const values = [...studentList];
    values[editIndex] = editStudent;
    setStudentList(values);
    setEditStudent({ FirstName: "", LastName: "", RoleNo: "", Marks: "" });
    setEditIndex(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Student List Data</h2>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-10">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">First Name:</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={student.FirstName}
              onChange={(event) => handleInputChange("FirstName", event)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name:</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={student.LastName}
              onChange={(event) => handleInputChange("LastName", event)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Roll No:</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={student.RoleNo}
              onChange={(event) => handleInputChange("RoleNo", event)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Marks:</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={student.Marks}
              onChange={(event) => handleInputChange("Marks", event)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
        >
          Add Student
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4">Student List:</h2>
      {studentList.length > 0 ? (
        studentList.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center justify-between">
            {index === editIndex ? (
              <form className="w-full" onSubmit={handleSaveData}>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <label className="block text-gray-700">First Name:</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-2 rounded-md"
                      value={editStudent.FirstName}
                      onChange={(event) => handleEditInputChange("FirstName", event)}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Last Name:</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-2 rounded-md"
                      value={editStudent.LastName}
                      onChange={(event) => handleEditInputChange("LastName", event)}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Roll No:</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-2 rounded-md"
                      value={editStudent.RoleNo}
                      onChange={(event) => handleEditInputChange("RoleNo", event)}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Marks:</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-2 rounded-md"
                      value={editStudent.Marks}
                      onChange={(event) => handleEditInputChange("Marks", event)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600"
                >
                  Save Student
                </button>
              </form>
            ) : (
              <div className="flex justify-between items-center w-full">
                <div className="text-gray-700">
                  <p>{`First Name: ${item.FirstName}`}</p>
                  <p>{`Last Name: ${item.LastName}`}</p>
                  <p>{`Roll No: ${item.RoleNo}`}</p>
                  <p>{`Marks: ${item.Marks}`}</p>
                </div>
                <div className="space-x-4">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    onClick={() => deleteStudentList(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No students added yet.</p>
      )}
    </div>
  );
};

export default Update;
