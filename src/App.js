import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageDetail from "./Page/PageProductDetail";
import HomePage from "./Page/HomePage";
import PageMenu from "./Page/PageMenu";
import Coffee from "./components/CoffeeAndTea/Coffee";
import Tea from "./components/CoffeeAndTea/Tea";
import MainPages from "./Page/MainPages/MainPages";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
