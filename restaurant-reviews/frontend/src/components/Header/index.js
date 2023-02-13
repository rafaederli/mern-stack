import { Link } from "react-router-dom";

function Header({ user, login, logout }) {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/restaurants" className="navbar-brand">
                Restaurant Reviews
            </a>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/restaurants"} className="nav-link">
                        Restaurants
                    </Link>
                </li>
                <li className="nav-item">
                    {
                        user ?
                        <a onClick={logout} className="nav-link" style={{cursor: "pointer"}}>
                            Logout {user.name}
                        </a>
                        : <Link to={"/login"} className="nav-link">
                            Login
                        </Link>
                    }
                </li>
            </div>
        </nav>
    );
}

export default Header;