import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home, NotFound } from "./pages";


function App() {
  return (
    <main className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/service" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
