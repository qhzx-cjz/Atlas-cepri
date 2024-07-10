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
        <h1>混合储能优化配置计算工具</h1>
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
          <label htmlFor="password">密码<span>*</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </label>
          <Link to={'/home'}><button type="submit">登录</button></Link>
          <p className="text-muted">没有账号？<Link to="/register">去注册</Link></p>
        </form>
      </div>
    </>
  );
};

export default Register;