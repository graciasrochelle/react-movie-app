import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import { MovieProvider } from "./context";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <MovieProvider>
        <Router>
            <App />
        </Router>
    </MovieProvider>, 
    document.getElementById('root'));
serviceWorker.unregister();
