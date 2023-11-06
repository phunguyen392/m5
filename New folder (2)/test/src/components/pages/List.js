import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const List = (props) => {
    //lv voi dl
    const [items,setItems] = useState([]);
    //chay 1lan duy nhat
    useEffect(() => {
        //goi api ,co du lieu tra ve
    let products = localStorage.getItem('products');

        if(products){
            products = JSON.parse(products)
        }else{
            products = [];
        }
        setItems(products)
        
        
    }, [items]);

    return (
        <div>
            <Link to={'/Create'} >Create</Link><br/>
            <Link to={'/Edit'} >Edit</Link>

            <h1>List</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
}

export default List;
