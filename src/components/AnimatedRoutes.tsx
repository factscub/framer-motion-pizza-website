import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Loader from "./Loader";
import { IAnimatedRoutes } from "../types";

// Lazy load components
const Home = lazy(() => import("./Home"));
const Base = lazy(() => import("./Base"));
const Toppings = lazy(() => import("./Toppings"));
const Order = lazy(() => import("./Order"));

const AnimatedRoutes = ({
	pizza,
	addBase,
	addTopping,
	setShowModal,
}: IAnimatedRoutes) => {
	const location = useLocation();

	return (
		<Suspense fallback={<Loader />}>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.key}>
					<Route path="/" element={<Home />} />
					<Route
						path="/base"
						element={<Base addBase={addBase} pizza={pizza} />}
					/>
					<Route
						path="/toppings"
						element={<Toppings addTopping={addTopping} pizza={pizza} />}
					/>
					<Route
						path="/order"
						element={<Order pizza={pizza} setShowModal={setShowModal} />}
					/>
				</Routes>
			</AnimatePresence>
		</Suspense>
	);
};

export default AnimatedRoutes;
