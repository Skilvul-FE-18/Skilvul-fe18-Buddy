import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteArtikel,
  getArtikel,
} from "../../../redux/reducer/artikelReducer";
import ListArtikelAdmin from "../../../components/ListArtikelAdmin";
import { NavLink, useNavigate } from "react-router-dom";

function ListAdminArtikel() {
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
    dispatch(deleteArtikel(id));
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12">
          <div className="row">
            <h1>Dashboard</h1>
            <div className="parallax">
              <div className="parallax-heading">
                <h2>List Artikel</h2>
                <NavLink to="/admin/artikel/create">
                  <button className="btn btn-primary mt-3 mb-3">Tambah Artikel</button>
                </NavLink>
              </div>
              <div className="scroll">
                <div className="row">
                  <ListArtikelAdmin
                    artikel={artikel}
                    onUpdateArtikel={handleUpdateArtikel}
                    onDeleteArtikel={handleDeleteArtikel}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListAdminArtikel;
