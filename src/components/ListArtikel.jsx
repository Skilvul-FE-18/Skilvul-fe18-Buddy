import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Artikel.css";
import CardArtikel from "./CardArtikel";
import { useEffect } from "react";
import {  getArtikel } from "../redux/reducer/artikelReducer";
import HighlightArtikel from "./HighlightArtikel";
import FilterArtikel from "./FilterArtikel";
import { useNavigate } from "react-router-dom";

function ListArtikel() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { artikel, isLoading, filterCategory } = useSelector(
    (state) => state.artikel
  );

  const loading = useSelector((state) => state.artikel);
  const higlightedArtikel = artikel.find((item) => item.categorihg === "true");

  // const filteredCategory = artikel.filter((item) => {
  //   if (filterCategory === "all") {
  //     return true;
  //   } else {
  //     return item.categori === filterCategory;
  //   }
  // });
 
    const filteredCategory = filterCategory === 'all' ? artikel : artikel.filter((item) => item.categori === filterCategory)

  const handleDetail = (id) => {
    navigation(`/detail/${id}`)
  }

  useEffect(() => {
    dispatch(getArtikel());
  }, []);

  if (loading.isLoading) {
    return <p>Loading articles. . . </p>;
  }

  return (
    <>
      <FilterArtikel />

      {higlightedArtikel && (
        <HighlightArtikel
          imgHg={higlightedArtikel.image_source}
          categori={higlightedArtikel.categori}
          date={higlightedArtikel.createdAt}
          title={higlightedArtikel.title}
          excerpt={higlightedArtikel.excerpt}
          onClick={() => handleDetail(higlightedArtikel.id)}
        />
      )}
      <div className="container">
        <div className="row">
          <h3>Artikel Terbaru</h3>
          {filteredCategory.map((item) => (
            <div className="col-md-4" key={item.id}>
              <CardArtikel
                img={item.image_source}
                kategori={item.categori}
                date={item.createdAt}
                tittle={item.title}
                excerpt={item.excerpt}
                onClick={() => handleDetail(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListArtikel;
