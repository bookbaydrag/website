import { FormEventHandler, useState } from 'react';
import { requestMagicLink } from '../../util/api/account';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submit: FormEventHandler = (e)=>{
    e.preventDefault();
    requestMagicLink(email);
    // requestMagicLink('seannyphoenix@gmail.com');
    setSubmitted(true);
  };

  if (!submitted) {
    return (
      <form onSubmit={submit}>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
        />
        <input
          type="submit"
          id="login-submit"
          name="submit"
          value="submit"
        />
      </form>
    );
  } else {
    return (
      <div>
        <div>Email sent to {email}</div>
        <button onClick={()=>setSubmitted(false)}>Edit Email</button>
      </div>
    );
  }
}

export default Login;
