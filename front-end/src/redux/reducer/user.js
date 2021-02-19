const init = {
	userLogged:"",
};

export const userReducer = (state = init, action) => {
	switch (action.type) {
		case "USER_IN":
			return { ...state, userLogged: action.payload };
		default:
			return state;
	}
};
