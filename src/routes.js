import {BrowserRoutes, Route, Routes} from "react-router-dom";
import PetPages from "./pages/pet";
import ServicosPage from "./pages/servicos";

const AppRoutes = () => {
    return(
        <BrowserRoutes>
            <Routes>
                <Route path="Pet" element={PetPages}></Route>
                <Route path="Servico" element={ServicosPage}></Route>
            </Routes>
        </BrowserRoutes>
    )
}

export default AppRoutes;