import React from 'react';
import { Link } from 'react-router-dom';

import './PostPreview.css';

export default function PostPreview(props) {
	return (
		<Link to={props.link} className="post-link">
			<div className="post-preview-box">
				<h1 className="post-title">{props.title}</h1>
				<p className="post-info"><i>{props.author ? props.author + " - " : ""}{new Date(props.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</i></p>
				<p className="post-blurb">{props.blurb}</p>
			</div>
		</Link>
	)
}