import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(email, username, password, password2);
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: '#ffff' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100"  style={{marginTop:'20px'}}>
            <div className="col col-xl-6">
              <div className="card shadow-lg" style={{ borderRadius: '1rem', backgroundColor: '#FFF' }}>
                <div className="card-body p-4 p-lg-5">
                  <form onSubmit={handleSubmit}>
                    <div className="text-center mb-4">
                      <h2 className="fw-bold text-uppercase">Welcome to <span className="text-danger">Django React</span></h2>
                      <p className="text-muted">Sign Up Page</p>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example17"
                        className="form-control form-control-lg"
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form2Example18"
                        className="form-control form-control-lg"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example19"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example20"
                        className="form-control form-control-lg"
                        placeholder="Confirm Password"
                        onChange={(e) => setPassword2(e.target.value)}
                      />
                    </div>
                    <div className="pt-1 mb-4">
                      <button className="btn btn-lg btn-block" type="submit"
                      style={{ backgroundColor: '#3FA2F6', color: 'white' }}
                      >
                        Register
                      </button>
                    </div>
                    <div className="text-center">
                      <p className="text-muted mb-2">
                        Already have an account?{' '}
                        <Link to="/login" style={{ color: '#393f81' }}>
                          Login Now
                        </Link>
                      </p>
                      <p className="text-muted">
                        <a href="#!" className="text-muted me-2">
                          Terms of Use
                        </a>
                        <a href="#!" className="text-muted">
                          Privacy Policy
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2022 - {new Date().getFullYear()} Sneha.com. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default RegisterPage;

