import imgJumbotron from "../../assets/img/img-jumbotron.png";

function JumbotronArtikel() {
  return (
    <section
      className="jumbotronArtikel"
      style={{
        backgroundImage: `url(${imgJumbotron})`,
        height: "390px",
      }}
    >
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <div className="content text-light">
              <p
                style={{
                  fontSize: "55px",
                  fontWeight: "700",
                  paddingTop: "50px",
                }}
              >
                Temukan Pengetahuan
                <br />
                Tentang Bullying Disini
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JumbotronArtikel;
