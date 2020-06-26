// eslint-disable-next-line
import React, { useState, useEffect } from 'react';

export default function Blog() {

	useEffect(() => {
		document.title = `Blog`;
	})

	return (
		<h1>Blog</h1>
	)
}