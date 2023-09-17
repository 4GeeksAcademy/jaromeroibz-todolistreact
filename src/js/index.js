//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import 'bootstrap/dist/css/bootstrap.min.css';


//import your own components
import Tasks from "./component/home.jsx";

//render your react application
ReactDOM.render(<Tasks />, document.querySelector("#app"));
