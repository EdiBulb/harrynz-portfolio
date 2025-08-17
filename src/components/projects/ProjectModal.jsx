import React from "react";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 text-black dark:text-white w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto p-6 rounded-xl shadow-lg scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-sm whitespace-pre-line">
          {project.description}
        </p>

        <button
          className="mt-6 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
