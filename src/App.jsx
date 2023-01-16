import { Container } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Container sx={{ mt: "50px", maxWidth: "1290px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
