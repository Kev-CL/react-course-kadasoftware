// Dependencies
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Components
import { SearchParams } from "./components/SearchParams";
import { Details } from "./components/Details";
const App = () => (
  <div>
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
