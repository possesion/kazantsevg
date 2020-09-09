import React from 'react';

const Footer = (props) => {
  const { data: { social } } = props;

  const networks = social.map((network) => {
    return <li key={network.name}><a href={network.url} target='_blank'><i className={network.className}></i></a></li>;
  });

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {networks}
          </ul>

          <ul className="copyright">
            <li>&copy; Казанцев Геннадий</li>
            <li>2020 г.</li>
          </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home" target='_blank'><i className="icon-up-open"></i></a></div>
      </div>
    </footer>
  );

}

export default Footer;
