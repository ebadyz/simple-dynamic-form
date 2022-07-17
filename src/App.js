import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import NotFound from "./components/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="form">
        <Route index element={<Form />} />
        <Route path=":path" element={<Form />} />
      </Route>
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default App;
