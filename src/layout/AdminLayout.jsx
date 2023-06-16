import SideNavbar from "../components/SideNavbar";

// eslint-disable-next-line react/prop-types
function AdminLayout({children}) {
  return (
    <>
      <div className="container-fluid">
        <div className="row min-vh-100 flex-column flex-md-row">
          <SideNavbar />
          <section className="main col py-3">

          {children}
          </section>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
