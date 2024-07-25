import React from 'react';

import './styles/proyects.css';
import Arrow from './CarouselSvg.jsx';
import CarouselItem from './CarouselItem';
import projectsData from '../scripts/proyects.js';

export default function ProyectsSection() {
    console.log(projectsData)
    React.useEffect(()=>{},[])
    return (
        <section className="proyects" id="proyects">
            <h2>Nuestros Proyectos</h2>
            <div className="carousel__radius">
                <div className="proyects__container">
                    {projectsData.map((project, i) => (
                        <CarouselItem 
                        key={i}
                        titulo={project.titulo}
                        img={project.imagen}
                        parrafo={project.parrafo}
                        url={project.url}
                        languajes={project.languajes}
                        />
                        ))}
                </div>
            </div>
            <Arrow left className="arrow left__arrow" fill="#fff" />
            <Arrow right className="arrow right__arrow" fill="#fff" />
        </section>
    );
}

