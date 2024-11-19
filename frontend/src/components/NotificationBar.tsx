import { GoBell } from "react-icons/go";

const NotificationBar = () => {
    return (
        <>
            <div className=" w-full h-full bg-mainWhiteText px-6 flex justify-between items-center ">
                <div className=" flex flex-col gap-1">
                    <span className=" font-semibold text-xl text-mainTextColor">Hello Maietry 👋</span>
                    <span className=" text-gray-400 text-sm font-medium">Let’s manage something new today!</span>
                </div>
                <span className=" border rounded-lg border-mainBorders text-center p-2">
                    <GoBell className=" h-4 w-4" />
                </span>
            </div>
        </>
    )
}

export default NotificationBar