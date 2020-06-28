import React from 'react';
import { Link } from 'react-router-dom';
// import { GoMarkGithub } from 'react-icons/go';
// import { FaLinkedin } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';

export default function Header(props) {
	return (
		<div style={{ top: 0, left: 0, backgroundColor: "#F0F0F0", padding: "1.5em" }}>
			<h1 style={{ paddingLeft: "1em", fontSize: "1.25em" }}><Link to={props.link} style={{ color: "black", textDecoration: "none" }}>{props.heading}</Link></h1>
			{/* <div style={{ display: "flex" }}>
				<h1><a href="https://github.com/emcauliffe" style={{ margin: "0.5em", color: "black" }}><GoMarkGithub /></a></h1>
				<h1><a href="https://www.linkedin.com/in/ethan-mcauliffe/" style={{ margin: "0.5em", color: "black" }}><FaLinkedin /></a></h1>
				<h1><a href="mailto:ethan[ a t ]emcauliffe[ d o t ]ca?body=%5E%5Eplease%20update%20the%20%22to%22%20field%5E%5E" style={{ margin: "0.5em", color: "black" }}><MdEmail /></a></h1>
			</div> */}
		</div>
	)
}