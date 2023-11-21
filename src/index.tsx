import { createRoot } from 'react-dom/client'
import "./global.css";
import { App } from './app';
import { BrowserRouter as Router } from "react-router-dom";
const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <Router>
        <App />
    </Router>
);