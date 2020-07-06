import React from 'react';
import styles from './Noticia.module.css';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => (
  <div className="col s12 m6 l4">
    <div className="card">
      <div className="card-image">
        <img src={noticia.urlToImage} alt={`Imagen de ${noticia.author}`}/>
      </div>
      <div className="card-content">
        <h4 className={styles['card-titulo']} >{noticia.title}</h4>
        <p className={styles['card-descripcion']} >{noticia.description}</p>
        <a href={noticia.url} target="_blank" rel="noopener noreferrer">Ver noticia completa</a>
      </div>
    </div>
  </div>  
);

Noticia.propTypes = {
  noticia: PropTypes.object.isRequired
}

export default Noticia;