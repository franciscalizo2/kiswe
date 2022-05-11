export default function RegistrationForm() {
  return (
    <div className="pt-6 pb-12 px-16 text-white w-full max-w-[870px]">
      <h2 className="mt-6 mb-3 text-center font-light">Create a new account</h2>

      <form>
        <div className="grid grid-cols-1 gap-5">
          <div>
            <label htmlFor="email" className="registration-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="registration-text-input"
            />
          </div>

          <div>
            <label htmlFor="confirmEmail" className="registration-label">
              Confirm Email
            </label>
            <input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              className="registration-text-input"
            />
          </div>

          <div>
            <label htmlFor="username" className="registration-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="registration-text-input"
            />
          </div>

          <div>
            <label htmlFor="password" className="registration-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="registration-text-input"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="registration-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="registration-text-input"
            />
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="willReceiveEmails"
              name="willReceiveEmails"
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
              disabled
              className="inline bg-primary-500 text-white px-3 py-2 font-semibold rounded-md text-sm text-center disabled:opacity-50"
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
