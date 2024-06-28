import React from "react";
import '../assests/tailwind.css'
import { createRoot } from "react-dom/client";


const Popup = () => {
    return (
        <div>
            <h1 className="text-4xl text-green-500">Hello World</h1>
        </div>
    )
};

const appContainer = document.createElement('div')
document.body.appendChild(appContainer)
const root = createRoot(appContainer)
console.log(appContainer)
root.render(<Popup />);