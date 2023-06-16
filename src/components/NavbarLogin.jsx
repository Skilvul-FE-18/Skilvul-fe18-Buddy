import logo from '../assets/img/logo.png'

function NavbarLogin() {
  return (
   <>
    <nav className="navbar navbar-expand-md sticky-top" style={{background:'#FFFFFF'}}>
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-center" />
                Buddy
              </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="landingpage.html">Beranda</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#tentangKami.html">Tentang Kami</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/pelaporan.html">Pelaporan</a>
              </li> 
              <li className="nav-item px-3">
                <a className="nav-link" href="/">Artikel</a>
              </li>                
            
            </ul>
            <ul className="navbar-nav">
                <a className="text-decoration-none" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
                
                  </a>
                {/* <button className="btn btn-outline-primary" type="submit">Masuk</button>
                <button className="btn btn-primary mx-2" type="submit">Daftar</button> */}
            </ul>
          </div>
        </div>
      </nav>
   </>
  )
}

export default NavbarLogin