import React, { useState } from 'react'

// import { registerUser } from '../../api/register'

const RegisterForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    loading: false,
    message: '',
  })

  const { name, email, password, error, loading, message } = values

  const handleSubmit = e => {
    e.preventDefault()
    // setValues({ ...values, loading: true, error: false })
    // const user = { name, email, password }
    // registerUser(user)
    //   .then(data => {
    //     console.log('dadaddaadad', data)
    //     if (data.error) {
    //       setValues({ ...values, error: data.error, loading: false })
    //     } else {
    //       setValues({
    //         ...values,
    //         name: '',
    //         email: '',
    //         password: '',
    //         error: '',
    //         loading: false,
    //         message: data.message,
    //       })
    //     }
    //   })
    //   .catch(() => {})
  }

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
          ></input>
        </div>
        <div className="button-container">
          <button>Register</button>
        </div>
        <div className="response">{message}</div>
      </form>
    </div>
  )
}

export default RegisterForm
