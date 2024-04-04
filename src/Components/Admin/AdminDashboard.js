import React from "react";
import Header from "../Common/Header";
import FactsSection from "./FactsSection";
import './AdminDashboard.css'; // Import CSS file for custom styling

const AdminDashboard = () => {
    const adminLinks = [
        { to: "#dashboard", icon: "bx bxs-dashboard", text: "Dashboard" },
        { to: "#classes", icon: "bx bx-book-reader", text: "Classes" },
        { to: "#students", icon: "bx bx-user", text: "Students" },
        // Add more links as needed
    ];
    return (
        <div className="admin-dashboard-container">
            <Header links={adminLinks} userDetails={{ name: "Admin" }} />
            <FactsSection />
        </div>
    );
}

export default AdminDashboard;
