import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Button, Col, Container, Image, Modal, Row,Form } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import Success from '../assets/img/Success 1.png';
import '../assets/css/FormPelaporan.css'


function FormPelaporan(props) {
    const userData = useSelector((state) => state.users.userData);
    const [laporan, setLaporan] = useState({
      judul : "",
      isi : "",
      kategori : "",
      instansi : "",
      tanggal : "",
      lokasi : "",
    })
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const nav = useNavigate()
  
    
    const handleSubmit = (e) => {
      // eslint-disable-next-line react/prop-types
      e.preventDefault()
      // eslint-disable-next-line react/prop-types
      if(props.data){
        // eslint-disable-next-line react/prop-types
        laporan.pelapor = userData.fullname
        laporan.user_id = userData.id
        axios.post('https://6454d642f803f34576329b54.mockapi.io/api/v1/pelaporan',laporan).then(
          res => {
            console.log(res)
            setLaporan({
              judul : "",
              isi : "",
              kategori : "",
              instansi : "",
              tanggal : "",
              lokasi : "",
              pelapor : "",
              user_id: "",
            })
            handleShow();
          }
        )
      }else{
        nav('/login')
      }
    }
  return (
    <>
    <section className="formPelaporan">

     <Navbar />
      <div className="banner">
        <Container fluid>
          <Row className="text-center">
            <Col lg={12}>
                <h2>Selamat Datang di layanan Pelaporan</h2>
                <p>Segera Laporkan apabila Sobat Buddy melihat ataupun menjadi korban Bullying</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="form">
        <Container>
          <Row>
            <Col lg={9} className='mx-auto'>
              <div className='card__form px-5 text-start'>
                <Form onSubmit={handleSubmit}>
                  <h3>Sampaikan Laporan Anda</h3>
                  <p>Silahkan isi formulir dibawah dengan Bahasa Indonesia yang baik dan benar</p>
                  <Form.Group className="mb-3 mt-4" id="exampleForm.ControlInput1">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control value={laporan.judul}  className="judul" id="judul" type="text" placeholder="Ketik Judul Laporan Anda *"  onChange={(e) => setLaporan({ ...laporan, judul: e.target.value })} required />
                  </Form.Group>
                  <Form.Group className="mb-3 mt-4" id="exampleForm.ControlTextarea1">
                    <Form.Label>Isi Laporan</Form.Label>
                    <Form.Control value={laporan.isi}  id="laporan" className="laporan" as="textarea" rows={6} placeholder='Ceritakan Masalah Anda *'  onChange={(e) => setLaporan({ ...laporan, isi: e.target.value })} required/>
                  </Form.Group>
                  <Form.Group className="mb-3 mt-4" >
                    <Form.Label>Kategori Laporan</Form.Label>
                    <Form.Select value={laporan.kategori}  aria-label="Default select example" id="kategori"  onChange={(e) => setLaporan({ ...laporan, kategori: e.target.value })}>
                      <option>Pilih Kategori Laporan Bullying Anda *</option>
                      <option value="Verbal">Verbal</option>
                      <option value="Fisik">Fisik</option>
                      <option value="Mental">Mental</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3 mt-4" >
                    <Form.Label>Instansi Pendidikan</Form.Label>
                    <Form.Select aria-label="Default select example" id="instansi" value={laporan.instansi}  onChange={(e) => setLaporan({ ...laporan, instansi: e.target.value })}>
                      <option>Pilih Instansi Pendidikan Anda *</option>
                      <option value="Universitas Gajah Mada">Universitas Gajah Mada</option>
                      <option value="UGM Margonda">UGM Margonda</option>
                      <option value="Universitas Gunadarma">Universitas Gunadarma</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3 mt-4" id="exampleForm.ControlInput1">
                    <Form.Label>Pilih Tanggal</Form.Label>
                    <Form.Control className="tanggal" id="tanggal" type="text" placeholder="Pilih Tanggal Kejadian *" required onFocus={(e) => (e.target.type = "date")} onChange={(e) => setLaporan({ ...laporan, tanggal: new Date(e.target.value )})} />
                  </Form.Group>
                  <Form.Group className="mb-3 mt-4" id="exampleForm.ControlInput1">
                    <Form.Label>Lokasi</Form.Label>
                    <Form.Control value={laporan.lokasi} className="Lokasi" id="Lokasi" type="text" placeholder="Ketik Lokasi Kejadian *" onChange={(e) => setLaporan({ ...laporan, lokasi: e.target.value })} required />
                  </Form.Group>
                  <hr className='my-4'/>
                  <Button type='submit'>Kirim Laporan</Button>
                </Form>
              </div>
            </Col>
          </Row>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <Row className="text-center">
                <Col lg={12}>
                    <h2>Laporan Berhasil Dikirim</h2>
                    <p>Silahkan menunggu sampai laporan diproses atau dapat dilihat riwayatnya di halaman dashboard </p>
                    <Image src={Success} />
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    </section>
    </>
  )
}

export default FormPelaporan