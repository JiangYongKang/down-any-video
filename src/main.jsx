import BasicLayout from "@/layout.jsx";
import Home from "@/home.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BasicLayout>
            <Home/>
        </BasicLayout>
    </StrictMode>,
);
