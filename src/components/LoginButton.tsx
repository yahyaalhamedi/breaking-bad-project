import React from 'react'
import { Button } from './ui/button'

interface ButtonProps {
  isLoading: boolean
}

const LoginButton: React.FC<ButtonProps> = ({ isLoading }) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className="w-full bg-amber-50 hover:bg-emerald-100 hover:text-emerald-800 text-gray-900 font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Cooking...
        </span>
      ) : (
        'Cook'
      )}
    </Button>
  )
}

export default LoginButton
