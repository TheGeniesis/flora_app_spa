import React, { useState, useCallback } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
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

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitCallback)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>
            Username
          </Form.Label>
          <Form.Control
            name="username"
            placeholder="Enter username"
            // isValid={!errors.username}
            ref={register({ required: true })}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter password"
            ref={register({ required: true })}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isAuthorizing}>
          Submit
        </Button>
      </Form>
    </>
  );
};
