import React, { useState, useCallback } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

import { useAuthState } from 'hooks/useAuthState/useAuthState';

import { LoginProps } from './Login.types';

/*
 * TODO:
 *   - create re-usable Input/Button components and replace inputs and/or button with them
 *     you can use React.forwardRef in order to pass reference to the proper element
 *     https://pl.reactjs.org/docs/forwarding-refs.html
 * */

export const Login = ({ onSubmit }: LoginProps) => {
  const { register, handleSubmit, errors } = useForm();
  const { isAuthorizing } = useAuthState();

  const [error, setError] = useState(false);

  const handleSubmitCallback = useCallback(
    async (body: FieldValues) => {
      const valid = await onSubmit(body);
      if (!valid) {
        setError(!valid);
      }
    },
    [onSubmit],
  );

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  return (
    <Formik validationSchema={schema} onSubmit={handleSubmitCallback} initialValues={{ username: '', password: '' }}>
      {({ touched, errors }) => (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Enter username"
              isValid={touched.username && !errors.username}
              ref={register({ required: true })}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
