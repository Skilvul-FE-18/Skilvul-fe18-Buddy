import "../assets/css/LandingPage.css";
import backgroundBanner from "../assets/img/background_bullying.png";
import imgCard from '../assets/img/img-card-1.png'
import CardHome from "./CardHome";

function HomeListArtikel() {

    const data = [
        {
            id: 1,
            src: imgCard,
            title: "Tingkatkan kepercayaan dan keberanian dirimu",
            desc: "Baca Selengkapnya"
        },
        {
            id: 2,
            src:imgCard,
            title: "Tingkatkan kepercayaan dan keberanian dirimu",
            desc: "Baca Selengkapnya"
        },
        {
            id: 3,
            src: imgCard,
            title: "Tingkatkan kepercayaan dan keberanian dirimu",
            desc: "Baca Selengkapnya"
        },
    ]

    
  return (


    <section
      className="HomeListArtikel mt-5"
      style={{
        backgroundImage: `url(${backgroundBanner})`,
        width: "100%",
        minHeight: "715px",
      }}
    >
      <div className="container">
        <div className="row heading text-center pt-5">
          <span>Tips untuk Sobat Buddy</span>
          <p>
            Berikut tips untuk mencegah terjadinya bullying yang bisa sobat
            buddy lakukan ya.
          </p>
        </div>
        <div className="row">
            {
                data.map((item) => {
                    return (
                        <div className="col-md-4" key={item.id}>
                            <CardHome 
                            src={item.src}
                            tittle={item.title}
                            />
                        </div>
                    )
                }
                )
            }

        </div>
      </div>
    </section>
  );
}

export default HomeListArtikel;
