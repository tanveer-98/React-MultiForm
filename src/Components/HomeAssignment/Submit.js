import React from 'react'

const Submit = ({details}) => {
    const {fname,lname,email,phone}  = details;
    console.log(details);
  return (
    <div>
        <h5>FORM SUBMITTED</h5>
        <p>FirstName:  {fname}</p>
        <p>LastName:  {lname}</p>
        <p>Email:  {email}</p>
        <p>Phone: {phone}</p>
    </div>
  )
}

export default Submit