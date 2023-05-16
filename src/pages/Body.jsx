import aprende from "../assets/aprende.jpg";
import enseña from "../assets/enseña.jpg";
const Body = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="d-flex container justify-content-center">

        <div className="col">
          <div className="col mx-2">
            <div className="card h-100" style={{ maxWidth: '70%' }} >
              <img src={aprende} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Aprende</h5>
                <p className="card-text">Aprender es un proceso apasionante y enriquecedor que nos permite adquirir nuevos conocimientos, desarrollar habilidades y expandir nuestra comprensión del mundo que nos rodea.</p>
              </div>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="col mx-2">
            <div className="card h-100" style={{ maxWidth: '70%' }}>
              <img src={enseña} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Enceña</h5>
                <p className="card-text">"Enseño mis conocimientos es un privilegio y una responsabilidad que asumo con entusiasmo.</p>
              </div>
            </div>
          </div>

=======
      <div className="row row-cols-1 row-cols-md-2 g-3">
        <div className="col">
          <div className="card h-100">
            <img src={aprende} className="card-img-top" alt="Aprende" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={enseña} className="card-img-top" alt="Enseña" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
>>>>>>> f40a5888a21af72f647467a961c48a7efa6cb61b
        </div>
      </div>
    </>
  );
};

export default Body;
