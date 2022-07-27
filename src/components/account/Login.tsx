import { FormEventHandler, useState } from 'react';
import { requestMagicLink } from '../../util/api/account';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const requestLink: FormEventHandler = (e)=>{
    e.preventDefault();
    // requestMagicLink(email);
    requestMagicLink('seannyphoenix@gmail.com');
    setSubmitted(true);
  };

  const editEmail: FormEventHandler = (e) => {
    e.preventDefault();
    setSubmitted(false);
  };

  if (!submitted) {
    return (
      <form onSubmit={requestLink}>
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input
            type="email"
            id="login-email"
            name="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            autoComplete="email"
          />
          <input
            type="submit"
            id="login-submit"
            name="submit"
            value="Request Email Link"
          />
        </fieldset>
      </form>
    );
  } else {
    return (
      <form onSubmit={editEmail}>
        <label>Email sent to {email}</label>
        <input
          type="submit"
          id="edit-email"
          name="submit"
          value="Edit Email Address"
        />
      </form>
    );
  }
}

export default Login;
