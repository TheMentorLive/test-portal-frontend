import React from 'react';
import Button from './Button'; // Ensure this path is correct

const Dialog = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold text-blue-500">{children.title}</h2>
        </div>
        <div className="p-4">
          {children.content}
        </div>
        <div className="p-4 border-t flex justify-end">
          <Button onClick={onClose} className="bg-blue-500 text-white hover:bg-blue-600">Close</Button>
        </div>
      </div>
    </div>
  );
};

// Title and Content components for Dialog
Dialog.Title = ({ children }) => <div>{children}</div>;
Dialog.Content = ({ children }) => <div>{children}</div>;

export default Dialog;
