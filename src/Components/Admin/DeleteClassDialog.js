// DeleteClassDialog.js

import React from 'react';

const DeleteClassDialog = ({ className, classId, onConfirmDelete, onCancelDelete }) => {
    return (
        <div className="delete-class-dialog">
            <div className="delete-class-dialog-content">
                <h3>Delete Class</h3>
                <p>Are you sure you want to delete the class "{className}"?</p>
                <div className="btn-group">
                    <button className="btn btn-danger" onClick={() => onConfirmDelete(classId)}>Confirm</button>
                    <button className="btn btn-secondary" onClick={onCancelDelete}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteClassDialog;
