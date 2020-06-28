import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './PostPreview.css';

export default function PostPreview(props) {

	const [dateString, setDateString] = useState("")

	useEffect(() => {
		if (props.date) {
			let dateObj = new Date(...props.date.split("-"))
			dateObj.setMonth(dateObj.getMonth() - 1)
			setDateString(dateObj.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }))
		}
	}, [props])

	return (
		<Link to={props.link} className="post-link">
			<div className="post-preview-box">
				<h1 className="post-title">{props.title}</h1>
				<p className="post-info"><i>{props.author ? props.author + " - " : ""}{dateString}</i></p>
				<p className="post-blurb">{props.blurb}</p>
			</div>
		</Link>
	)
}