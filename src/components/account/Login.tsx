import { FormEventHandler, useState } from 'react';
import {
  Fieldset,
  Form,
  Label,
  Submit,
  TextInput,
} from '../../styles/form.styles';
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
      <Form onSubmit={requestLink}>
        <Fieldset flexDirection='column'>
          <Label htmlFor='email'>Email</Label>
          <TextInput
            type="email"
            id="login-email"
            name="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            autoComplete="email"
          />
          <Submit
            type="submit"
            id="login-submit"
            name="submit"
            value="Request Email Link"
          />
        </Fieldset>
      </Form>
    );
  } else {
    return (
      <Form onSubmit={editEmail}>
        <Label>Email sent to {email}</Label>
        <Submit
          type="submit"
          id="edit-email"
          name="submit"
          value="Edit Email Address"
        />
      </Form>
    );
  }
}

export default Login;
