import { useSelector } from "react-redux";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import TentangKami from './pages/TentangKami';
import Artikel from './pages/Artikel';
import DetailArtikel from './pages/DetailArtikel';
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import FormPelaporan from "./pages/FormPelaporan";
import Create from "./pages/admin/artikel/create";
import Update from "./pages/admin/artikel/update";
import EditProfil from './pages/EditProfil';
import DashboardNotFound from "./components/DashboardNotFound";
import Preview from './pages/admin/artikel/preview';


function App() {
  const store = useSelector((state) => state.users);
  return (
    <>
      <BrowserRouter>
      {
        store.authStatus ? 
        <Routes>
          <Route exact path="*" element={<DashboardNotFound />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/tentangKami" element={<TentangKami />}  />
          <Route exact path="/artikel" element={<Artikel />}  />
          <Route exact path="/detail/:id" element={<DetailArtikel />} />
          <Route exact path="/formLaporan" element={<FormPelaporan data="send" />} />
          <Route exact path="/profile" element={<EditProfil />} />
          <Route exact path="/admin/*" element={<DashboardAdmin />} />
          <Route exact path="/admin/artikel/create" element={<Create />} />
          <Route exact path="/admin/artikel/update/:id" element={<Update />} />
          <Route exact path="/admin/artikel/preview/:id" element={<Preview />} />
        </Routes> 
        : 
        <Routes>
           <Route exact path="*" element={<DashboardNotFound />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/tentangKami" element={<TentangKami />}  />
          <Route exact path="/artikel" element={<Artikel />}  />
          <Route exact path="/detail/:id" element={<DetailArtikel />} />
          <Route exact path="/formLaporan" element={<FormPelaporan />} />
          {/* <Route exact path="/admin/*" element={<DashboardAdmin />} />
          <Route exact path="/admin/artikel/create" element={<Create />} />
        <Route exact path="/admin/artikel/update/:id" element={<Update />} />
        <Route exact path="/admin/artikel/preview/:id" element={<Preview />} /> */}
        </Routes>
      }
      </BrowserRouter>
    </>
  );
}

export default App;
