import { useState } from 'react';

import Modal from 'components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <p>Hello! Please click on the "Register" button to proceed.</p>

        <div className="flex justify-center mt-4">
          <button
            className="inline-block bg-primary text-white px-4 py-3 font-semibold rounded-md text-sm text-center"
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
        />
      )}
    </div>
  );
}

export default App;
