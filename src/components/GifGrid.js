import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			<h3 className="animate__animated animate__fadeIn">{category}</h3>
			<div className="card-grid">
				{/* este simbolo && significa que si está cargando, ponga un párrago que diga loading
				Si no está cargando, no hace nada */}
				{loading && <p className="animate__animated animate__flash">Loading...</p>}
				{
					// prettier/ignore
					images.map((img) => (
						<GifGridItem {...img} key={img.id} />
					))
				}
			</div>
		</>
	);
};

GifGrid.propTypes = {
	category : PropTypes.string.isRequired,
}