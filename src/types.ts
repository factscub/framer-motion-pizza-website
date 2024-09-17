export interface IPizza {
	base: string;
	toppings: string[];
}

export interface IToppings {
	addTopping(topping: string): void;
	pizza: IPizza;
}

export interface IOrder {
	pizza: IPizza;
	setShowModal(value: boolean): void;
}

export interface IModal {
	showModal: boolean;
	startNewOrder(): void;
}

export interface IBase {
	addBase(base: string): void;
	pizza: IPizza;
}

export interface IAnimatedRoutes {
	pizza: IPizza;
	addBase: IBase["addBase"];
	addTopping: IToppings["addTopping"];
	setShowModal: IOrder["setShowModal"];
}
