import React from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';

function registeruser() {

 

 
  return (
     <div className="containerdoz">
      <form action="/" className="login__form">
        <h1>Register</h1>
        <div className="input__row">
          <span><i className="ri-user-3-line"></i></span>
          <div className="input__group">
            <input type="text" placeholder=" " />
            <label for="name">Name</label>
          </div>
        </div>
        <div className="input__row">
          <span><i className="ri-lock-2-line"></i></span>
          <div className="input__group">
            <input id="password" type="password" placeholder=" " />
            <label for="name">Password</label>
          </div>
          <span id="password-eye"><i className="ri-eye-off-line"></i></span>
        </div>
        <div className="action__btns">
          <div className="remember__me">
            <input type="checkbox" id="check" />
            <label for="check">Remember me</label>
          </div>
          <a href="#" className="forgot__password">Forgot Password?</a>
        </div>
        <button className="login__btn"  type="button">registeruser</button>
        <div className="register">
          Don't have an account? <Link to="/login"> login </Link>
        </div>
      </form>
    </div>
  );
}

export default registeruser;