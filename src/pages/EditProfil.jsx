import { useDispatch, useSelector } from "react-redux";
import "../assets/css/editProfile.css";
import ikin from "../assets/img/gambar-ikin.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, getUserById, updateUser } from "../redux/reducer/userReducer";
import { Navbar } from "react-bootstrap";


function EditProfil() {
  const userData = useSelector((state) => state.users.userData);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();


  const [updatedUser, setUpdatedUser] = useState(userData);

  const handleChange = (e) => {
    setUpdatedUser((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = () => {
    dispatch(updateUser(id, updatedUser));
    dispatch(getUserById(id));
    navigate("/");
  };

  useEffect(() => {
    setUpdatedUser(userData);
  }, [userData]);

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);
  return (
    <>
      <main>
        <section>
          <div className="container">
            <div className="row mt-5">
              <div className="col-3">
                <div className="col-6">
                  <div className="card-edit-profile">
                    <div className="profile-container">
                      <div className="position-relative">
                        <img
                          className="profile-img mt-3"
                          src={ikin}
                          alt="Profile Picture"
                        />
                        <div className="edit-btn">
                          <i className="fas fa-pencil-alt">+</i>
                        </div>
                      </div>
                      <h5>{userData.username}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="box-form">
                  <div className="row">
                    <div className="col-md-12 mt-3">
                      <h3>Edit Profile</h3>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Username</label>
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="username"
                          name="username"
                          value={updatedUser.username}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="email"
                          name="email"
                          value={updatedUser.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="firstname"
                          name="firstname"
                          value={updatedUser.firstname}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="lastname"
                          name="lastname"
                          value={updatedUser.lastname}
                          onChange={handleChange}
                         
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="password"
                          name="password"
                          value={updatedUser.password}
                          onChange={handleChange}
                          
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="fullname"
                          name="fullname"
                          value={updatedUser.fullname}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="address"
                          name="address"
                          value={updatedUser.address}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Tanggal Lahir</label>
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="borndate"
                          name="borndate"
                          value={updatedUser.borndate}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Gender</label>
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="gender"
                          name="gender"
                          value={updatedUser.gender}
                          onChange={handleChange}
                         
                        />
                      </div>
                      <div className="form-group">
                        <label>Umur</label>
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="age"
                          name="age"
                          value={updatedUser.age}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row pb-4">
                    <div className="col-md-12">
                      <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        Ubah Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default EditProfil;
