'use client'

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Counter = ({
    title,
    subtitle,
    value,
    onChange,
}) => {

    // we are not modifying the props here, we are just
    // creating a new function that will be called when the value changes
    // and THAT function will modify the props
    const onAdd = useCallback(() => {
        onChange(value + 1);
    }, [value, onChange]);


    const onSubtract = useCallback(() => {
        if (value === 1) return;
        onChange(value - 1);
    }, [value, onChange]);



    return (
        <div
            className="flex flex-row items-center justify-between"
        >
            <div className="flex flex-col">
                <div className="font-medium">
                    {title}
                </div>
                <div className="font-light text-gray-600">
                    {subtitle}
                </div>
            </div>
            <div className="flex flex-row items-center gap-4">
                <div
                    onClick={onSubtract}
                    className="
                    w-10
                    h-10
                    rounded-full
                    border-[1px]
                    border-neutral-400
                    flex
                    items-center
                    justify-center
                    text-neutral-600
                    cursor-pointer
                    hover:opacity-80
                    transition
                    "
                >
                    <AiOutlineMinus size={10} />
                </div>
                <div className="font-light text-xl text-neutral-600">
                    {value}
                </div>

                <div
                    onClick={onAdd}
                    className="
                    w-10
                    h-10
                    rounded-full
                    border-[1px]
                    border-neutral-400
                    flex
                    items-center
                    justify-center
                    text-neutral-600
                    cursor-pointer
                    hover:opacity-80
                    transition
                    "
                >
                    <AiOutlinePlus size={10} />
                </div>
            </div>

        </div>
    )

};

export default Counter;