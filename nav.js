import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-2xl font-bold">Notes App</h1>
      <div className="space-x-2">
        <button className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700">
          New Note
        </button>
        <button className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700">
          Settings
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
