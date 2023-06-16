
import NavbarDashboard from '../../components/NavbarDashboard'
import {  Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie'
import logo from './../../assets/img/notFound.png'
import dayjs from 'dayjs'

function Index() {
  const ToolsCookies = new Cookies()
  let userData = ToolsCookies.get("user_data")
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://6454d642f803f34576329b54.mockapi.io/api/v1/pelaporan").then(res => {
      let dataFilter = res.data
      let dataResult = []
      for (let i = 0; i < dataFilter.length; i++) {
        if(dataFilter[i]['user_id'] == userData.id){
          dataResult.push(dataFilter[i])
        }
      }
      setData(dataResult)
      console.log(data.length)
    })
  },[])
 


  return (
    <>
        <NavbarDashboard/>
        <div className='py-5' style={{ background: "#F4F7F9" , minHeight:"100vh" }}>
            <Container>
                <Row>
                    <Col lg={1}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="75"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>
                    </Col>
                    <Col>
                      <Row>
                        <p style={{ fontSize:"14px", marginTop:"10px" }}>Selamat Datang</p>
                        <h2 style={{ fontSize:"24px", marginTop:"-10px" }}>{userData['fullname']}</h2>
                      </Row>
                    </Col>
                </Row>
                <Row style={{ marginTop: "100px", fontWeight: "500",
fontSize: "24px" }}>
                  Riwayat Pelaporan
                </Row>
                <Row className='mt-4'>
                  {
                    data.length > 0 ? 
                     
                      data.map((e) => {
                        return(
                          <Row key={e.id} className="my-2">
                            <Col lg={6} className="px-4 py-5 bg-white rounded-2">
                              <p><span style={{ padding: "12px 70px", backgroundColor: "#FB4141", color: "#ffffff", borderRadius: "8px", fontSize: "12px" }}>
                                    {e.status}
                                  </span></p><p className='my-5 fw-bold' style={{ fontSize: "12px" }}>{e.kategori} <span className="fw-normal ms-4">{dayjs(e.tanggal).format("D MMMM YYYY")}</span></p><h2 style={{ marginTop: "-20px", fontWeight: "600", fontSize: '32px' }}>{e.judul}</h2><p className="mt-4">{e.isi}</p>
                            </Col>
                          </Row>
                        )
                      })
                     
                  
                     : (
                      <Col lg={12} className="text-center">
                        <Image src={logo} />
                        <h3 className='mt-4' style={{ fontSize: "20px",fontWeight:"500" }}>Tidak ada riwayat laporan</h3>
                        <p style={{ fontSize: "14px",fontWeight:"400" }}>Gunakan fitur pelaporan untuk membantu <br></br> melaporkan jika terjadinya bullying</p>
                        <Button className='py-2 px-4 mt-1' style={{ backgroundColor: "#3366FF" }}>Lihat Pelaporan</Button>
                      </Col>
                    )
                  }
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Index
