
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";

// Optional: update document title
document.title = "Rafi Ahmad R | Portfolio";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
