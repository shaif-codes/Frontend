import React, { useState } from 'react';
import Header from '../Common/Header';
import { BsPencil, BsTrash } from 'react-icons/bs';
import './ClassesPage.css';
import AddClassDialog from './AddClassDialog';
import { BsPlus } from 'react-icons/bs';
import DeleteClassDialog from './DeleteClassDialog';

const ClassesPage = () => {
    const cls = [
        { id: 1, name: 'Mathematics', teacher: 'John Doe', type: 'Regular', startDate: '2024-04-10' },
        { id: 2, name: 'Physics', teacher: 'Jane Smith', type: 'Regular', startDate: '2024-04-12' },
        { id: 3, name: 'Physics', teacher: 'Jane Smith', type: 'Regular', startDate: '2024-04-12' },
        { id: 4, name: 'Physics', teacher: 'Jane Smith', type: 'Regular', startDate: '2024-04-12' },
        { id: 5, name: 'Physics', teacher: 'Jane Smith', type: 'Regular', startDate: '2024-04-12' },
    ];
    const adminLinks = [
        { to: "/admin", icon: "bx bxs-dashboard", text: "Dashboard" },
        { to: "/class", icon: "bx bx-book-reader", text: "Classes", current: true},
        { to: "/students", icon: "bx bx-user", text: "Students" },
    ];
    const [classes, setClasses] = useState(cls);
    const [showAddClassDialog, setShowAddClassDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [deleteClassName, setDeleteClassName] = useState('');
    const [deleteClassId, setDeleteClassId] = useState('');
    const [editingClassId, setEditingClassId] = useState(null);
    const [updatedClassName, setUpdatedClassName] = useState('');
    const [updatedTeacherName, setUpdatedTeacherName] = useState('');
    const [updatedClassType, setUpdatedClassType] = useState('');
    const [updatedStartDate, setUpdatedStartDate] = useState('');

    const handleToggleDialog = () => {
        setShowAddClassDialog(!showAddClassDialog);
    };

    const handleToggleAddClassDialog = () => {
        setShowAddClassDialog(false);
    };

    const handleAddClass = (newClass) => {
        setClasses([...classes, newClass]);
    };

    const handleDeleteClass = (id, name) => {
        setDeleteClassId(id);
        setDeleteClassName(name);
        setShowDeleteDialog(true);
    };

    const handleDeleteConfirm = (confirm) => {
        if (confirm) {
            setClasses(classes.filter((classItem) => classItem.id !== deleteClassId));
        }
        setShowDeleteDialog(false);
    };

    const isAnyFieldEmpty = () => {
        return !updatedClassName || !updatedTeacherName || !updatedClassType || !updatedStartDate;
    };

    const handleEditClass = (id) => {
        setEditingClassId(id);
        // Initialize updated values with current class details
        const classToEdit = classes.find((classItem) => classItem.id === id);
        setUpdatedClassName(classToEdit.name);
        setUpdatedTeacherName(classToEdit.teacher);
        setUpdatedClassType(classToEdit.type);
        setUpdatedStartDate(classToEdit.startDate);
    };

    const handleUpdateClass = (e) => {
        e.preventDefault()
        // Find the index of the class to be updated
        const classIndex = classes.findIndex((classItem) => classItem.id === editingClassId);
        // Create a copy of the classes array to avoid mutating state directly
        const updatedClasses = [...classes];
        // Update the class details
        updatedClasses[classIndex] = {
            ...updatedClasses[classIndex],
            name: updatedClassName,
            teacher: updatedTeacherName,
            type: updatedClassType,
            startDate: updatedStartDate
        };
        // Update the state with the new classes array
        setClasses(updatedClasses);
        // Reset editing state
        setEditingClassId(null);
    };

    const handleCancelEdit = () => {
        // Reset editing state
        setEditingClassId(null);
    };

    return (
        <div className="classes-page">
            <Header links={adminLinks} activeLink="Classes" userDetails={{ name: "Admin" }} />
            <div className="container classes-page-container">
                <h2>Classes</h2>
                <div style={{ position: "absolute", top: "17px", right: "80px" }}>
                    <button className="btn btn-primary add-class-btn" onClick={handleToggleDialog}>
                        <BsPlus /> Add Class
                    </button>
                </div>
                {showAddClassDialog && <AddClassDialog onAddClass={handleAddClass} setToggleDialog={handleToggleAddClassDialog} />}
                {showDeleteDialog && <DeleteClassDialog className={deleteClassName} classId={deleteClassId} handleDelete={handleDeleteConfirm} />}
                <div className="row">
                    {classes.map((classItem) => (
                        <div key={classItem.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card class-card">
                                <div className="card-body">
                                    {/* Check if the class is in edit mode */}
                                    {editingClassId === classItem.id ? (
                                        // Render input fields for editing
                                        <div>
                                            <input type="text" className="form-control mb-2" value={updatedClassName} onChange={(e) => setUpdatedClassName(e.target.value)} />
                                            <input type="text" className="form-control mb-2" value={updatedTeacherName} onChange={(e) => setUpdatedTeacherName(e.target.value)} />
                                            <input type="text" className="form-control mb-2" value={updatedClassType} onChange={(e) => setUpdatedClassType(e.target.value)} />
                                            <input type="date" className="form-control mb-2" value={updatedStartDate} onChange={(e) => setUpdatedStartDate(e.target.value)} />
                                            {/* Disable the "Update" button if any field is empty */}
                                            <div className="text-center">
                                                <button className="btn btn-sm btn-primary mr-2" onClick={handleUpdateClass} disabled={isAnyFieldEmpty()}>Update</button>
                                                <button className="btn btn-sm btn-secondary" onClick={handleCancelEdit}>Cancel</button>
                                            </div>
                                        </div>
                                    ) : (
                                        // Render class details in view mode
                                        <div>
                                            <h5 className="card-title">{classItem.name}</h5>
                                            <p className="card-text">Teacher: {classItem.teacher}</p>
                                            <p className="card-text">Type: {classItem.type}</p>
                                            <p className="card-text">Start Date: {classItem.startDate}</p>
                                            {/* Button to switch to edit mode */}
                                                <div className="text-center">
                                                    <div className="text-center">
                                                        <button className="btn btn-sm btn-primary mr-2" onClick={() => handleEditClass(classItem.id)}>
                                                            <BsPencil /> Edit
                                                        </button>
                                                        <button className="btn btn-sm btn-danger" onClick={() => handleDeleteClass(classItem.id, classItem.name)}>
                                                            <BsTrash /> Delete
                                                        </button>
                                                    </div>
                                                </div>
                                        </div>
                                    )}
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClassesPage;
