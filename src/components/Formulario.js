import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

	const opciones = [
		{value: 'general', label: 'General'},
		{value: 'business', label: 'Negocios'},
		{value: 'entertainment', label: 'Entretenimiento'},
		{value: 'health', label: 'Salud'},
		{value: 'science', label: 'Ciencia'},
		{value: 'sports', label: 'Deportes'},
		{value: 'technology', label: 'Tecnología'}
	];
	const [ categoria, SelectNoticias ] = useSelect('general', opciones);

	// Se envia el formulario

	const buscarNoticias = e => {
		e.preventDefault();
		guardarCategoria(categoria)
	}

	return ( 
		<div className={`${styles.buscador} row`}>
			<div className="col s12 offset-12">
				<form
					onSubmit={buscarNoticias}
				>
					<h2 className={styles.heading} >Encuentra noticias por categorías</h2>

					<SelectNoticias />

					<div className="input-field col s12">
						<input
							type="submit"
							className={`${styles['btn-block']} btn-large amber darken-2`}
							value="Consultar"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
 
Formulario.propTypes = {
  guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;