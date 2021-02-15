import PropTypes from "prop-types";
import Header from "../components/Header";
import Hero from "../components/Hero";
export default function Page({ children, cool }) {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
}

Page.propTypes = {
	cool: PropTypes.string,
	children: PropTypes.any,
};
