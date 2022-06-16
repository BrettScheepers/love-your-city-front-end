import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

export const Loader = () => {
    return (
      // <div className="h-screen w-screen left-0 top-0 fixed z-50 bg-gray-300 opacity-70">
      <div className="h-screen w-screen left-0 top-0 fixed z-50 tbg-transparent">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-10 text-gray-700 font-semibold text-lg">
          <LoadingSpinner />
        </div>
      </div>
    )
}