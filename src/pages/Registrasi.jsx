import { Link } from "react-router-dom";
import buddy from "../assets/img/buddy.png";
import signup from "../assets/img/signup.png";
import axios from "axios";
import { apiEndPoint } from "../App";
import {useState,useEffect} from "react"

function Registrasi() {
	const [data, setData] = useState({name: "", email: "", password: ""});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios.get(apiEndPoint+"/users")
		.then((result) => {
			setUsers(result.data);
			console.log(result.data)
		})
		.catch((err) => {
			console.log(err);
		});
	}, []);

	const doRegister =  () => {
		return async () => { //agar tidak auto terpanggil saat melakukan render 
			if(data.name === "" || data.email === "" || data.password === ""){
				alert("Data tidak boleh kosong");
				return;
			}
			if(users.find((user) => user.email === data.email)){
				alert("Email sudah terdaftar");
				return;
			}
			if(isSubmitting) return;
			setIsSubmitting(true);

			await axios.post(apiEndPoint+"/users", data)
			.then(() => {
				alert("Registrasi Berhasil")
				setData({name: "", email: "", password: ""})
				// console.log(result)
			})
			.catch(() => {
				alert('Registrasi Gagal')
			});
			setIsSubmitting(false);
		}
	}

	return (
		<div>
			<div>
				<div className="container-md">
					<div className="min-vh-100 d-flex justify-content-center align-items-center w-100">
						<div
							className=" shadow d-lg-flex justify-content-between gap-1"
							style={{ width: "800px" }}>
							<div className="w-50 d-lg-flex d-none justify-content-center items-center py-5 px-5">
								<img src={signup} alt="" className="ratio ratio-1x1" />
							</div>
							<div
								className="flex-grow-1 px-md-5 px-3 py-5"
								style={{ backgroundColor: "#f6f9ff" }}>
								<div className="d-flex align-items-center justify-content-start gap-2 mb-4">
									<img src={buddy} alt="" style={{ height: "40px" }} />
									<span>Buddy</span>
								</div>
								<span className="fw-bold lh-1 fs-2">Daftar</span>
								<p className="mb-3">
									<span style={{ color: "#838383", fontSize:"14px"}}>Sudah punya akun?</span>{" "}
									<Link to="/" className="text-decoration-none fw-bold" style={{fontSize:"14px"}}>
										Masuk Sekarang
									</Link>
								</p>
								<form>
									<div className="mb-2">
										<label htmlFor="Nama" className="form-label">
											Nama Lengkap
										</label>
										<input
											value={data.name ?? ""}
											type="text"
											className="form-control"
											id="Nama"
											placeholder="Masukkan Nama Lengkap"
											onChange={(e) => setData({...data, name: e.target.value})}
										/>
									</div>
									<div className="mb-2">
										<label htmlFor="email" className="form-label">
											Email
										</label>
										<input
											value={data.email ?? ""}
											type="email"
											className="form-control"
											id="email"
											placeholder="Masukkan email"
											onChange={(e) => setData({...data, email: e.target.value})}
										/>
									</div>
									<div className="mb-3">
										<label htmlFor="password" className="form-label">
											Kata Sandi
										</label>
										<input
											value={data.password ?? ""}
											type="password"
											className="form-control"
											id="password"
											placeholder="Masukkan Kata Sandi"
											onChange={(e) => setData({...data, password: e.target.value})}
										/>
									</div>
									<button type="button" className="btn btn-primary block w-100" onClick={doRegister()} >
										{ isSubmitting ? "Loading..." : "Daftar"}
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Registrasi;
