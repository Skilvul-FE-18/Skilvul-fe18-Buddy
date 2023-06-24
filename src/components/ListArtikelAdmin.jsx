import { PropTypes } from "prop-types";

function ListArtikelAdmin({artikel, onDeleteArtikel, onUpdateArtikel, onPreviewArtikel}) {
  return (
    <>
           {
                artikel.map((item) => (

          //   <div className="card card-list-admin mb-3" key={item.id}>
          //   <div className="row g-0 align-items-center">
          //     <div className="col-md-2">
          //       <img src={item.image_source} className="img-fluid rounded-start" alt="..." />
          //     </div>
          //     <div className="col-md-8">
          //       <div className="card-body">
          //           <div className="card-category d-flex mt-0">

          //           <p className="badge bg-primary">{item.categori}</p>
          //           <p className="px-5">{item.createdAt}</p>
          //           </div>
          //         <h5 className="card-title">{item.title}</h5>
          //         <p className="card-text">{item.excerpt}</p>
          //         <div
          //         className="card-text"
          //         dangerouslySetInnerHTML={{ __html: item.description }}
          //       ></div>
          //       </div>
          //     </div>
          //     <div className="col-md-2">
          //       <div className="card-button">
          //           <button className="btn btn-outline-primary" onClick={()=> onUpdateArtikel(item.id)}>Edit</button>
          //           <button className="btn btn-outline-danger" onClick={()=> onDeleteArtikel(item.id)}>Delete</button>
          //       </div>
          //     </div>
          //   </div>
          // </div>

          <table className="table table-bordered" key={item.id}>
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
                      <h5 className="fw-bold">{item.title}</h5>
                      <div className="artikel-information d-flex mt-3">
                       <p className="badge bg-primary">{item.categori}</p>
                        <p className="text-muted px-5">{item.createdAt}</p>
                      </div>

                    </div>

                  </th>
                  <td className="d-flex justify-content-center">
                    <button className="btn btn-primary " onClick={()=> onPreviewArtikel(item.id)}>Preview</button>
                    <button className="btn btn-warning mx-2" onClick={()=> onUpdateArtikel(item.id)}>Edit</button>
                    <button className="btn btn-danger" onClick={()=> onDeleteArtikel(item.id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
                ))
           }
      
  
    </>
  )
}

ListArtikelAdmin.propTypes = {
  artikel: PropTypes.array.isRequired,
  onDeleteArtikel: PropTypes.func.isRequired,
  onUpdateArtikel: PropTypes.func.isRequired,
  onPreviewArtikel: PropTypes.func.isRequired,
}

export default ListArtikelAdmin