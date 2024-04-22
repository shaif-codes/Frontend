import React from "react";
import Header from "../Common/Header";
import FactsSection from "./FactsSection";
import './AdminDashboard.css'; // Import CSS file for custom styling
import GraphsSection from "./GraphSection";

const AdminDashboard = () => {
    const adminLinks = [
        { to: "#dashboard", icon: "bx bxs-dashboard", text: "Dashboard" },
        { to: "/class", icon: "bx bx-book-reader", text: "Classes" },
        { to: "#students", icon: "bx bx-user", text: "Students" },
        // Add more links as needed
    ];
    return (
        <div className="admin-dashboard-container">
            <Header links={adminLinks} userDetails={{ name: "Admin" }} />
            <div>
                <FactsSection />
                <GraphsSection/>
            </div>
            

        </div>
    );
}

export default AdminDashboard;
