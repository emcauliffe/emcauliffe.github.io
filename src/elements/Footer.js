import React from 'react';

export default function Footer(props) {
	return (
		<div style={{ display: "flex", position: props.position, left: 0, bottom: 0, width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "#fdfdfd" }}>
			<p style={{ color: "#a8a8a8" }}>© Ethan McAuliffe {new Date().getFullYear()}</p>
		</div>
	)
}