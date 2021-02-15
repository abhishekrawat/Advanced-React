import Document, { Html, Head, NextScript, Main } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html
				lang="en"
				className="antialiased bg-white js-focus-visible relative overflow-hidden"
			>
				<Head></Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
