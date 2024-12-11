import { BrowserRouter, Route, Routes } from "react-router-dom";
import PassesPage from "./pages/PassesPage";
import { HomePage } from "./pages/HomePage";
import { PassPage } from "./pages/PassPage";
import { ROUTES } from "./Routes";
import RegistrationPage from "./pages/RegistrationPage";
import ClientcardsPage from "./pages/ClientcardsPage";
import LoginPage from "./pages/LoginPage";
import ComplitedClientcardPage from "./pages/ComplitedClientcardsPage";
import ProfilePage from "./pages/ProfilePage";
import CurrentClientcardPage from "./pages/ClientcardPage";

function App() {
  return (
    <BrowserRouter basename="/rip_node"> {/* RepoName - название вашего репозитория */}
      <Routes>
        <Route path={ROUTES.HOME} index element={<HomePage />} />
        <Route path={ROUTES.PASSES} element={<PassesPage />} />
        <Route path={`${ROUTES.PASSES}/:id`} element={<PassPage />} />
        <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
        <Route path={ROUTES.CLIENTCARDS} element={<ClientcardsPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={`${ROUTES.CLIENTCARDS}/:id`} element={<ComplitedClientcardPage />} />
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTES.CURRENTCARD} element={<CurrentClientcardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;