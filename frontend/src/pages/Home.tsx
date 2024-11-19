import React from "react";
import TicketCard from "../components/TicketCard";

const Home: React.FC = () => {
    // Define an array of ticket data
    const ticketData = [
        {
            title: "Open Tickets",
            stats: { tickets: 337, users: 99 },
            color: "#E1E2F6",
            icon: "open.png"
        },
        {
            title: "In Progress Tickets",
            stats: { tickets: 120, users: 50 },
            color: "#F8EFE2",
            icon: "inprogress.png"
        },
        {
            title: "Closed Tickets",
            stats: { tickets: 42, users: 15 },
            color: "#EFF7E2",
            icon: "completed.png"
        },
        {
            title: "Dropped Tickets",
            stats: { tickets: 200, users: 75 },
            color: "#F6E1F2",
            icon: "dropped.png"
        },
    ];

    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {ticketData.map((data, index) => (
                <TicketCard
                    key={index}
                    title={data.title}
                    stats={data.stats}
                    color={data.color}
                    icon={data.icon}
                />
            ))}
        </div>
    );
};

export default Home;