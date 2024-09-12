import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Best Projects</span>
      <div className="portfolio__container container grid">
        <div className="portfolio__item">
          <a
            // href="https://teboo-saaj-applestore.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Apple store ecommerce site</h3> <br />
            <img
              src="https://www.digicape.co.za/image/cache/catalog/_products/2024/iPhones/iphone_13/iPhone_13_Starlight-1000x1000.jpg"
              alt="Apple store project"
              className="portfolio__img"
            />
          </a>
          <p>Tech stack: React Javascript State management</p>
          <b>
            <a
              href="https://github.com/tebohonthako/iRenew-store"
              target="_blank"
              rel="noreferrer"
            >
              Github repo
            </a>
          </b>
        </div>

        <div className="portfolio__item">
          <a
            // href="https://tebohonthako.github.io/ticket-station-added-the-ticket-form/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>CyberGI</h3> <br />
            <img
              src="https://images.shiksha.com/mediadata/images/articles/1709545684phpPfnagp.jpeg "
              alt="ticektstation for music event"
              className="portfolio__img"
              id="ios-calculator"
            />
          </a>
          <p>Tech stack: Angular & Bootstrap  </p>
          <b>
            <a
              href="https://github.com/The-DigitalAcademy/CyberGI"
              target="_blank"
              rel="noreferrer"
            >
              Github repo
            </a>
          </b>
        </div>


        <div className="portfolio__item">
          <a
            // href="https://nientjie94.github.io/DevQuiz"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Quiz game</h3> <br />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1vQcu5rTfSMCtNPJi7xOOnyEDJgfXWSLnA&s"
              alt="quiz game"
              className="portfolio__img"
              id="ios-calculator"
            />
          </a>
          <p>Tech stack: Vanilla Javascript</p>
          <b>
            <a
              href="https://github.com/Asanda3/Quiz-App"
              target="_blank"
              rel="noreferrer"
            >
              Github repo
            </a>
          </b>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
