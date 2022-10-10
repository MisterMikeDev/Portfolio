import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./Store";
import Navegation from "./Components/UI/Navegation";
import LateralNavBar from "./Components/UI/LateralNavBar";
import MainBackground from "./Components/UI/MainBackground";
import Loading from "./Components/Utils/Loading";
import GetLocalConfigs from "./Components/Utils/GetLocalConfigs";
import AnimatedRouter from "./Components/Routing/AnimatedRouter";

export default function App() {
    return (
        <Provider store={store}>
            <GetLocalConfigs />
            <MainBackground>
                <BrowserRouter>
                    <Toaster />
                    <div className="min-h-screen flex relative pb-24 transition-all transition-500 overflow-hidden">
                        <LateralNavBar />
                        <Suspense fallback={<Loading />}>
                            <div className="md:w-4/5 w-full mx-auto">
                                <AnimatedRouter />
                            </div>
                        </Suspense>
                        <Navegation />
                    </div>
                </BrowserRouter>
            </MainBackground>
        </Provider>
    );
}
