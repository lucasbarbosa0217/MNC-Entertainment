import React from "react";

interface CadernoProps {
    children: React.ReactNode;
    rotate? : String
}

export default function Caderno({ children, rotate }: CadernoProps) {
    return (
        <div className={` shadow-2xl w-3/5 ${rotate && "custom-rotate"} bg-white  shadow-md rounded-md text-[1.08rem] leading-[1.875rem] pt-1 pl-18 relative pr-4
                    [background:repeating-linear-gradient(to_bottom,theme(colors.white)_0rem,theme(colors.white)_1.75rem,theme(colors.sky.500)_1.875rem)]`}>
                {children}
        <div className="w-[0.15rem] h-[100%] bg-red-300 z-30 absolute inset-0 left-12"></div>
        </div>
    );
}
