import "../assets/css/DashboardAdmin.css";
import AdminLayout from "../layout/AdminLayout";
import ListAdminArtikel from "./admin/artikel/ListAdminArtikel";

function DashboardAdmin() {

  return (
    <>
          <AdminLayout>
          <ListAdminArtikel />
          </AdminLayout>
     
    </>
  );
}

export default DashboardAdmin;
