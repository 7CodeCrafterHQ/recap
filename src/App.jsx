// import React from 'react'

// import { useState } from "react"

// const App = () => {
//   const [username , setusername] = useState("alok")

//   const changeusername  = (x)=>{
//     setusername(x)
//   }
//   console.log(username)

//   const [name ,setName]=useState({first:"alok"})
//   return (
//     <>
//     <div className='w-11 h-11 bg-red-600'></div>
//     <h1 className='w-11 bg-red-900' >alok</h1>
//     <h2>rathore</h2>
//     <h3>{username}</h3>
//     <button onClick={()=> changeusername("ankit")} >click me</button> 

//     <form action="">
//       <input className="ml-7" name="username" placeholder="username" type="text" />
//       <input className="ml-24" placeholder="email" type="email" />
//       <input  placeholder="number" type="numeber" />
//      <input type="Submit" />
//     </form>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Yahan par aap koi aur action perform kar sakte hain, jaise API call
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
