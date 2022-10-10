import { lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
const LazyHome = lazy(() => import("../../Pages/Home"));
const LazySkills = lazy(() => import("../../Pages/Skills"));
const LazySocialNetworks = lazy(() => import("../../Pages/SocialNetworks"));
const LazyProjets = lazy(() => import("../../Pages/Projects"));
const LazyContact = lazy(() => import("../../Pages/Contact"));
export default function AnimatedRouter() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LazyHome />} />
                <Route path="/skills" element={<LazySkills />} />
                <Route path="/redes" element={<LazySocialNetworks />} />
                <Route path="/projects" element={<LazyProjets />} />
                <Route path="/contact" element={<LazyContact />} />
                <Route path="*" element={<div className="h-full w-full grid place-content-center text-white text-5xl font-bold">Error 404 page not found</div>} />
            </Routes>
        </AnimatePresence>
    );
}
