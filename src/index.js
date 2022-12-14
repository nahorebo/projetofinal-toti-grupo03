import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap.js';
import "bulma/css/bulma.min.css";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
 root.render(
  <Router>
   <App />
   </Router>
 );