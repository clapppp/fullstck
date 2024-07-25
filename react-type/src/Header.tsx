import { Form, Link, NavLink, useSearchParams } from 'react-router-dom';
import logo from './logo.svg';

export function Header() {
    const [searchParams] = useSearchParams();

    return (
        <header className='text-center text-slate-50 h-70 bg-slate-900 p-5'>
            <Form className='relative text-right'
                action='/users'
            >
                <input
                    type='search'
                    name='search'
                    placeholder='Search'
                    defaultValue={searchParams.get('search') ?? ''}
                    className='absolute right-0 top-0 rounded py-2 px-3 text-gray-700'
                />
            </Form>
            <Link to=''>
                <img
                    src={logo}
                    alt="Logo"
                    className="inline-block h-20"
                />
            </Link>
            <Link to=''>
                <h1 className="text-2xl">React Tools</h1>
            </Link>
            <nav>
                <NavLink
                    to='users'
                    className={({ isActive }) => `text-white border-solid border-b-2 ${!isActive && 'border-transparent'} p-2`}
                >
                    User
                </NavLink>
                <NavLink
                    to='admin'
                    className={({ isActive }) => `text-white border-solid border-b-2 ${isActive ? 'border-white' : 'border-transparent'} p-2`}
                >
                    Admin
                </NavLink>
                <NavLink
                    to='contact'
                    className={({ isActive }) => `text-white border-solid border-b-2 ${isActive ? 'border-white' : 'border-transparent'} p-2`}
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}