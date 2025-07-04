import { Link } from 'react-router-dom';

export const HeaderLanding = () => {
  return (
    <header className='bg-Synkr-100 border-b'>
      <nav className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-0 py-4 mx-4 md:mx-8 lg:mx-0">
          <Link to={'/'}>
            <img
              src="/assets/synkr-logo.png"
              alt="Synkr Logo"
              style={{ height: '60px' }} // adjust as needed
            />
          </Link>

          <ul className='flex gap-2 mx-2 lg:mx-0'>
            <li>
              <Link
                to='/auth/login'
                className='w-max px-4 py-2 text-base font-bold '
              >
                <span>Log in</span>
              </Link>
            </li>
            <li>
              <Link
                to='/auth/register'
                className='w-max rounded-lg border bg-Synkr-800 px-4 py-2 text-base text-white font-bold transition-colors hover:bg-opacity-90'
              >
                <span>Sign up</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
