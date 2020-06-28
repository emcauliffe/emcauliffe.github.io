import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeBlock(props) {

	return (
		<SyntaxHighlighter language={props.language} style={github} showLineNumbers={true} customStyle={{ fontSize: 13 }}>
			{props.value}
		</SyntaxHighlighter>
	)
}
