import signUp from "../assets/img/signUp.png";
import buddy from "../assets/img/buddy.png";
import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();


function Register() {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const register = async () => {
    let firstname = document.querySelector("#firstName").value;
    let lastname = document.querySelector("#lastName").value;
    let fullname = document.querySelector("#fullName").value;
    let email = document.querySelector("#email").value;
    let address = document.querySelector("#address").value;
    let password = document.querySelector("#password").value;

    let config = {
      url: "https://64532ddfe9ac46cedf1ede09.mockapi.io/Users",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
       firstname: firstname,
        lastname: lastname,
        fullname: fullname,
        email: email,
        address: address,
        password: password,
        
      })
    };


    try {
      const response = await axios(config);
      if (response.status === 201) {
        const responseData = response.data;
        // Simpan token ke dalam cookie
        cookies.set('token', responseData.token);
        console.log("Registration success!");
        // Lakukan tindakan lanjutan setelah registrasi berhasil
        window.location.href = "/login";
      } else {
        console.log("Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    
    }

  };

  return (
    <>
      <section className="container-fluid login">
        <div className="row">
          <div className="col-md-6 kiri">
            <div className="row align-items-center">
              <img src={signUp} alt="" />
            </div>
          </div>
          <div className="col-md-6 kanan">
            <div className="row justify-content-center boxLogin">
              <div className="col-md-7">
                <div className="buddy mt-5">
                  <img src={buddy} alt="" style={{ width: "70px" }} />
                  <span className="buddy-text fs-6">Buddy</span>
                </div>
                <div className="judulSignup" style={{ padding: "30px 0" }}>
                  <h1>Daftar</h1>
                  <p>
                    Udah Punya Akun? <a href="register.html">Masuk Sekarang</a>
                  </p>
                </div>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Alamat Lengkap</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Kata Sandi</label>
                  <div className="input-group mb-3">
                    <input
                      type={visible ? "text" : "password"}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      className="input form-control"
                      id="password"
                      placeholder="password"
                      required="true"
                      aria-label="password"
                      aria-describedby="basic-addon1"
                    />

                    <span
                      className="input-group-text "
                      onClick={() => setVisible(!visible)}
                    >
                      <i className="fas fa-eye" id="show_eye"></i>
                      <i className="fas fa-eye-slash d-none" id="hide_eye"></i>
                    </span>
                  </div>
                </div>
                <div className="row pt-3 mb-5">
                  <button
                    id="register-btn"
                    onClick={register}
                    className="btn btn-primary"
                  >
                    Daftar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
