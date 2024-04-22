import React, { useState } from 'react';
import Header from '../Common/Header';
import { BsPencil, BsTrash } from 'react-icons/bs';
import './ClassesPage.css';
import AddClassDialog from './AddClassDialog';
import { BsPlus } from 'react-icons/bs';

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
        { to: "/class", icon: "bx bx-book-reader", text: "Classes" },
        { to: "#students", icon: "bx bx-user", text: "Students" },
    ];
    const [classes, setClasses] = useState(cls);
    const [showDialog, setShowDialog] = useState(false);

    const handleToggleDialog = () => {
        setShowDialog(!showDialog);
    };
    const handleToggleDialogChild = () => {
        setShowDialog(false);
    };
    const handleAddClass = (newClass) => {
        setClasses([...classes, newClass]);
    };

    const handleDeleteClass = (id) => {
        setClasses(classes.filter((classItem) => classItem.id !== id));
    };

    const handleEditClass = (id) => {
        // Implement edit functionality here, e.g., open a dialog to edit class details
        console.log(`Editing class with id ${id}`);
    };

    return (
        <div className="classes-page">
            <Header links={adminLinks} activeLink="Classes" />
            <div className="container classes-page-container">
                <h2>Classes</h2>
                <div style={{ position: "absolute", top: "17px", right: "80px" }}>
                    <button className="btn btn-primary add-class-btn" onClick={handleToggleDialog}>
                        <BsPlus /> Add Class
                    </button>
                </div>
                {showDialog && <AddClassDialog onAddClass={handleAddClass} setToggleDialog={handleToggleDialogChild}/>}
                <div className="row">
                    {classes.map((classItem) => (
                        <div key={classItem.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card class-card">
                                <div className="card-body">
                                    <h5 className="card-title">{classItem.name}</h5>
                                    <p className="card-text">Teacher: {classItem.teacher}</p>
                                    <p className="card-text">Type: {classItem.type}</p>
                                    <p className="card-text">Start Date: {classItem.startDate}</p>
                                    <div className="text-center">
                                        <button className="btn btn-sm btn-primary mr-2" onClick={() => handleEditClass(classItem.id)}>
                                            <BsPencil /> Edit
                                        </button>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDeleteClass(classItem.id)}>
                                            <BsTrash /> Delete
                                        </button>
                                    </div>
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
