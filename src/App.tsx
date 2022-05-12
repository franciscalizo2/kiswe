import { useState } from 'react';

import Modal from 'components/Modal';
import RegistrationForm from 'components/RegistrationForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedFormValues, setSubmittedFormValues] = useState({});

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <p className="text-center">
          Hello! Please click on the "Register" button to proceed.
        </p>

        <div className="flex justify-center mt-4">
          <button
            className="inline-block bg-primary-500 text-white px-3 py-2 font-semibold rounded-md text-sm text-center"
            onClick={() => setIsModalOpen(true)}
          >
            Register
          </button>
        </div>

        {/* Show submmited form values after submission */}
        {Object.keys(submittedFormValues).length ? (
          <div className="mt-10">
            <p className="text-center mb-10">
              Thank you for your submission! Please see the your submitted
              values below:
            </p>
            <pre className="bg-neutral-800 rounded-lg p-6 text-white">
              {JSON.stringify(submittedFormValues, null, 2)}
            </pre>
          </div>
        ) : null}
      </div>

      {isModalOpen && (
        <Modal
          noCloseOutsideClick
          handleCloseModal={() => setIsModalOpen(false)}
          classes="bg-neutral-800"
        >
          <RegistrationForm handleFormSubmission={setSubmittedFormValues} />
        </Modal>
      )}
    </div>
  );
}

export default App;
