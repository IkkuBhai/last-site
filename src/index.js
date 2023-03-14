import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Home/home-components/App';
import Sec from './Home/home-components/Sec';
import Third from './Home/home-components/Third';
import Fourth from './Home/home-components/Fourth';
import Fifth from './Home/home-components/Fifth';
import JobForm from "./form/RecruiterForm/JobPostForm"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />    
    <Sec />
    <Third />
    <Fourth />
    <Fifth />
    <JobForm />

  </React.StrictMode>
);

