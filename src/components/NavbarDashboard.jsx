import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserById, logout} from "../redux/reducer/userReducer";
import Cookies from "universal-cookie";
import '../assets/css/Navbar.css'
import { useEffect } from "react";

const ToolsCookies = new Cookies();


function NavbarDashboard() {
  const authStatus = useSelector((state) => state.users.authStatus);
  const userData = useSelector((state) => state.users.userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
   dispatch(getUser())
  }, [dispatch]);

  const handleEditProfile = () => {
    // Mengambil data pengguna berdasarkan ID
    const id = userData.id;
    navigate(`/profile/${id}`); 
    dispatch(getUserById(id));
  }

  const handleLogout = () => {
    // Lakukan logika logout di sini
    // Contoh sederhana: Mengatur isLoggedIn menjadi false dan menghapus userName
    dispatch(logout());
    ToolsCookies.remove('user_data', {path: '/'})
    ToolsCookies.remove('status_login', {path: '/'})
    navigate('/login')
  };


  return (
    <>
      <nav
        className="navbar navbar-expand-md sticky-top"
        style={{ background: "#FFFFFF" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-center"
            />
            &nbsp;&nbsp;Buddy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Beranda
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink className="nav-link" to="/tentangKami">
                  Tentang Kami
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pelaporan">
                  Pelaporan
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink className="nav-link" to="/artikel">
                  Artikel
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              {authStatus ? (
                <div className="dropdown">
                  <a
                    className="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Akun
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                    <NavLink className="nav-link" to={`/dashboard`}>
                      <button className="dropdown-item" type="button" onClick={handleEditProfile}>
                        Dashboard
                      </button>
                    </NavLink>
                    <NavLink className="nav-link" to={`/profile/${userData.id}`}>
                      <button className="dropdown-item" type="button" onClick={handleEditProfile}>
                        Edit Profile
                      </button>
                    </NavLink>
                    </li>
                    <li>
                      <button
                        className="dropdown-item px-4"
                        onClick={handleLogout}
                        type="button"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <NavLink className="nav-link" to="/login">
                    <button className="btn btn-outline-primary">Masuk</button>
                  </NavLink>
                  <NavLink className="nav-link" to="/register">
                    <button className="btn btn-primary ">Daftar</button>
                  </NavLink>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarDashboard;
