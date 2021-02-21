import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ id, title, url }) => {
	return (
		<div className="card animate__animated animate__fadeIn animate__fast 800ms">
			<img src={url} alt={title}></img>
			<p>{title}</p>
		</div>
	);
};

GifGridItem.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
