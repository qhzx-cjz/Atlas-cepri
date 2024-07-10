import React, { useState } from 'react';
import { Link } from '@remix-run/react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }

        .container {
          max-width: 400px;
          margin: 100px auto;
          background-color: #f8f9fa;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }

        label {
          display: block;
          margin-bottom: 10px;
        }

        input[type="text"],
        input[type="tel"],
        input[type="password"] {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .error {
          color: red;
          margin-top: 5px;
        }

        button {
          display: block;
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #0062cc;
        }

        p.text-muted {
          text-align: center;
          margin-top: 10px;
        }
      `}</style>
      <div className="container">
        <h1>注册</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">用户名<span>*</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </label>
          <label htmlFor="phone_number">手机号码<span>*</span>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
          </label>
          <label htmlFor="password">密码<span>*</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </label>
          <label htmlFor="confirm_password">确认密码<span>*</span>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          </label>
          <Link to={'/home'}><button type="submit">注册</button></Link>
          <p className="text-muted">已有账号？<Link to="/login">去登录</Link></p>
        </form>
      </div>
    </>
  );
};

export default Register;