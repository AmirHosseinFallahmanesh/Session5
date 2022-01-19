import React from 'react'

export const ProductInfo = ({ info, remove, edit }) => {
    return (
        <div >
            <div className="border">
          
                <div className={"ml-2 mt-2 mb-2 pb-2"} >
                    <label className={"pr-3"}><h5>Name: {info.name}</h5></label>
                    <label className={"pr-3"}><h4>Price :  {info.price}</h4></label>
                    <button className="float-right btn btn-warning  ml-2 mr-2" onClick={() => edit(info.id)}>Edit</button>
                    <button className="float-right btn btn-danger " onClick={() => remove(info.id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}
