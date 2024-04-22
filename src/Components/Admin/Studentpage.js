// StudentPage.js
import React, { useState } from 'react';
import Header from '../Common/Header';
import AddStudentDialog from './AddStudentDialog';
import './StudentPage.css'

const StudentPage = () => {
    const [showAddStudentDialog, setShowAddStudentDialog] = useState(false);
    const [students, setStudents] = useState([
        { id: 1, name: 'John Doe', age: 20, grade: 'A' },
        { id: 2, name: 'Jane Smith', age: 21, grade: 'B' },
        { id: 3, name: 'Alice Johnson', age: 22, grade: 'A+' },
        { id: 4, name: 'Bob Williams', age: 19, grade: 'B+' },
        { id: 5, name: 'Emily Brown', age: 20, grade: 'A-' },
    ]);

    const studentLinks = [
        { to: "/admin", icon: "bx bxs-dashboard", text: "Dashboard" },
        { to: "/class", icon: "bx bx-book-reader", text: "Classes" },
        { to: "/students", icon: "bx bx-user", text: "Students", current: true },
    ];

    const handleToggleAddStudentDialog = () => {
        setShowAddStudentDialog(!showAddStudentDialog);
    };

    const handleAddStudent = (newStudent) => {
        setStudents([...students, { id: students.length + 1, ...newStudent }]);
    };

    return (
        <div className="student-page">
            <Header links={studentLinks} activeLink="Students" userDetails={{ name: "Admin" }} />
            <div className="container student-page-container">
                <h2>Students</h2>
                <div className="text-center" style={{ position: "absolute", top: "17px", right: "80px" }} >
                    <button className="btn btn-primary" onClick={handleToggleAddStudentDialog}>Add Student</button>
                </div>
                <div className="row">
                    {/* Display student cards */}
                    {students.map((student) => (
                        <div key={student.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card student-card">
                                <div className="card-body">
                                    <h5 className="card-title">{student.name}</h5>
                                    <p className="card-text">Age: {student.age}</p>
                                    <p className="card-text">Grade: {student.grade}</p>
                                    {/* Edit and delete buttons */}
                                    <div className="text-center">
                                        <button className="btn btn-sm btn-primary mr-2">Edit</button>
                                        <button className="btn btn-sm btn-danger">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {showAddStudentDialog && <AddStudentDialog onAddStudent={handleAddStudent} onClose={handleToggleAddStudentDialog} />}
            </div>
        </div>
    );
};

export default StudentPage;
