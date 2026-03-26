import { BrowserRouter, Routes, Route } from "react-router";
import PageComponent from "./pages/page-component";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/components" element={<PageComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
