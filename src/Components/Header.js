import React from 'react';
import ParticlesBg from "particles-bg";

const Header = (props) => {

   const { data: { project, github, name, description, city, social } } = props;

   const networks = social.map(function (network) {
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
   })

   return (
      <header id="home">
         <ParticlesBg type="circle" bg={true} />
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Главная</a></li>
               <li><a className="smoothscroll" href="#about">БИО</a></li>
               <li><a className="smoothscroll" href="#resume">Резюме</a></li>
               <li><a className="smoothscroll" href="#portfolio">Портфолио</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{name}</h1>
               <h3>{description}.</h3>
               <hr />
               <ul className="social">
                  <a href={project} className="button btn project-btn" target='_blank'><i className="fa fa-book"></i>Репозиторий</a>
                  <a href={github} className="button btn github-btn" target='_blank'><i className="fa fa-github"></i>Github</a>
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
   );
}

export default Header;
