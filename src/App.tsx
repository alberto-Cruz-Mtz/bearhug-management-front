import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}
