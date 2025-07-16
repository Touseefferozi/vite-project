// src/components/AnimatedModal.jsx
import React, { useState } from "react";

const AnimatedModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-center mt-10">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:animate-wiggle"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="p-6 bg-white rounded shadow-lg animate-fadeIn">
              <h2 className="text-2xl font-bold mb-4">Hello!</h2>
              <p>This is a modal.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-3 py-1 bg-red-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedModal;
