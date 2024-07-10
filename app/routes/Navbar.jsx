import React, { Component } from 'react';
import { Link } from '@remix-run/react';
import styles from '../css/Navbar.css';
class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
            <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/home">混合储能计算工具</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNavDropdown" className="collapse navbar-collapse">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link active" aria-current="page">登录/注册</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
    
          <main>
            <aside className="sidebar">
              <ul className="sidebar-menu">
                <li><Link to="/secession">任务</Link></li>
                <li>
                  <a href="#">个人中心</a>
                  <ul className="sub-menu">
                    <li><Link href="#">充值</Link></li>
                    <li><Link href="#">个人信息</Link></li>
                  </ul>
                </li>
              </ul>
            </aside>
    
            <section className="content">
              {/* Your main content goes here */}
            </section>
          </main>
        </React.Fragment>
        );
    }
}
 
export default Navbar;