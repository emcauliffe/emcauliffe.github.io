import React, { useEffect } from 'react';

import Header from '../elements/Header';
import Footer from '../elements/Footer';
import PostsList from '../elements/PostsList';

export default function Blog() {

	useEffect(() => {
		document.title = `Blog`;
	})

	return (
		<div>
			<Header heading="Ethan McAuliffe's Blog" link="/blog" />
			<PostsList />
			<Footer />
		</div>
	)
}