import img1 from "../assets/images/img-1.jpg";
import img2 from "../assets/images/img-1.jpg";
import img3 from "../assets/images/img-3.jpg";

export const Blog = () => {
  const notas = [
    {
      imagen: img1,
      title: "Nota 1",
      texto: "Inicio de la nota 1...",
    },
    {
      imagen: img2,
      title: "Nota 2",
      texto: "Inicio de la nota 2...",
    },
    {
      imagen: img3,
      title: "Nota 3",
      texto: "Inicio de la nota 3...",
    },
    // Añade más notas según sea necesario
  ];
  return (
    <div>
      {notas.map(({ imagen, title, texto }, index) => (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={imagen} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 text-start">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{texto}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
