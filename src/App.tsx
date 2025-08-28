import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import {CompanyPage} from "./pages/company/CompanyPage.tsx";
import CareersPage from "./pages/careers/CarrersPage.tsx";
import EventsPage from "./pages/events/EventsPage.tsx";
import PageNotFound from "./pages/not_found/PageNotFound.tsx";


export default function App() {
  return (
    <BrowserRouter basename="plutopal-website">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<CompanyPage />} />
                <Route path="careers" element={<CareersPage />} />
                <Route path="events" element={<EventsPage />} />
                <Route path="/*" element={<PageNotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}