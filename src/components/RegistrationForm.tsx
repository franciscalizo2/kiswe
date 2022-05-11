export default function RegistrationForm() {
  return (
    <div className="pt-6 pb-12 px-16 text-white w-full max-w-[870px]">
      <h2 className="mt-6 mb-3 text-center font-light">Create a new account</h2>

      <form>
        <div className="grid grid-cols-1 gap-5">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold ml-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block bg-neutral-600 w-full rounded-lg p-2 mt-2 text-[.90rem]"
            />
          </div>

          <div>
            <label
              htmlFor="confirmEmail"
              className="block text-xs font-semibold ml-1"
            >
              Confirm Email
            </label>
            <input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              className="block bg-neutral-600 w-full rounded-lg p-2 mt-2 text-[.90rem]"
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-xs font-semibold ml-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="block bg-neutral-600 w-full rounded-lg p-2 mt-2 text-[.90rem]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold ml-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="block bg-neutral-600 w-full rounded-lg p-2 mt-2 text-[.90rem]"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-xs font-semibold ml-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="block bg-neutral-600 w-full rounded-lg p-2 mt-2 text-[.90rem]"
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
              className="inline bg-primary-500 text-white px-4 py-3 font-semibold rounded-md text-sm text-center disabled:opacity-50"
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
