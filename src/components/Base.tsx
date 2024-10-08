import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IBase } from "../types";
import {
	buttonVariants,
	containerVariants,
	slideVariants,
} from "../utils/motionVarients";

const Base = ({ addBase, pizza }: IBase) => {
	const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

	return (
		<motion.div
			className="base container"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<h3>Step 1: Choose Your Base</h3>
			<ul>
				{bases.map((base) => {
					const spanClass = pizza.base === base ? "active" : "";
					return (
						<motion.li
							key={base}
							onClick={() => addBase(base)}
							whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<span className={spanClass}>{base}</span>
						</motion.li>
					);
				})}
			</ul>

			{pizza.base && (
				<motion.div className="next" variants={slideVariants}>
					<Link to="/toppings">
						<motion.button variants={buttonVariants} whileHover="hover">
							Next
						</motion.button>
					</Link>
				</motion.div>
			)}
		</motion.div>
	);
};

export default Base;
