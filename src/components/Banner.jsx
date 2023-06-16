import "../assets/css/LandingPage.css";
import logoBanner from "../assets/img/logo_banner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />
  };


  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="arrow arrow-right" onClick={onClick}>
        <BsArrowRight />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className="arrow arrow-left" onClick={onClick}>
        <BsArrowLeft />
      </div>
    );
  }

  return (
    <>
    <section className="banner">

      <div className="parallax mt-5">
        <div className="row">
          <Slider {...settings}>
            <div className="section-banner">
              <div className="row d-flex align-items-center">
                <div className="col-5 d-flex justify-content-center">
                  <img src={logoBanner} alt="banner"  />
                </div>
                <div className="col-7 text-center">
                  <span>#StopBullying</span>
                  <p id="description">
                    Bullying adalah suatu tindakan atau perilaku yang <br />
                    dilakukan dengan cara menyakiti orang lain.
                  </p>
                </div>
              </div>
            </div>
            <div className="section-banner">
            <div className="row d-flex align-items-center">
                <div className="col-5 d-flex justify-content-center">
                  <img src={logoBanner} alt="banner"  />
                </div>
                <div className="col-7 text-center">
                  <span>#StopBullying</span>
                  <p id="description">
                    Bullying adalah suatu tindakan atau perilaku yang <br />
                    dilakukan dengan cara menyakiti orang lain.
                  </p>
                </div>
              </div>
            </div>
            <div className="section-banner">
            <div className="row d-flex align-items-center">
                <div className="col-5 d-flex justify-content-center">
                  <img src={logoBanner} alt="banner"  />
                </div>
                <div className="col-7 text-center">
                  <span>#StopBullying</span>
                  <p id="description">
                    Bullying adalah suatu tindakan atau perilaku yang <br />
                    dilakukan dengan cara menyakiti orang lain.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
    </>
  );
}

export default Banner;
