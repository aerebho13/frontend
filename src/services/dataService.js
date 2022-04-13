import axios from "axios";

var catalog = [
    {
        _id: "ae0001",
        title: "Chicken Plate",
        price: 7.99,
        stock: 10,
        category: "Low-Carb",
        image: "meal1.jpeg",
        discount: 5,
    },
    {
        _id: "ae0002",
        title: "Turkey Plate",
        price: 6.99,
        stock: 10,
        category: "Low-Carb",
        image: "meal2.jpeg",
        discount: 7,
    },
    {
        _id: "ae0003",
        title: "Alferdo Pasta",
        price: 9.99,
        stock: 10,
        category: "Low-Carb",
        image: "meal3.jpeg",
        discount: 7,
    },
    {
        _id: "ae0004",
        title: "Chicken & Peas",
        price: 9.99,
        stock: 10,
        category: "Vegan",
        image: "meal4.jpeg",
        discount: 5,
    },
    {
        _id: "ae0005",
        title: "Shrimp Pasta",
        price: 11.99,
        stock: 10,
        category: "Low-Carb",
        image: "meal5.jpeg",
        discount: 6,
    },
]; 


class DataService{
    async getCatalog(){
        // retrieve the data from the server
        // var catalog = request();
        let resp = await axios.get("http://127.0.0.1:5000/api/catalog");
        return resp.data;
        // return catalog;
    }

    async getCoupons(){
        let resp = await axios.get("http://127.0.0.1:5000/api/couponCode");
        return resp.data;
    }

    saveProduct(prod){
        console.log("Sending prod to server,,,,,,NOT");
    }
    async saveCouponCode(code){
        let resp = await axios.post("http://127.0.0.1:5000/api/couponCode", code);
        return resp.data;
    }
}

export default DataService;