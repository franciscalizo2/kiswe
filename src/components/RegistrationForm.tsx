import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function RegistrationForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      confirmEmail: '',
      username: '',
      password: '',
      confirmPassword: '',
      willReceiveEmails: false,
      hasAgreedToTerms: false,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Please enter a valid email address')
        .required('Email is required'),
      confirmEmail: Yup.string()
        .email('Please enter a valid email address')
        .oneOf([Yup.ref('email'), null], 'Email and Confirm Email must match')
        .required('Email is required'),
      username: Yup.string()
        .min(3, 'Username must be at least 3 characters long')
        .max(20, 'Username must be less than 20 characters long')
        .required('Username is required')
        .matches(
          /^[a-zA-Z0-9_]*$/,
          'Only a single puncuation character _ is allowed'
        )
        .test(
          'one-punc',
          'Only a single puncuation character _ is allowed',
          (value) => {
            if (value) {
              return value!.replace(/[^_]/g, '').length <= 1;
            }

            return false;
          }
        ),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is required')
        .matches(
          /^(?=.*[a-z])/,
          'Password must contain at least one lowercase character'
        )
        .matches(
          /^(?=.*[A-Z])/,
          'Password must contain at least one uppercase character'
        )
        .matches(/^(?=.*[0-9])/, 'Password must contain at least one number'),
      confirmPassword: Yup.string()
        .oneOf(
          [Yup.ref('password'), null],
          'Password and Confirm Password must match'
        )
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is required')
        .matches(
          /^(?=.*[a-z])/,
          'Password must contain at least one lowercase character'
        )
        .matches(
          /^(?=.*[A-Z])/,
          'Password must contain at least one uppercase character'
        )
        .matches(/^(?=.*[0-9])/, 'Password must contain at least one number'),
      hasAgreedToTerms: Yup.boolean().oneOf(
        [true],
        'Please agree to the all the terms and conditions'
      ),
    }),
    onSubmit: (values) => {
      // TODO: Handle Submission
      alert(JSON.stringify(values));
    },
  });

  /**
   *  A custom handleChange method used in addition to the formik handleChange method
   *
   * @param event - the event object returned from the even
   * @param fieldName the name of the input field
   */
  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const { value } = event.target;

    // Set field to touched (to show errors) after
    // user has entered 2 characters in the field
    if (value.length >= 2) {
      formik.setFieldTouched(fieldName, true);
    }

    formik.handleChange(event);
  };

  return (
    <div className="pt-6 pb-12 px-16 text-white w-full max-w-[870px]">
      <h2 className="mt-6 mb-3 text-center font-light">Create a new account</h2>

      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-5">
          <div>
            <label htmlFor="email" className="registration-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => handleChangeInput(e, 'email')}
              className={`registration-text-input ${
                formik.errors.email &&
                formik.touched.email &&
                'border border-red-500'
              }`}
            />

            {formik.errors.email && formik.touched.email && (
              <p className="registration-error-text">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmEmail" className="registration-label">
              Confirm Email
            </label>
            <input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              onChange={(e) => handleChangeInput(e, 'confirmEmail')}
              className={`registration-text-input ${
                formik.errors.confirmEmail &&
                formik.touched.confirmEmail &&
                'border border-red-500'
              }`}
            />

            {formik.errors.confirmEmail && formik.touched.confirmEmail && (
              <p className="registration-error-text">
                {formik.errors.confirmEmail}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="username" className="registration-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => handleChangeInput(e, 'username')}
              className={`registration-text-input ${
                formik.errors.username &&
                formik.touched.username &&
                'border border-red-500'
              }`}
            />

            {formik.errors.username && formik.touched.username && (
              <p className="registration-error-text">
                {formik.errors.username}
              </p>
            )}

            <p className="registration-helper-text">
              Username requires 3 to 20 characters using letters, digits and
              optionally a single punctuation _ chracter.
            </p>
          </div>

          <div>
            <label htmlFor="password" className="registration-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => handleChangeInput(e, 'password')}
              className={`registration-text-input ${
                formik.errors.password &&
                formik.touched.password &&
                'border border-red-500'
              }`}
            />

            {formik.errors.password && formik.touched.password && (
              <p className="registration-error-text">
                {formik.errors.password}
              </p>
            )}

            <p className="registration-helper-text">
              Password must be at least 8 chracters long, contain one lowercase
              letter, contain one uppercase letter and include at least one
              number (0-9)
            </p>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="registration-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={(e) => handleChangeInput(e, 'confirmPassword')}
              className={`registration-text-input ${
                formik.errors.confirmPassword &&
                formik.touched.confirmPassword &&
                'border border-red-500'
              }`}
            />

            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p className="registration-error-text">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="willReceiveEmails"
              name="willReceiveEmails"
              onChange={formik.handleChange}
            />
            <label
              htmlFor="willReceiveEmails"
              className="block text-xs font-semibold ml-2"
            >
              I want to receive emails from VenewLive and its partners about
              upcoming shows and information.
            </label>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="hasAgreedToTerms"
              name="hasAgreedToTerms"
              onChange={formik.handleChange}
            />
            <label
              htmlFor="hasAgreedToTerms"
              className="block text-xs font-semibold ml-2"
            >
              By submitting this form I agree to the{' '}
              <button
                className="underline"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Terms');
                }}
              >
                Terms of Service
              </button>{' '}
              and{' '}
              <button
                className="underline"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Terms');
                }}
              >
                Privacy Notice
              </button>
            </label>
          </div>
        </div>

        <div className="flex flex-col items-center mt-4">
          <div className="mb-3">
            <button
              type="submit"
              className="inline bg-primary-500 text-white px-3 py-2 font-semibold rounded-md text-sm text-center disabled:opacity-50"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Submit
            </button>
          </div>

          <div>
            <button
              className="inlinetext-white px-4 py-3 rounded-md text-sm text-center disabled:opacity-50"
              disabled
            >
              Go to Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
