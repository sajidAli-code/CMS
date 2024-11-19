import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface DatePickerProps {
    initialDate?: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({ initialDate }) => {
    const [selectedDate, setSelectedDate] = useState(initialDate || new Date());

    // Generate the dates for the week
    const getWeekDates = (date: Date): Date[] => {
        const startOfWeek = new Date(date);
        startOfWeek.setDate(date.getDate() - date.getDay() + 1); // start from Monday
        return Array.from({ length: 7 }, (_, i) => {
            const d = new Date(startOfWeek);
            d.setDate(startOfWeek.getDate() + i);
            return d;
        });
    };

    const weekDates = getWeekDates(selectedDate);

    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
    };

    return (
        <div className="w-full p-4 bg-gray-100 rounded-2xl shadow-md">
            {/* Month and Year */}
            <div className="flex justify-between items-center mb-4">
                <button className="text-gray-500 hover:text-black">
                    <FaAngleLeft />
                </button>
                <h2 className="text-lg font-semibold">
                    {selectedDate.toLocaleString("default", { month: "long" })}{" "}
                    {selectedDate.getFullYear()}
                </h2>
                <button className="text-gray-500 hover:text-black">
                    <FaAngleRight />
                </button>
            </div>

            {/* Week Days */}
            <div className="grid grid-cols-7 gap-2 text-center">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                    <div
                        key={index}
                        className="text-gray-400 text-xs"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-2 mt-2 text-center">
                {weekDates.map((date, index) => {
                    const isSelected = date.toDateString() === selectedDate.toDateString();
                    return (
                        <button
                            key={index}
                            onClick={() => handleDateClick(date)}
                            className={`p-2 rounded-full ${isSelected
                                ? "bg-teal-700 text-white text-xs"
                                : "text-gray-800 hover:bg-gray-200"
                                }`}
                        >
                            {date.getDate()}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default DatePicker;