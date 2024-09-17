// Common slide variant used for both "Next" and "Order" buttons
export const slideVariants = {
	hidden: {
		x: "-100vw",
	},
	visible: {
		x: 0,
		transition: { type: "spring", stiffness: 120 },
	},
};

// Button hover effect variant
export const buttonVariants = {
	hover: {
		scale: 1.1,
		textShadow: "0px 0px 8px rgb(255,255,255)",
		boxShadow: "0px 0px 8px rgb(255,255,255)",
		transition: {
			duration: 0.3,
			yoyo: Infinity,
		},
	},
};

// Container animation variant
export const containerVariants = {
	hidden: {
		opacity: 0,
		x: "100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: { type: "spring", delay: 0.5 },
	},
	exit: {
		x: "-100vh",
		transition: { ease: "easeInOut" },
	},
};
