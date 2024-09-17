import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { usePizza } from "./hooks/usePizza";
import Loader from "./components/Loader";

// Lazy load components
const Header = lazy(() => import("./components/Header"));
const Modal = lazy(() => import("./components/Modal"));
const AnimatedRoutes = lazy(() => import("./components/AnimatedRoutes"));

function App() {
	const { pizza, showModal, setShowModal, addBase, addTopping, startNewOrder } =
		usePizza();

	return (
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<Header />
				<Modal showModal={showModal} startNewOrder={startNewOrder} />
				<AnimatedRoutes
					pizza={pizza}
					addBase={addBase}
					addTopping={addTopping}
					setShowModal={setShowModal}
				/>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
