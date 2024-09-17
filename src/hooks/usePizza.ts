import { useState } from "react";
import { IPizza } from "../types";

export const usePizza = () => {
	const [pizza, setPizza] = useState<IPizza>({ base: "", toppings: [] });
	const [showModal, setShowModal] = useState(false);

	const addBase = (base: string) => {
		setPizza({ ...pizza, base });
	};

	const addTopping = (topping: string) => {
		setPizza((prev) => {
			const newToppings = prev.toppings.includes(topping)
				? prev.toppings.filter((t) => t !== topping)
				: [...prev.toppings, topping];
			return { ...prev, toppings: newToppings };
		});
	};

	const startNewOrder = () => {
		setPizza({ base: "", toppings: [] });
		setShowModal(false);
	};

	return {
		pizza,
		showModal,
		setShowModal,
		addBase,
		addTopping,
		startNewOrder,
	};
};
