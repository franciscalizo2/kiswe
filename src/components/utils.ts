import * as Yup from 'yup';

/**
 * Validation Schema used within the RegistrationForm file
 */
export const registrationValidationSchema = Yup.object().shape({
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
});
