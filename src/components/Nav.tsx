import { menu } from '@/data'
import { useEffect, useState } from 'react'

interface Props {
  pathName?: string
}

export const Nav = ({ pathName }: Props) => {
  const [openNav, setOpenNav] = useState( false )
  const handleOpenNav = () => {
    setOpenNav(true)
  }

  const handleCloseNav = () => {
    setOpenNav(false)
  }
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenNav(false)
      }
    }
    document.addEventListener('keydown', handleEscKey)
    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [])
  return (
    <>
    <button className="flex items-center gap-2 group hover:text-accent500 size-10 rounded-full justify-center" onClick={ handleOpenNav }>
      <svg viewBox="0 0 32 32" className="fill-white group-hover:fill-accent500" width="16">
        <rect width="32" height="4"/>
        <rect y="14" width="32" height="4"/>
        <rect y="28" width="32" height="4"/>
      </svg>
    </button>
    <div className={`${ openNav ? "visible opacity-100" : "invisible opacity-0" } transition-all duration-500 ease-in-out flex fixed top-0 left-0 z-[999] w-full h-dvh items-center justify-center p-6 md:p-8`}>
      <button className="flex items-center justify-center transition-all rounded-full size-10 absolute top-6 right-6 bg-shark800 hover:bg-accent500 z-30" onClick={ handleCloseNav }>
        <svg viewBox="0 0 32 32" width="12"  className="fill-white">
          <path d="M31.2,27.4l-11.4-11.4,11.4-11.4c1.1-1.1,1.1-2.8,0-3.8s-2.8-1.1-3.8,0l-11.4,11.4L4.6.8C3.5-.3,1.8-.3.8.8S-.3,3.5.8,4.6l11.4,11.4L.8,27.4c-1.1,1.1-1.1,2.8,0,3.8s2.8,1.1,3.8,0l11.4-11.4,11.4,11.4c1.1,1.1,2.8,1.1,3.8,0s1.1-2.8,0-3.8Z"/>
        </svg>
      </button>
      <div className="relative z-20 w-[520px] max-w-full">
        <nav>
          <ul className="flex flex-col text-lg uppercase">
            { menu.map(( item ) => (
              <li>
                <a
                    href={item.path}
                    className={`block py-2 ${
                      item.path === '/'
                        ? pathName === '/' && 'border-b-white border-b'
                        : pathName?.startsWith(item.path)
                        ? 'border-b-white border-b'
                        : 'border-b-transparent border-b'
                    }`}
                  >
                  { item.label }
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div onClick={ handleCloseNav } className="fadeIn flex fixed top-0 left-0 z-10 flex-1 w-full h-dvh bg-[rgba(0,0,0,0.85)] items-center justify-center"></div>
    </div>
    </>
  )
}