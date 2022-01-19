import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const ProductEdit = ({ info, cancel, save }) => {
    
    const [name, setName] = React.useState(info.name);
    const [price, setPrice] = React.useState(info.price);

    const saveItem = () => {
        let item = {};
        console.log(info.editMode)
        if(info.editMode)
        {
         
             item = {id:info.id, name, price, editMode:false};
        } else {
           var newId=uuidv4();
          
             item = {id:newId, name, price, editMode:false};
             clearInputs();
            
        }
      

        save(item);
      
    }
    const clearInputs=()=>{
        setPrice('');
        setName('');
    }
    return (
        <div className={"col-xl-12 bg-warning"} >
            <div  style={{height:"75px"}} >
               
               
                 <label><h4>Name:</h4></label><input name="name" 
                    onChange={(e) => setName(e.target.value)} value={name}/>
                  <label><h4>Price:</h4></label> <input name="price" 
                    onChange={(e) => setPrice(parseInt(e.target.value))} value={price}/>
                       <button className="btn btn-secondary float-right" onClick={() => cancel(info.id, false)}>Cancel</button>
                    <button className="btn btn-success float-right mr-2" onClick={saveItem}>Save</button>
                 
              
            </div>
        </div>
    )
}
