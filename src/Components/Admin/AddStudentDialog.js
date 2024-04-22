// AddStudentDialog.js
import React, { useState } from 'react';
import './AddStudentDialog.css';

const AddStudentDialog = ({ onAddStudent, onClose }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [grade, setGrade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = {
            name: name,
            age: age,
            grade: grade
        };
        onAddStudent(newStudent);
        onClose();
    };

    return (
        <div className="add-student-dialog">
            <div className="add-student-dialog-content">
                <div className="add-student-dialog-card">
                    <div className="card-header">
                        <h3>Add New Student</h3>
                        <button className="btn-close" onClick={onClose}>×</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Grade</label>
                            <input type="text" className="form-control" value={grade} onChange={(e) => setGrade(e.target.value)} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Student</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddStudentDialog;
