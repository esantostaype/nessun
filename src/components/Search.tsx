import { useState, useEffect, useRef } from 'react'
import type { Event } from '@/interfaces'
import { Spinner } from '@/components/Spinner'
import { getEvents } from '@/api'

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<Event[]>([])
  const [loading, setLoading] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [noResults, setNoResults] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (searchTerm.length >= 2) {
        setLoading(true)
        setNoResults(false)
        try {
          const events = await getEvents()
          const filteredEvents = events.filter(event => 
            event.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          setResults(filteredEvents)
          setNoResults(filteredEvents.length === 0)
        } catch (error) {
          console.error('Error fetching events:', error)
          setResults([])
          setNoResults(true)
        }
        setLoading(false)
      } else {
        setResults([])
        setNoResults(false)
      }
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [searchTerm])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current && !inputRef.current.contains(event.target as Node) &&
        resultsRef.current && !resultsRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false)
        setSearchTerm('')
        setResults([])
        setNoResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  return (
    <>
    <button className="flex items-center gap-2 group hover:text-accent500">
      <svg viewBox="0 0 32 32" className="fill-white group-hover:fill-accent500" width="16">
        <path d="M31.4,28.6l-6.2-6.2c4.6-6.2,3.4-15-2.8-19.6C16.2-1.8,7.4-.6,2.8,5.6-1.8,11.8-.6,20.6,5.6,25.2c5,3.7,11.8,3.7,16.8,0l6.2,6.2c.8.8,2,.8,2.8,0,.8-.8.8-2,0-2.8h0ZM14.1,24c-5.5,0-10-4.5-10-10S8.6,4.1,14.1,4.1s10,4.5,10,10c0,5.5-4.5,10-10,10Z"/>
      </svg>
      <span>Cercare</span>
    </button>
    <div className="hidden fixed top-0 left-0 z-[9999] flex-1 w-full h-dvh bg-[rgba(0,0,0,0.85)] flex items-center justify-center">
      <div className="relative w-[520px] max-w-full px-4">
        <div>
          <svg viewBox="0 0 32 32" className="fill-white absolute left-10 top-[22px] z-20" width="20">
            <path d="M31.4,28.6l-6.2-6.2c4.6-6.2,3.4-15-2.8-19.6C16.2-1.8,7.4-.6,2.8,5.6-1.8,11.8-.6,20.6,5.6,25.2c5,3.7,11.8,3.7,16.8,0l6.2,6.2c.8.8,2,.8,2.8,0,.8-.8.8-2,0-2.8h0ZM14.1,24c-5.5,0-10-4.5-10-10S8.6,4.1,14.1,4.1s10,4.5,10,10c0,5.5-4.5,10-10,10Z"/>
          </svg>
          <input
            ref={inputRef}
            className="relative z-10 rounded-[999px] capitalize px-8 py-5 pl-16 outline-none w-full placeholder:text-gray400 bg-[rgba(100,100,100,0.3)] backdrop-blur-lg transition-all"
            placeholder="Buscar eventos por título"
            value={searchTerm}
            onFocus={handleFocus}
            onChange={handleInputChange}
            autoComplete="off"
          />
          {loading && searchTerm.length >= 2 && (
            <div className="absolute right-8 top-[18px]">
              <Spinner/>
            </div>
          )}
        </div>
        {isFocused && (
          <div>
            {results.length > 0 && (
              <ul ref={resultsRef} className="fadeIn mt-2 bg-shark900 rounded overflow-hidden w-full shadow-[0_10px_20px_rgba(0,0,0,1)] z-20">
                {results.map((event) => (
                  <li
                    key={event.id}
                    className="group relative border-t border-t-shark800 first:border-t-0 cursor-pointer hover:text-foreground transition-all"
                  >
                    <a href={`/spettacoli/${ event.slug }`} className="flex items-center gap-3 group-hover:bg-shark950 transition-all p-4">
                      <div>
                        <img src={ event.image } alt={ event.title } width="48" className="aspect-square object-cover rounded-full" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{event.title}</span>
                        <span className="text-sm text-gray400">
                          {formatDate(event.startDate)}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {noResults && (
              <div className="fadeIn mt-2 bg-shark900 rounded overflow-hidden w-full shadow-[0_10px_20px_rgba(0,0,0,1)] z-20 p-4">
                Nessun evento trovato
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default Search;