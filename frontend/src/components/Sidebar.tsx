import { ReactNode, useState } from "react";
import { LuLayoutGrid } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineManageAccounts, MdOutlineFeedback } from "react-icons/md";
import { RxSection } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
    type sideItem = {
        name: string;
        icon: ReactNode;
        url: string;
        isActive: boolean;
    };

    const initialSideItems: sideItem[] = [
        {
            name: 'Overviews',
            icon: <LuLayoutGrid className="h-4 w-4" />,
            url: '/dashboard',
            isActive: true
        },
        {
            name: 'User Management',
            icon: <HiOutlineUsers className="h-4 w-4" />,
            url: '/settings',
            isActive: false
        },
        {
            name: 'Staff Management',
            icon: <MdOutlineManageAccounts className="h-4 w-4" />,
            url: '/profile',
            isActive: false
        },
        {
            name: 'Category Management',
            icon: <RxSection className="h-4 w-4" />,
            url: '/notifications',
            isActive: false
        },
        {
            name: 'Feedbacks',
            icon: <MdOutlineFeedback className="h-4 w-4" />,
            url: '/notifications',
            isActive: false
        },
        {
            name: 'Settings',
            icon: <IoSettingsOutline className="h-4 w-4" />,
            url: '/notifications',
            isActive: false
        }
    ];

    const [sideItems, setSideItems] = useState<sideItem[]>(initialSideItems);

    const handleItemClick = (index: number) => {
        setSideItems(prevItems =>
            prevItems.map((item, i) => ({
                ...item,
                isActive: i === index
            }))
        );
    };

    return (
        <div
            id="hs-offcanvas-example"
            className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform top-0 left-0 bottom-0 w-full h-full bg-mainGrayBg border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
            role="dialog"
            tabIndex={-1}
            aria-label="Sidebar"
        >
            <div className="px-6">
                <Link
                    className="flex-none text-xl text-black focus:outline-none focus:opacity-80 font-gilroy font-bold"
                    to="#"
                    aria-label="Brand"
                >
                    Brand
                </Link>
            </div>
            <nav className="hs-accordion-group p-6 flex flex-col flex-wrap" data-hs-accordion-always-open>
                <ul className="space-y-1.5">
                    {sideItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                className={`flex items-center gap-x-3.5 py-4 px-4 font-medium text-sm rounded-lg ${item.isActive ? "bg-mainBlack text-mainWhiteText" : "hover:bg-gray-300 text-mainTextColor"} font-gilroy font-medium`}
                                to={item.url}
                                onClick={() => handleItemClick(index)}
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;