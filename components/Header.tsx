import React from 'react';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            <div className="w-px h-6 bg-gray-300"></div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              FrameIt
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center space-x-2">
              <ShoppingCart size={18} />
              <span className="hidden sm:inline">US$25</span>
              <span className="sm:hidden">$25</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;