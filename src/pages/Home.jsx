import uno from "../assets/uno.jpg";
import dos from "../assets/dos.jpg";
import tres from "../assets/tres.jpg";
import cuatro from "../assets/cuatro.jpg";
import NavBar from "./NavBar";
import Body from "./Body";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <NavBar />
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner " style={{height:'50em'}}>
          <div className="carousel-item active" data-bs-interval="1000">
            <img src={uno} className="d-block w-100 h-70" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Etiqueta de la primera diapositiva</h5>
              <p>
                Algún contenido placeholder representativo para la primera
                diapositiva.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={dos} className="d-block w-100 "  alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Etiqueta de la segunda diapositiva</h5>
              <p>
                Algún contenido placeholder representativo para la segunda
                diapositiva.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={tres} className="d-block w-100 h-70" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Etiqueta de la tercera diapositiva</h5>
              <p>
                Algún contenido placeholder representativo para la tercera
                diapositiva.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={cuatro} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Etiqueta de la segunda diapositiva</h5>
              <p>
                Algún contenido placeholder representativo para la segunda
                diapositiva.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
      <Body />
      <Footer/>
    </>
  );
};

export default Home;
