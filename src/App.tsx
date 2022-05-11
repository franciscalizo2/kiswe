import React from 'react';

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <p>Hello! Please click on the "Register" button to proceed.</p>

        <div className="flex justify-center mt-4">
          <button className="inline-block bg-primary text-white px-4 py-3 font-semibold rounded-md text-sm text-center">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
