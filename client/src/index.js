import React from 'react';
import App from './App';
import './styles/index.scss';
import { createRoot } from 'react-dom/client';


//ReactDOM.render(<App/>,document.getElementById("root"));

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="root" />);