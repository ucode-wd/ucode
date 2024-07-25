import './styles/bento.css';
import BentoItem from './BentoItem'
export default function BentoSection(){
    return(
        <section className="bento" id='bento'>
            <BentoItem 
            className="smallElement first" 
            />
            <BentoItem 
            className="bigElement" 
            titulo="Elevamos tu presencia digital"
            parrafo="Somos ucode y nos especializamos en <span>desarrollar páginas webs intuitivas para potenciar al máximo tu negocio y su presencia online.</span><br>
            ¡Ofrecemos soluciones de calidad para su negocio!"/>

            <BentoItem 
            className="bigElement" 
            titulo="Diseño web adaptativo" 
            parrafo="En nuestra agencia, <span>Todos nuestros proyectos son compatibles con diferentes vistas.</span><br>
            Es de suma importancia que el diseño de la página se adapte al dispositivo para que se pueda navegar desde cualuquier interfaz."/>
            
            <BentoItem className="smallElement second"  />
            
            <BentoItem className="smallElement last" />
            <BentoItem className="bigElement" 
            titulo="Agencia joven"
            parrafo="Somos una agencia nueva, lo cual significa que <span>trabajamos con las últimas y mejores tecnologías del mercado.</span><br>
            Estamos en constante aprendizaje y sumando nuevos conocimientos para brindar una mejor calidad."/>
        </section>
    )
}