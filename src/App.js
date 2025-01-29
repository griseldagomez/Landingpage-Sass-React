import { Route, Routes } from "react-router-dom";
import SaberMasPage from "./Components/SaberMasPage";
import HomePage from "./Components/HomePage";


function App() {
    return (
             <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/SaberMas" element={<SaberMasPage />} />
             </Routes>
    );
}
export default App;
