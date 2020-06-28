import React, { useEffect, useState } from 'react';

import './Post.css';

export default function PostTitle(props) {

	const [textColour, setTextColour] = useState("no-feature-image")
	const [dateString, setDateString] = useState("")

	useEffect(() => {
		if (props.image) {
			setTextColour("feature-image")
		}
		if (props.date) {
			let dateObj = new Date(...props.date.split("-"))
			dateObj.setMonth(dateObj.getMonth() - 1)
			setDateString(dateObj.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }))
		}
	}, [props])

	return (
		<div className={"post-title-box " + textColour} style={{ backgroundImage: `url(${props.image})` }}>
			<h1 className="post-title">{props.title}</h1>
			<p className="info"><i>{props.author ? props.author + " - " : ""}{dateString}</i></p>
		</div>
	)
}