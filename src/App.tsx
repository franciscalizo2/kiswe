import { useState } from 'react';

import Modal from 'components/Modal';
import RegistrationForm from 'components/RegistrationForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <p className="text-center">
          Hello! Please click on the "Register" button to proceed.
        </p>

        <div className="flex justify-center mt-4">
          <button
            className="inline-block bg-primary-500 text-white px-4 py-3 font-semibold rounded-md text-sm text-center"
            onClick={() => setIsModalOpen(true)}
          >
            Register
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          noCloseOutsideClick
          handleCloseModal={() => setIsModalOpen(false)}
          classes="bg-neutral-800"
        >
          <RegistrationForm />
        </Modal>
      )}
    </div>
  );
}

export default App;
