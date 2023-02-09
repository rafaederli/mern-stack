import { Outlet } from "react-router-dom";
import Header from "../Header"

function DefaultPage({ user, login, logout }) {
    return (
        <main>
            <Header
                user={user}
                login={login}
                logout={logout}
            />
            <Outlet />
        </main>
    );
}

export default DefaultPage;