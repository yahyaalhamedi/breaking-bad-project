import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'

interface InputFieldProps {
  id: string
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { id, label, type, value, onChange, error } = props

  return (
    <div>
      <Label
        htmlFor={id}
        className="block text-gray-300 mb-4 font-medium text-start"
      >
        {label}
      </Label>
      <div className="relative">
        <Input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={`Enter your ${label.toLowerCase()}`}
          className="w-full px-4 py-3 bg-amber-50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
          required
        />
      </div>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  )
}

export default InputField
