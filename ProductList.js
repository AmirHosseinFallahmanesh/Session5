import React, { useState } from 'react'
import { ProductEdit } from './ProductEdit';
import { ProductInfo } from './ProductInfo';


//hardcode
const initalItems = [
{ id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', name: 'Tiba', price: 150, editMode:false },
{ id: 'fffdeb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', name: 'Shahin', price: 30, editMode:false },
{ id: '9b1deb4d-3b7d-9bdd-3b7d-2b0d7b3dcb6d', name: 'quik', price: 40, editMode:false },];

const tempItem = {id: null, name: '', price: null, editMode:false};


export const ProductList = () => {

    const [items, setItems] = useState(initalItems);


 
    const removeItem = (id) => {
        if (window.confirm('are you sure?')) {
            setItems([...items.filter(q => q.id != id)]);
        }
    }

    const addItem = (item) => {
        setItems([...items, item]);
    }

    const editItem = (item) => {
        let temp = [...items];
        const index = items.findIndex(q => q.id == item.id);
        temp[index] = item;
        setItems([...temp]);
        console.log(temp)
    }

    const setEditMode = (id, mode = true) => {
        let temp = [...items];
        const index = items.findIndex(q => q.id == id);
        temp[index].editMode = mode;
        setItems([... temp]);
    }

    return (
        <div className="container">
            
            <div className="row bg-info ">
                <h1>Car List</h1>
            <div className="col-md-12 border border-dark">
                
                {items.map((item, index) => 
                    item.editMode ?  
                    <ProductEdit key={item.id} info={item} save={editItem}  cancel={setEditMode} />
                    : <ProductInfo   key={item.id} info={item} remove={removeItem} edit={setEditMode} />)}
               
            </div>
            <ProductEdit info={tempItem} save={addItem}  cancel={setEditMode} />
            </div>
        </div>
    )
}
