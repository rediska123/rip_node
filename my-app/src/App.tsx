import { BrowserRouter, Route, Routes } from "react-router-dom";
import PassesPage from "./pages/PassesPage";
import { HomePage } from "./pages/HomePage";
import { PassPage } from "./pages/PassPage";
import { ROUTES } from "./Routes";

function App() {
  return (
    <BrowserRouter> {/* RepoName - название вашего репозитория */}
      <Routes>
        <Route path={ROUTES.HOME} index element={<HomePage />} />
        <Route path={ROUTES.PASSES} element={<PassesPage />} />
        <Route path={`${ROUTES.PASSES}/:id`} element={<PassPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;