import { Route, Routes } from "react-router-dom";
import KnowMore from "./Components/KnowMore";
import HomePage from "./Components/HomePage";

function App() {
    return (
             <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/KnowMore" element={<KnowMore />} />
             </Routes>
    );
}
export default App;
