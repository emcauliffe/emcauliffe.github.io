import React, { useState, useEffect } from 'react';
import YAML from "yaml";

import PostPreview from '../elements/PostPreview';

export default function PostsList(props) {

	function getFiles() {
		const importAll = r => r.keys().map(r);
		const markdownFiles = importAll(require.context('../posts', false, /\.md$/)).sort().reverse() //reverse chronological order thanks to the iso date in the filename
		return markdownFiles
	}

	const [files, setFiles] = useState(getFiles())
	const [frontmatter, setFrontmatter] = useState([])
	const [previews, setPreviews] = useState([])

	useEffect(() => {
		const frontmatterRegex = /^---([\s\S]*?)---/
		const isoDateRegex = /\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/
		const fileNameRegex = /([^/.]*)\.{1}[\s\S]*?(\.md){1}$/
		files.map(file => fetch(file)
			.then(result => result.text())
			.then(text => setFrontmatter(frontmatter =>
				[...frontmatter, { //append to existing to keep reverse chronological order
					...YAML.parse(text.match(frontmatterRegex)[1]), //parse the yaml frontmatter data
					date: file.match(isoDateRegex)[0], //parse the post date from the file name
					fileName: file.match(fileNameRegex)[1]
				}]
			))
		)
	}, [files])

	useEffect(() => {
		frontmatter.map((postDetails, index) => {
			if (postDetails.hidden !== true) { //skip hidden posts
				setPreviews([...previews, <PostPreview key={index} title={postDetails.title} date={postDetails.date} link={"/blog/" + postDetails.fileName} blurb={postDetails.blurb} author={postDetails.author} />])
			}
		})
	}, [frontmatter])

	return (
		<div>
			{previews}
		</div>
	)
}