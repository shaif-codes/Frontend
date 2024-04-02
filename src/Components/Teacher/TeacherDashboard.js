import React from "react";
import Header from "../Common/Header";


const TeacherDashboard = () => {
    const teacherLinks = [
        { to: "#hero", icon: "bx bx-home", text: "Home" },
        { to: "#classes", icon: "bx bx-book-reader", text: "Classes" },
        { to: "#attendance", icon: "bx bx-check-double", text: "Attendance" },
        // Add more links as needed
    ];

    return (
        <>
            <Header links={teacherLinks} userDetails={{name: "Ashish Jha"}}/>
            
        </>
    )
}

export default TeacherDashboard;