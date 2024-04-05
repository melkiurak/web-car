
import { AppMarck } from "../components/Marck/Marck";
import { Registration } from "../pages/Registration/Registration";
import { Serios } from "../pages/Serios/Serios";
import { Route, Routes,} from "react-router-dom";
import { Login } from "../pages/login/Login";
export function AppRouter() {
    return (
        (
        <Routes>
            <Route path="/" element={<AppMarck/>}/>
            <Route  path="/serios/:marckId" element={<Serios/>}  />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
        )
    );
}