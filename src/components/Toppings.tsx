import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IToppings } from "../types";
import {
	buttonVariants,
	containerVariants,
	slideVariants,
} from "../utils/motionVarients";

const Toppings = ({ addTopping, pizza }: IToppings) => {
	const toppings = [
		"mushrooms",
		"peppers",
		"onions",
		"olives",
		"extra cheese",
		"tomatoes",
	];

	const showOrderButton = !!toppings.filter((topping) =>
		pizza.toppings.includes(topping),
	).length;

	return (
		<motion.div
			className="toppings container"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<h3>Step 2: Choose Toppings</h3>
			<ul>
				{toppings.map((topping) => {
					const spanClass = pizza.toppings.includes(topping) ? "active" : "";
					return (
						<motion.li
							key={topping}
							onClick={() => addTopping(topping)}
							whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<span className={spanClass}>{topping}</span>
						</motion.li>
					);
				})}
			</ul>
			{showOrderButton && (
				<motion.div className="next" variants={slideVariants}>
					<Link to="/order">
						<motion.button variants={buttonVariants} whileHover="hover">
							Order
						</motion.button>
					</Link>
				</motion.div>
			)}
		</motion.div>
	);
};

export default Toppings;
