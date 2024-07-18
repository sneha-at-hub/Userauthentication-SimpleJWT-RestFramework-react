import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import img from './img.png'

function Loginpage() {
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    email.length > 0 && loginUser(email, password);

    console.log(email);
    console.log(password);
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#fffff" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card shadow-lg rounded">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={img}
                      alt="login form"
                      className="img-fluid rounded-left"
                      style={{ marginTop: '80px', marginLeft: '20px' }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <h2 className="fw-bold">Welcome Back!</h2>
                        </div>
                        <h5 className="fw-normal mb-4">Sign into your account</h5>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            name='email'
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            name='password'
                            placeholder="Enter your password"
                          />
                        </div>
                        <div className="pt-1 mb-4">
                        <button
                          className="btn btn-lg btn-block"
                          style={{ backgroundColor: '#3FA2F6', color: 'white' }}
                          type="submit"
                        >
                          Login
                        </button> 
                        </div>
                        <a href="#!" className="small text-muted mb-2">Forgot password?</a>
                        <p className="mb-4">Don't have an account? <Link to="/register">Register Now</Link></p>
                        <div className="mb-4">
                          <a href="#!" className="small text-muted me-4">Terms of use</a>
                          <a href="#!" className="small text-muted">Privacy policy</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-light text-center text-lg-start mt-5">
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2019 - till date Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">Sneha.com</a>
        </div>
      </footer>
    </div>
  );
}

export default Loginpage;
