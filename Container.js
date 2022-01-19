import React from 'react'
import {CustomerCreate} from './CustomerCreate'
import {CustomerList} from './CustomerList'
import { v4 as uuidv4 } from 'uuid';

export const Container = () => {
    
    const [customers,SetCustomer]=React.useState([
        {Id:'9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',Username:'amiramiri',MobileNumber:'0912',Email:'a@a',Password:'12346',genderOptions:"Male"},
        {Id:'5afffb4d-3b7d-4bad-9bdd-2b0d7b9bdd2',Username:'rezarezaii',MobileNumber:'0915',Email:'b@b',Password:'12346',genderOptions:"Male"},
       
         ])

    const insert=(customer)=>
    {
        customer["Id"]=uuidv4();
        SetCustomer([...customers,customer])
    }

    return (
        <div class="container">
        <h2>Customer List</h2>
        <ul class="nav nav-tabs">
          <li class="active"><a data-toggle="tab" href="#home">خانه</a></li>
          <li><a data-toggle="tab" href="#menu1">لیست مشتریان </a></li>
          <li><a data-toggle="tab" href="#menu2">ثبت نام</a></li>

        </ul>
      
        <div class="tab-content">
          <div id="home" class="tab-pane fade in active">
            <h3>HOME</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div id="menu1" class="tab-pane fade">
           <CustomerList data={customers} />
          </div>
          <div id="menu2" class="tab-pane fade">
          <CustomerCreate insert={insert}/>
          </div>
         
        </div>
      </div>
    )
}
