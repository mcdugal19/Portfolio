import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"
import {createRoot} from 'react-dom/client';
import AuthProvider from './components/AuthProvider'


// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>,
);