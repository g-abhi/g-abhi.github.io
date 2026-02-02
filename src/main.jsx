import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log("Mounting React App...");

try {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  console.log("Mounted successfully");
} catch (error) {
  console.error("Mounting failed:", error);
  document.getElementById('root').innerHTML = `<div style="color:red"><h1>Failed to mount app</h1><pre>${error.message}</pre></div>`;
}
