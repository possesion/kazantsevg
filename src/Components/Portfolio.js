import React from 'react';

const Portfolio = (props) => {
  const { data: { projects } } = props;
  const renderProjects = (props) => {
    const projectData = props.map((proj) => {
      const { title, url, category, image } = proj;
      const projectImage = `images/portfolio/${image}`;
      return (
        <div key={title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={url} title={title} target="_blank">
              <img alt={title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{title}</h5>
                  <p>{category}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      )
    })
    return projectData;
  };

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1> Оцените мои работы </h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {renderProjects(projects)}
          </div>
        </div>
      </div>
    </section>
  )
};

export default Portfolio;
