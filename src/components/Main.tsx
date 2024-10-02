import { Route, Routes } from "react-router-dom";
import EditPage from "./EditPage";
import Home from "./Home";
import PageNotFound from "./PageNotFound";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:userId" element={<EditPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}
