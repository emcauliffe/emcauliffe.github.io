import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import Footer from '../elements/Footer'

import "./pages.css";

export default function Splash() {

	return (
		<div>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", position: "absolute", height: "100%", width: "100%" }}>
				<div style={{ alignItems: "center", justifyContent: "space-around", textAlign: "center", margin: "2vw" }}>
					<div>
						<h1>Ethan McAuliffe</h1>
						<p><i>Computer + Management Engineering student at McMaster University</i></p>
					</div>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<a href="https://emcauliffe.github.io/resume/ethan-mcauliffe-resume.pdf" style={{ margin: "1em" }}>Resume</a>
						<Link to="/blog" style={{ margin: "1em" }}>Blog</Link>
					</div>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<h1><a href="https://github.com/emcauliffe" style={{ margin: "0.5em", color: "black" }}><GoMarkGithub /></a></h1>
						<h1><a href="https://www.linkedin.com/in/ethan-mcauliffe/" style={{ margin: "0.5em", color: "black" }}><FaLinkedin /></a></h1>
						<h1><a href="mailto:ethan[ a t ]emcauliffe[ d o t ]ca?body=%5E%5Eplease%20update%20the%20%22to%22%20field%5E%5E" style={{ margin: "0.5em", color: "black" }}><MdEmail /></a></h1>
					</div>
				</div>
				<div className="no-mobile" style={{ maxWidth: "50vw", margin: "2vw" }}>
					<Slideshow folder="/assets/img/slideshow" numberOfImages={8} secondsPerImage={5} />
				</div>
				<Footer position="fixed" />
			</div>
		</div>
	);
}

function Slideshow(props) {

	let [image, setImage] = useState(Math.floor(Math.random() * props.numberOfImages))

	useEffect(() => {
		setTimeout(() => setImage((image + 1) % props.numberOfImages), props.secondsPerImage * 1000)
	})

	return (
		<div style={{ width: "100%", height: "100%", position: "relative" }}>
			<img src={`${props.folder}/${Math.abs(image)}.JPG`} alt="slideshow" style={{ width: "100%", boxShadow: "3px 3px grey" }} />
			{/* <div style={{ position: "absolute", width: "50%", height: "100%", top: 0, left: 0 }} onClick={() => setImage((image - 1) % props.numberOfImages)} />
			<div style={{ position: "absolute", width: "50%", height: "100%", top: 0, left: "50%" }} onClick={() => setImage((image + 1) % props.numberOfImages)} /> */}
		</div>
	)
}