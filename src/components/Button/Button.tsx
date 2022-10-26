import React from "react"
import "./Button.css"

interface ButtonProps {
    label: string
}

const Button = (props:ButtonProps) => {
    return (
        <div>
            <button>{props.label}</button>
        </div>
    )
}

export default Button