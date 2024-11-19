import React from "react";
import { FaClipboardList, FaUsers } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";

interface TicketCardProps {
    title: string;
    stats: {
        tickets: number;
        users: number;
    };
    color: string;
    icon: string;
}

const TicketCard: React.FC<TicketCardProps> = ({ title, stats, color, icon }) => {
    return (
        <div
            className="py-2 px-4 rounded-lg w-52 shadow-md"
            style={{ backgroundColor: color }}
        >

            <div className="flex flex-col my-4">
                <div className=" w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                    <img
                        className=" w-5 h-5"
                        src={`/images/${icon}`}
                        alt={icon}
                    />
                </div>
                <h3 className=" mt-2 text-sm font-semibold text-mainTextColor">{title}</h3>
            </div>

            {/* Stats */}
            <div className="flex justify-around bg-dustWhite p-2 rounded-lg shadow-inner">
                <div className="flex items-center text-gray-600 text-xs">
                    <IoTicketOutline className="mr-1" />
                    <span>{stats.tickets}</span>
                </div>
                <div className="flex items-center text-gray-600 text-xs">
                    <FaUsers className="mr-1" />
                    <span>{stats.users}</span>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
