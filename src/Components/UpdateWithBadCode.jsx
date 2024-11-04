"use client";
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

    // Validation: Check if fields are empty
    if (
      !student.FirstName.trim() ||
      !student.LastName.trim() ||
      !student.RoleNo ||
      !student.Marks
    ) {
      alert("Please fill in all the fields with valid data.");
      return;
    }
    setStudentList((prevList) => [...prevList, student]);

    // Reset form fields
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

    // Reset form fields
    setEditStudent({ FirstName: "", LastName: "", RoleNo: "", Marks: "" });
    setEditIndex(null);
  };

  return (
    <div>
      <h2>Student List Data</h2>
      <div>
        <form action="" method="post" onSubmit={handleSubmit}>
          <div>
            <label>
              FirstName:
              <input
                type="text"
                className="border border-black p-2 my-3"
                value={student.FirstName}
                onChange={(event) => handleInputChange("FirstName", event)}
              />
            </label>
          </div>
          <div>
            <label>
              LastName:
              <input
                type="text"
                className="border border-black p-2 my-3"
                value={student.LastName}
                onChange={(event) => handleInputChange("LastName", event)}
              />
            </label>
          </div>
          <div>
            <label>
              RoleNo:
              <input
                type="text"
                className="border border-black p-2 my-3"
                value={student.RoleNo}
                onChange={(event) => handleInputChange("RoleNo", event)}
              />
            </label>
          </div>
          <div>
            <label>
              Marks:
              <input
                type="text"
                className="border border-black p-2 my-3"
                value={student.Marks}
                onChange={(event) => handleInputChange("Marks", event)}
              />
            </label>
          </div>
          <div>
            <button type="submit">Add Student</button>
          </div>
        </form>
      </div>

      <div>
        <h2>Student List:</h2>
        {studentList?.map((item, index) => (
          <>
            {index === editIndex ? (
              <div className="flex flex-row">
                <div className="flex flex-row space-x-6">
                  <form action="" method="post" onSubmit={handleSaveData}>
                    <div>
                      <label>
                        FirstName:
                        <input
                          type="text"
                          className="border border-black p-2 my-3"
                          value={editStudent.FirstName}
                          onChange={(event) =>
                            handleEditInputChange("FirstName", event)
                          }
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        LastName:
                        <input
                          type="text"
                          className="border border-black p-2 my-3"
                          value={editStudent.LastName}
                          onChange={(event) =>
                            handleEditInputChange("LastName", event)
                          }
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        RoleNo:
                        <input
                          type="text"
                          className="border border-black p-2 my-3"
                          value={editStudent.RoleNo}
                          onChange={(event) =>
                            handleEditInputChange("RoleNo", event)
                          }
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        Marks:
                        <input
                          type="text"
                          className="border border-black p-2 my-3"
                          value={editStudent.Marks}
                          onChange={(event) =>
                            handleEditInputChange("Marks", event)
                          }
                        />
                      </label>
                    </div>
                    <div>
                      <button type="submit">Save Student</button>
                    </div>
                  </form>
                </div>
                <hr />
              </div>
            ) : (
              <div className="flex flex-row">
                <div>
                  <p>{`FirstName: ${item.FirstName}`}</p>
                  <br />
                  <p>{`LastName: ${item.LastName}`}</p>
                  <br />
                </div>
                <div>
                  <p>{`Roll No: ${item.RoleNo}`}</p>
                  <br />
                </div>
                <div>
                  <p>{`Marks: ${item.Marks}`}</p>
                </div>
                <div className="flex flex-row space-x-6">
                  <div>
                    {" "}
                    <button
                      className="bg-red-200"
                      onClick={() => deleteStudentList(index)}
                    >
                      Delete
                    </button>
                  </div>
                  <div>
                    {" "}
                    <button
                      className="bg-red-200"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Update;
