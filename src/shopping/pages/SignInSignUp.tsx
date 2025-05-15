import React, { useState } from 'react';
import './SignInSignUp.css'
type FormErrors = {
  email?: string;
  password?: string;
};

const SignInSignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email format.';
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{paddingRight:'30px'}}>Sign In / Sign Up</h2>

      <div className='esection'>
        <label  htmlFor="email">Email:</label>
        <input className='email'
          id="email"
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      <div className='psection'>
        <label  htmlFor="password">Password:</label>
        <input className='pwd'
          id="password"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div> 
      <div className='section'>
        <input 
          id="rememberMe"
          type="checkbox"
          checked={rememberMe}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
        />
        <label className='remember'  htmlFor="rememberMe">Remember me</label>
      </div>
        <h4>Forgot Password?</h4>
      

      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInSignUp;
