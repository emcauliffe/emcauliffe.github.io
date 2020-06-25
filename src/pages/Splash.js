import React, { useState } from 'react';

export default function Splash() {

	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", position: "absolute", height: "100%", width: "100%" }}>
			<div style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
				<h1>Ethan McAuliffe</h1>
				<div style={{ display: "flex", justifyContent: "space-around" }}>
					<a href="/resume">Resume</a>
					<a href="/blog">Blog</a>
				</div>
			</div>
			<div style={{ maxWidth: "50vw" }}>
				<Slideshow folder="/assets/img/slideshow" numberOfImages={8} secondsPerImage={3} />
			</div>
		</div>
	);
}

function Slideshow(props) {

	let [image, setImage] = useState(0)

	return (
		<div style={{ width: "100%", height: "100%", position: "relative" }}>
			<img src={`${props.folder}/${Math.abs(image)}.JPG`} alt="slideshow" style={{ width: "100%", boxShadow: "3px 3px grey" }} />
			<div style={{ position: "absolute", width: "50%", height: "100%", top: 0, left: 0 }} onClick={() => setImage((image - 1) % props.numberOfImages)} />
			<div style={{ position: "absolute", width: "50%", height: "100%", top: 0, left: "50%" }} onClick={() => setImage((image + 1) % props.numberOfImages)} />
		</div>
	)
}