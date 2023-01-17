
import { Route, Routes } from "react-router-dom";
import { DetailPage } from "./pages/DetailPage";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      
    </>
  );
}

export default App;
