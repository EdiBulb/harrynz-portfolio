import React from "react";

export default function InfoCard({ image, imageAlt, imageClassName = "", title, subtitle, meta, description }) {
  return (
    <div className="group bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {image && (
        <div className="overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className={`w-full h-48 object-cover transition duration-300 group-hover:scale-105 ${imageClassName}`}
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{title}</h2>
        {subtitle && <p className="text-gray-800 dark:text-gray-100 font-medium">{subtitle}</p>}
        {meta && <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">{meta}</p>}
        {description && <p className="text-gray-600 dark:text-gray-300">{description}</p>}
      </div>
    </div>
  );
}
