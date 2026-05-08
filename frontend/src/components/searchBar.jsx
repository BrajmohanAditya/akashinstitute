import React, { useState } from 'react'
import { Search, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom' // Agar aap react-router use kar rahe hain

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchInput.trim()) {
      console.log("Searching for:", searchInput)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className='w-full max-w-xl flex items-center gap-2 justify-center'
    >
      <div className='relative flex-1'>
        <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500' />

        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder='Search courses...'
          className='w-full pl-10 pr-10 py-2.5 bg-zinc-100 border border-transparent rounded-xl
          focus:bg-white focus:border-zinc-300 focus:ring-2 focus:ring-zinc-100 focus:outline-none
          transition-all text-sm placeholder-zinc-500 text-zinc-800'
        />

        {searchInput && (
          <button
            type='button'
            onClick={() => setSearchInput('')}
            className='absolute right-3 top-1/2 -translate-y-1/2 p-1 
            hover:bg-zinc-200 rounded-lg transition-colors'
          >
            <X className='w-4 h-4 text-zinc-500 hover:text-zinc-700' />
          </button>
        )}
      </div>

      {/* Agar Navbar me ye button thoda bada lage, toh aap iska size chota kar sakte hain */}
      <button
        type='submit'
        className='px-5 py-2.5 bg-zinc-800 hover:bg-zinc-900 text-white 
        font-medium rounded-xl transition-colors text-sm'
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
