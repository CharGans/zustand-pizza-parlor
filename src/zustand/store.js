import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set, get) => ({
    //use set({}) on these to change their data
    order: [],
    pizza: [],

    fetchPizza: async () => {

        try {
            const response = await axios.get(
                "/api/pizza"
            );
            //variable to hold response
            const pizza = response.data;
            console.log("got pizza: ", pizza);
            set({ pizza: pizza});
        } catch (error) {
            console.log("Error in fetchPizza")
        }
    }, //end fetchPizza

    fetchOrder: async () => {

        try {
            const response = await axios.get(
                "/api/order"
            );
            //variable to hold response
            const order = response.data;
            console.log("got order: ", order);
            set({ order: order});
        } catch (error) {
            console.log("Error in fetchOrder")
        }
    }, //end fetchPizza

    addOrder: async (newOrder) => {
        try {
            console.log('new pizza order is: ', newOrder);
            const response = await axios.post(
                "/api/order", newOrder
            );
        } catch (error) {
            console.log("Error in addOrder: ", error)
        }
    }, //end addOrder



})) //end useStore

export default useStore;