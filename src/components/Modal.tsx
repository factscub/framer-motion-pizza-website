import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IModal } from "../types";

const backdrop = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};

const modal = {
	hidden: { y: "-100vh", opacity: 0 },
	visible: {
		y: "200px",
		opacity: 1,
		transition: { delay: 0.5 },
	},
};

const Modal = ({ showModal, startNewOrder }: IModal) => {
	return (
		<AnimatePresence>
			{showModal && (
				<motion.div
					className="backdrop"
					variants={backdrop}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<motion.div className="modal" variants={modal}>
						<p>Want to make another Pizza?</p>
						<Link to="/">
							<button onClick={startNewOrder}>Start Again</button>
						</Link>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
