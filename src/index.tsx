import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createRoot } from "react-dom/client";
import React from "react";
import { HashRouter } from "react-router-dom";
import "./index.scss";

const root = createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </React.StrictMode>
);
