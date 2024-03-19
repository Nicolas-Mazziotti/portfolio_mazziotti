import "./Portfolio.css";
import { cards } from "../CardsData/CardsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {

  // const [icon, setIcon] = useState(true)

  // const handleIcon = (className) => {
  //   if (className != 'without-icon'){
  //     setIcon(true)
  //   }else{
  //     setIcon(false)
  //   }
  // }


  return (
    <div className="portfolio-container" id="portfolio">
      <div className="portfolio-title-container" data-aos="fade-up" data-aos-duration="1000">
        <h1>PORTFOLIO</h1>
        <div data-aos="fade-up" data-aos-duration="1000"></div>
      </div>
      <div className="cards-container">
        {cards.map((card) => {
          return (
            console.log(card.img),
            (
              <div className="card" key={card.id} data-aos="fade-up" data-aos-duration="1000">
                <div className="card-image-container">
                  <img src={card.img} alt={card.alt} />
                </div>
                <div className="card-content">
                  <h2 className="card-title">{card.title}</h2>
                  <p>{card.subtitle}</p>
                  <div className="card-content-buttons"> 
                  {card.className !== 'without-icon' ? (
                    <a href={card.github} className="icon-card without-github"><FontAwesomeIcon icon={faGithub}/></a>
                  ) : null}                    
                    <a href={card.url} className="btn-card">Live demo</a>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
