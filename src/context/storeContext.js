import { createContext } from "react";

// descrobe the data/ functions 
//  that will be shared between components
const store = createContext({
    cart: [],
    user: {},

    addProdToCart: () => {},
    removeProdFromCart: () => {}
});

export default store;