import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageDetail from "./Page/PageProductDetail";
import HomePage from "./Page/HomePage";
import PageMenu from "./Page/PageMenu";
import Coffee from "./components/CoffeeAndTea/Coffee";
import Tea from "./components/CoffeeAndTea/Tea";
import MainPages from "./Page/MainPages/MainPages";
import ChuyenNhaPage from "./Page/ChuyenNha";
import ChuyenCaPhe from "./Page/PageChuyenCaPhe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<PageMenu />} />
        <Route path="/detail" element={<PageDetail />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/tea" element={<Tea />} />
        <Route path="/cua-hang" element={<MainPages />} />
        <Route path="/chuyen-nha" element={<ChuyenNhaPage />} />
        <Route path="/chuyen-ca-phe" element={<ChuyenCaPhe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
