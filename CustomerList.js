import React from 'react'

export const CustomerList = (props) => {
    return (
        <div className={"container"}>
             <table className={"table table-bordered "}>
    <thead>
      <tr>
        <th>نام کاربری</th>
        <th>شماره موبایل</th>
        <th>ادرس ایمیل</th>
        <th>رمز کاربری</th>
        <th>جنسیت</th>
      </tr>
    </thead>
    <tbody  >
    {props.data.map(item =>
                    <tr  key={item.Id}>
                        <td>{item.Username}</td>
                        <td>{item.MobileNumber}</td>
                        <td>{item.Email}</td>
                        <td>{item.Password}</td>
                        <td>{item.genderOptions}</td>
   
                    </tr>)}

    </tbody>
  </table>
        </div>
    )
}
