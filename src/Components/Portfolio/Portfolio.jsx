import "./Portfolio.css";
import portfolio_glitter from "/assets/portfolio_glitter.jpg"
import portfolio_celulares from "/assets/portfolio_celulares.jpg"
import portfolio_characters from "/assets/portfolio_characters.jpg"
import portfolio_richard from "/assets/portfolio_richard.jpg"

const Portfolio = () => {
  const cards = [
    
    {
      id: 1,
      title: "XiCelulares ecommerce",
      subtitle: "REACT | FIREBASE",
      url: "https://nicolas-mazziotti.github.io/xicelulares-Mazziotti/",
      img: portfolio_celulares,
    },
    {
      id: 2,
      title: "Rick and Morty Characters",
      subtitle: "HTML | CSS | JS",
      url: "https://nicolas-mazziotti.github.io/getApi/",
      img: portfolio_characters,
    },
    {
        id: 3,
        title: "Crud Grill quoter",
        subtitle: "HTML | CSS | JS | PHP | MYSQL",
        url: "https://nicolas-mazziotti.github.io/getApi/",
        img: portfolio_richard,
      },
      {
        id: 4,
        title: "GlitterArt freelance",
        subtitle: "HTML | CSS | BOOTSTRAP | JS",
        url: "https://glitterart.es/",
        img: portfolio_glitter,
        alt: "glitterart",
      },
  ];
  return (
    <div className="portfolio-container">
      <div
        className="portfolio-title-container" data-aos="fade-up" data-aos-duration="1000">
        <h1>PORTFOLIO</h1>
        <div data-aos="fade-up" data-aos-duration="1000"></div>
      </div>
      <div className="cards-container" >
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
                    <a href="">Live demo</a>
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
