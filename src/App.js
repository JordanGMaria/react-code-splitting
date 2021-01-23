import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./style.css";

export default function App() {
  // É NO ROUTES QUE TODA MÁGICA ACONTECE
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
