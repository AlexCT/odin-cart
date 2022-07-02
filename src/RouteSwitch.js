import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Navbar from "./components/Navbar";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Shop" element={<Shop />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;