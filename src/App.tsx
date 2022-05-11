import React, { useState } from 'react';

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

      {isModalOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default App;
