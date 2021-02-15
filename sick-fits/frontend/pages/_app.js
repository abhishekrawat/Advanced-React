import Page from "../components/Page";
import Router from "next/router";
import "tailwindcss/tailwind.css";
import "../components/styles/nprogress.css";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
	return (
		<Page>
			<Component {...pageProps} />
		</Page>
	);
}
