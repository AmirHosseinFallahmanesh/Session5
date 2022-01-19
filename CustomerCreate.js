import React,{useEffect} from "react";
import {useForm} from "react-hook-form";

import  '../App.css'
// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";

// Error Component
const errorMessage = (error) => {
  return <div className="invalid-feedback">{error}</div>;
};

export   function CustomerCreate(props) {
    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
  const onSubmit = (data) =>{ props.insert(data);  reset();};



  return (
    <div className="container">
      <div className="col-sm-12">
        <h3 className={"float-right"}>ثبت نام</h3>
      </div>
      <div className="col-sm-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Username"
          
             {...register("Username",{ required: true, maxLength: 20 })}
            />
            {errors.Username &&
              errors.Username.type === "required" &&
              errorMessage(required)}
            {errors.Username &&
              errors.Username.type === "maxLength" &&
              errorMessage(maxLength)}
          </div>
          
          <div className="form-group">
            <input
              className="form-control"
              type="tel"
              placeholder="Mobile number"
            
              {...register("MobileNumber",{ maxLength: 12 })}
            />
            {errors.MobileNumber &&
              errors.MobileNumber.type === "maxLength" &&
              errorMessage(maxLength)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              
              {...register("Email", {required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.Email &&
              errors.Email.type === "required" &&
              errorMessage(required)}
          </div>
    
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Password"
             
            { ...register("Password",{ required: true })}
            />
            {errors.Password &&
              errors.Password.type === "required" &&
              errorMessage(required)}
          </div>
          <div className="form-group">
            <label className={"float-right"}>Gender</label>
            <br />
            <div className="form-check form-check-inline float-right">
              <input
                className="form-check-input"
                type="radio"
              
                value="Male"
                id="inlineRadio1"
                {...register("genderOptions")}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline float-right">
              <input
                className="form-check-input"
                type="radio"
                
                value="Female"
                id="inlineRadio2"
               {...register("genderOptions")}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline float-right">
              <input
                className="form-check-input"
                type="radio"
                name="genderOptions"
                value=" Non-binary"
               
              {...register("genderOptions")}
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Non-binary
              </label>
            </div>
          </div>
          
          
          <div className="form-group">
            <input
              type="checkbox"
              placeholder="Confirm"
           
              id="customCheck1"
              {...register("Confirm")}
            />
            <label htmlFor="customCheck1"> Confirm</label>
          </div>
          <div className="form-group">
            <input className="btn btn-primary" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}


