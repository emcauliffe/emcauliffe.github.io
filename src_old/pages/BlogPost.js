import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { Redirect } from 'react-router-dom';
import YAML from 'yaml';
import RemarkMath from 'remark-math';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

import Header from '../elements/Header';
import Footer from '../elements/Footer';
import CodeBlock from '../elements/CodeBlock';
import PostTitle from '../elements/PostTitle';
import '../elements/Post.css';

export default function BlogPost(props) {

	const [file, setFile] = useState()
	const [text, setText] = useState()
	const [frontMatter, setFrontMatter] = useState({})

	useEffect(() => {
		try {
			const file = require("../posts/" + props.match.params.post + ".md")
			setFile(file)
		} catch (error) {
			setFile(404)
		}
	}, [props])

	useEffect(() => {

		const frontmatterRegex = /^---([\s\S]*?)---/
		const isoDateRegex = /\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/

		fetch(file)
			.then(contents => contents.text())
			.then(text => {
				const fileContent = text.split(frontmatterRegex)
				setFrontMatter({ ...YAML.parse(fileContent[1]), date: file.match(isoDateRegex)[0] })
				setText(fileContent[2])
			})
			.catch(error => console.log(error))
	}, [file])

	const target = React.createRef()

	return (
		file === 404 ? <Redirect to="/404" /> :
			<div>
				<Header heading="Ethan McAuliffe's Blog" link="/blog" />
				<PostTitle title={frontMatter.title} date={frontMatter.date} image={frontMatter["feature-img"]} />
				<ReadingProgress target={target} />
				<div className="post" ref={target}>
					<ReactMarkdown
						className="post-body"
						source={text}
						renderers={{
							code: CodeBlock,
							math: ({ value }) => <BlockMath>{value}</BlockMath>,
							inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>
						}}
						escapeHtml={false}
						plugins={[RemarkMath]} />
				</div>
				<Footer />
			</div>
	)
}

function ReadingProgress({ target }) {

	const [readingProgress, setReadingProgress] = useState(0)
	const [headerScrollHeight, setHeaderScrollHeight] = useState(0)

	function scrollListener() {
		if (!target.current) {
			return
		}

		const element = target.current
		const totalHeight = element.clientHeight - element.offsetTop
		const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

		if (windowScrollTop === 0) {
			return setReadingProgress(0)
		}

		if (windowScrollTop > totalHeight) {
			return setReadingProgress(100)
		}

		setReadingProgress((windowScrollTop / totalHeight) * 100)
		setHeaderScrollHeight(target.current.offsetTop)
	}

	useEffect(() => {
		window.addEventListener("scroll", scrollListener)
		return () => window.removeEventListener("scroll", scrollListener)
	})

	return <div className="reading-progress-bar" style={{ width: `${window.pageYOffset <= headerScrollHeight ? "0px" : readingProgress + "%"}`, height: `${window.pageYOffset <= headerScrollHeight ? "0px" : "3px"}` }} />
}