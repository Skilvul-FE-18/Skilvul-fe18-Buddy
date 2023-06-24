import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteArtikel,
  getArtikel,
} from "../../../redux/reducer/artikelReducer";
import ListArtikelAdmin from "../../../components/ListArtikelAdmin";
import '../../../assets/css/DashboardAdmin.css'
import { NavLink, useNavigate } from "react-router-dom";
import iconDb from "../../../assets/img/icon_db.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { artikel } = useSelector((state) => state.artikel);

  useEffect(() => {
    dispatch(getArtikel());
  }, [dispatch]);

  const handleUpdateArtikel = (id) => {
    navigate(`/admin/artikel/update/${id}`);
  };
  const handleDeleteArtikel = (id) => {
    MySwal.fire({
      title: "Are you sure want to delete this article?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        dispatch(deleteArtikel(id));
        MySwal.fire("Deleted!", "Your article has been deleted.", "success");
      }
    });
  };
  const handlePreviewArtikel = (id) => {
   navigate(`/admin/artikel/preview/${id}`) 
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12">
          <div className="row">
            <div className="col-md-6 text-start py-2">
              <a href="#" className="btn_db">
                <img src={iconDb} alt="" className="px-2" />
              </a>
              <span className="heading-dashboard">Dashboard Admin</span>
            </div>
            <div className="parallax">
              <div className="parallax-heading mb-3">
                <h2 className="">List Artikel</h2>
                <NavLink to="/admin/artikel/create">
                  <button className="btn btn-primary mb-2">
                    Tambah Artikel
                  </button>
                </NavLink>
              </div>
              {/* <div className="scroll">
                <div className="row">
                  <ListArtikelAdmin
                    artikel={artikel}
                    onUpdateArtikel={handleUpdateArtikel}
                    onDeleteArtikel={handleDeleteArtikel}
                  />
                </div>
              </div> */}
              <div className="table">
              {/* <table className="table table-bordered">
              <thead>
                <tr> 
                  <th className="text-center" width='900px' scope="col">Tittle</th>
                  <th className="text-center" scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div>
                      <h5 className="fw-bold">Penanganan Bullying di Sekolah: Langkah-Langkah yang Efektif</h5>
                      <div className="artikel-information d-flex mt-3">
                       <p className="badge bg-primary">category</p>
                        <p className="text-muted px-5">date</p>
                      </div>

                    </div>

                  </th>
                  <td className="d-flex justify-content-center">
                    <button className="btn btn-primary ">Preview</button>
                    <button className="btn btn-warning mx-2">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table> */}
            <ListArtikelAdmin
            artikel={artikel}
            onUpdateArtikel={handleUpdateArtikel}
            onDeleteArtikel={handleDeleteArtikel}
            onPreviewArtikel={handlePreviewArtikel}
            />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
