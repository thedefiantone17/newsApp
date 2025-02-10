import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="83173557043-mkiv6473pl7shcjhqrk71aou2lvmudoj.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    
  </StrictMode>
);
