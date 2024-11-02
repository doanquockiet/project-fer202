import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageMenu from "./Page/PageMenu";
import PageDetail from "./Page/PageProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageMenu />} />
        <Route path="/detail" element={<PageDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
