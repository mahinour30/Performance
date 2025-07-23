import React from "react";

const Button = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="px-4 py-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            {label}
        </button>
    )

}

export default Button