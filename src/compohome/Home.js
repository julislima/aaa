import '../App.css';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      
      <section className="hero">
        <h1 className='textprincipal'>Explore Salvador da forma mais acessível para você.</h1>
        <div className="img-principal">
          <img src={require('../assets/imagem3.png')} width={390} alt="Imagem Principal" />
        </div>

        <div className="Matheus">
        <a href ='/sobreosite'><button className="btn-filled-dark"><span className="material-symbols-outlined">Sobre o nosso site</span></button></a>
        </div>
      </section>

      <section id="serv-groom">
        <h2>Serviços</h2>
        <ul className="services">

          <li className="card-large card-dark card-wide">
            <div className="card-image1">
              <img src={require('../assets/localização4.png')} alt="Localização" />
            </div>
            <div>
              <br></br>
              <h1 >Guias por Localização.</h1>
              <br></br>

              <p className='texto-serviços'>Nosso guia por localização é a ferramenta perfeita para explorar destinos turísticos de forma fácil e conveniente.</p>
              <br></br>
              <br></br>
              <br></br>

              <button className="btn-filled-dark"><span className="material-symbols-outlined">Saiba mais</span></button>
            </div>
          </li>

          <li className="card-large card-dark card-wide">
            <div className="card-image">
              <img src={require('../assets/guias.png')} alt="Guias Turísticos" />
            </div>

            <div className='youtube'>
              <br></br>
              <h1>Guias Turísticos</h1>
              <br></br>
              
              <p className='texto-serviços2'>Nossos guias são pensados de acordo com as suas preferências individuais, oferecendo as recomendações mais acessíveis e pensando nas suas necessidades.</p>
              <br></br>
              <br></br>
              <br></br> 
              <button className="btn-filled-dark"><span className="material-symbols-outlined">Saiba mais</span></button>
            </div>
          </li>
        </ul>
      </section>

      <section id="locate">
        <div>
          <h2>Quem Somos</h2>
          <p>Somos uma plataforma de turismo comprometida em proporcionar experiências de viagem inclusivas para todos os viajantes. Acreditamos que viajar é um direito universal e estamos empenhados em tornar isso uma realidade para pessoas de todas as habilidades.</p>
          <div className="Julia">
            <button  className="btn-outline-dark btn-hover-color"> <span className="material-symbols-outlined"></span>Contato   </button > 
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;