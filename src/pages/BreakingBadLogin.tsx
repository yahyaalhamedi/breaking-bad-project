import LoginButton from '@/components/LoginButton'
import InputField from '@/components/InputField'
import React, { useState } from 'react'

const BreakingBadLogin: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Reset errors
    setErrors({ username: '', password: '' })

    // Validate form
    let hasErrors = false
    if (username.length < 3) {
      setErrors((prev) => ({ ...prev, username: 'Username must be at least 3 characters' }))
      hasErrors = true
    }

    if (password.length < 8) {
      setErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters' }))
      hasErrors = true
    }

    if (hasErrors) {
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      alert('Login successful! Welcome to the lab.')
      setIsLoading(false)
      setUsername('')
      setPassword('')
      setRememberMe(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen  from-gray-900 to-gray-950 text-white flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 font-impact tracking-wide mb-2 drop-shadow-md">
          BREAKING BAD
        </h1>
        <p className="text-gray-400 italic text-lg">The science of authentication</p>
      </div>

      <div className="bg-emerald-800 bg-opacity-90 backdrop-blur-sm rounded-xl p-6 md:p-8 w-full max-w-md border border-gray-700 shadow-2xl">
        <h2 className="text-2xl font-bold  text-center mb-6">Login to Your Lab</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <InputField
            id="username"
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={errors.username}
          />

          <InputField
            id="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <div className="flex justify-between items-center">
            <a
              href="#"
              className=" hover:text-green-100 text-sm transition"
            >
              Forgot Password?
            </a>
          </div>

          <LoginButton isLoading={isLoading} />
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-green-50"></div>
          </div>
          <div className="relative flex justify-center text-sm"></div>
        </div>

        <div className="text-center mt-6 text-gray-400">
          Don't have an account?{' '}
          <a
            href="#"
            className="hover:text-green-100 font-semibold transition"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  )
}

export default BreakingBadLogin
