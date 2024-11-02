import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageDetail from "./Page/PageProductDetail";
import HomePage from "./Page/HomePage";
import PageMenu from "./Page/PageMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<PageMenu />} />
        <Route path="/detail" element={<PageDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
