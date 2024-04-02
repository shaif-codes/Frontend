import React from "react";
import Header from "../Common/Header";


const StudentDashboard = () => {
    const studentLinks = [
        { to: "#hero", icon: "bx bx-home", text: "Home" },
        { to: "#about", icon: "bx bx-user", text: "About" },
        { to: "#resume", icon: "bx bx-file-blank", text: "Resume" },
        
        // Add more links as needed
    ];
    return (
        <>
            <Header links={studentLinks} userDetails={{ name: "Admin" }} />
        </>
    )
}

export default StudentDashboard;