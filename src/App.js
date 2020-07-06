import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

	const [ categoria, guardarCategoria ] = useState('');
	const [ noticias, guardarNoticias ] = useState([]);
	
	useEffect( () => {
		const consultarAPI = async () => {
			const apiKey = '47a0891d692543cc809962da3f8830a7';
			const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${apiKey}`;
			const res = await fetch(url);
			const resJSON = await res.json();

			guardarNoticias(resJSON.articles);
		}
		consultarAPI();
	}, [categoria]);

  	return (
			<Fragment>
				<Header titulo="Encuentra las mejores noticias de Colombia" />

				<div className="container white">
					<Formulario
						guardarCategoria={guardarCategoria}
					/>
					<ListadoNoticias
						noticias={noticias}
					/>
				</div>
			</Fragment>
	);
}

export default App;
