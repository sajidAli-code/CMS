import React from 'react';
import { BiEdit } from "react-icons/bi";
import DatePicker from './DatePicker';

// Define types for props
type Task = {
    title: string;
    category: string;
    time: string;
};

type ProfileProps = {
    name: string;
    role: string;
    isVerified: boolean;
};

// Task component
const TaskItem: React.FC<Task> = ({ title, category, time }) => (
    <div className="flex items-center gap-2 mb-2">
        <input type="checkbox" className="w-4 h-4 text-blue-600" />
        <div>
            <h4 className="text-sm font-semibold">{title}</h4>
            <div className="flex justify-between text-xs text-gray-500">
                <span>{category}</span>
                <span className="text-red-500">{time}</span>
            </div>
        </div>
    </div>
);

const Profile: React.FC<ProfileProps> = ({ name, role, isVerified }) => {
    const tasks: Task[] = [
        { title: 'Developing Restaurant Apps', category: 'Programming', time: '08:00 AM' },
        { title: 'Integrate API', category: 'Programming', time: '' },
        { title: 'Research Objective User', category: 'Product Design', time: '02:40 PM' },
    ];
    return (
        <div className="p-4 bg-white w-full h-full border-l border-mainBorders">
            <div className=" px-6 flex justify-between items-center mb-8 ">
                <span className=" font-semibold text-xl text-mainTextColor">Profile</span>
                <span className=" border rounded-lg border-mainBorders text-center p-2">
                    <BiEdit className=" h-4 w-4" />
                </span>
            </div>
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-6">
                <div className="relative">
                    <img
                        src="/images/admin.jpg"
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover top-0 -left-4 border-4 border-gray-300"
                    />
                    {isVerified && (
                        <span className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
                    )}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{name}</h3>
                <p className="text-sm font-medium text-gray-500">{role}</p>
            </div>

            {/* Calendar */}
            <DatePicker initialDate={new Date("2024-11-16")} />

            {/* To-Do List */}
            <div className=' mt-4'>
                <h4 className="text-base font-semibold mb-2">To Do List</h4>
                <div>
                    {tasks.map((task, index) => (
                        <TaskItem key={index} {...task} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
