import React from "react";

export default function Tags({ tags, fn }) {
    const handleClick = (tag, index) => {
        fn && fn(tag, index);
    };
    return (
        <div className="flex justify-start flex-wrap gap-1 my-2">
            {tags?.map((tag, index) => (
                <span
                    className={`text-xs bg-purple-500 text-white py-1 px-2 rounded-xl shadow-md  ${
                        fn
                            ? "hover:bg-purple-700 cursor-pointer"
                            : "cursor-default"
                    }`}
                    key={index}
                    onClick={() => handleClick(tag, index)}
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}
