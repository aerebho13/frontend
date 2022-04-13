import './catalog.css';
import Product from './product';
import DataService from '../services/dataService';
import { useEffect, useState } from 'react';

const Catalog = () => {

    let [products, setProducts] = useState([]);

    const loadCatalog = async () => {
        console.log("Data retrieved");
        let service = new DataService();
        let data = await service.getCatalog();
        setProducts(data);
    }; 

    useEffect( () => {
        loadCatalog();
    }, []);

    return (<div className='catalog'>
        <h2>{products.length} Products available</h2>
        {products.map(
            (prod) => (<Product 
            key={prod._id}
            data={prod}     
            />)
            )}
    </div>);
};

export default Catalog;