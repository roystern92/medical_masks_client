import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./containers/App/App";
import * as serviceWorker from "./serviceWorker";

//For the routes
import { BrowserRouter } from "react-router-dom";


const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.register();
