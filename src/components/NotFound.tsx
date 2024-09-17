import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="not-found"
		>
			<h2>Oops!</h2>
			<p>We can't seem to find the page you're looking for.</p>
			<Link to="/">
				<motion.button
					whileHover={{ scale: 1.1 }}
					transition={{ type: "spring", stiffness: 300 }}
				>
					Go to Home
				</motion.button>
			</Link>
		</motion.div>
	);
};

export default NotFound;
