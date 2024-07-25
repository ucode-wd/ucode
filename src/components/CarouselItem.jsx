import './styles/proyects.css';

export default function CarouselItem({ img, titulo, parrafo, languajes, url}) {
  const src = '../images/carousel-images/';
  const openWindow = ()=>{
    window.open(`https://www.${url}.com.ar`)
  }

  return (
    <div className="carousel__item">
      <div className="text__container">
        <div className="header">
          <h3 className='title'>
            {titulo}
            </h3>
          <p className="parrafo">{parrafo}</p>
        </div>
        <div className="technologies">
          <h4>Tecnologías Usadas:</h4>
            <div className="technologies__bottom">
            {languajes.map((lan, i) => (
              <div className="technologie" key={i}>
                <img src={`../images/svgProyects/${lan}.svg`} alt={i.languajes}/>
                <span>{lan}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="img__container" >
        <img src={src + img} alt={img} onClick={openWindow}/>
      </div>
    </div>
  );
}
