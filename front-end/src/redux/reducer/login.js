const init = {
	isLogged: false,
};

export const loginReducer = (state = init, action) => {
	switch (action.type) {
		case "LOG_IN":
			return { ...state, isLogged: action.payload };
		default:
			return state;
	}
};
