import "./Navbar.css";
import { Fragment, useContext } from 'react';
import { Disclosure, Menu, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, MenuIcon, UserIcon, XIcon } from '@heroicons/react/outline';
import { UserContext } from '../../../contexts/UserContext';
import { NavLink } from 'react-router-dom';
import navBackChange from "../../../utilities/navBackChange";
import { CartContext } from "../../../contexts/CartContext";

const navigation = [
    { name: 'Home', href: '/home' },
    { name: 'Contact', href: '/contact' },
]
const adminActions = [
    { name: 'Manage Bookings', href: '/manage/bookings' },
    { name: 'Add Tour', href: '/addtour' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

window.addEventListener('scroll', navBackChange);

export default function Navbar() {
    const { user, logOut } = useContext(UserContext);
    const { cart } = useContext(CartContext);

    return (
        <Disclosure as="nav" className="fixed top-0 z-50 w-full">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-green-700 focus:outline-none">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block h-8 w-auto mr-2"
                                        src="/favicon.ico"
                                        alt="travel cruise"
                                    />
                                    <h1 className="font-bold text-xl text-green-800">
                                        Travel Cruise</h1>
                                </div>
                                <div className="hidden items-center sm:flex sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.href}
                                                activeClassName='text-green-600 font-bold'
                                                className={classNames('text-black hover:bg-green-100 md:px-3 pt-2 pb-1 rounded-md text-base')}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                        <Popover className="relative">
                                            {({ open }) => (
                                                <>
                                                    <Popover.Button
                                                        className={classNames(
                                                            open ? 'text-green-600 font-bold' : 'text-black',
                                                            'group rounded-md inline-flex items-center text-base font-medium hover:bg-green-100 md:px-3 pt-2 pb-1 z-50'
                                                        )}
                                                    >
                                                        <span>Admin Actions</span>
                                                        <ChevronDownIcon
                                                            className={classNames(
                                                                open ? 'text-gray-600' : 'text-gray-400',
                                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </Popover.Button>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel className="absolute z-50 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                                            <div className="rounded-lg shadow-lg overflow-hidden">
                                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                                    {adminActions.map((item) => (
                                                                        <NavLink
                                                                            key={item.name}
                                                                            to={item.href}
                                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                                        >
                                                                            <div className="ml-4">
                                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                            </div>
                                                                        </NavLink>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {!user ?
                                    <button>
                                        <NavLink
                                            to="/login"
                                            className="px-4 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-1 md:text-lg md:px-8 md:py-3"
                                        >
                                            Login
                                        </NavLink>
                                    </button> : <>
                                        {/* Profile dropdown */}
                                        <Menu as="div" className="ml-3 relative">
                                            <div>
                                                <Menu.Button className="bg-gray-600 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                    <span className="sr-only">Open user menu</span>
                                                    {user.photoURL ?
                                                        <img
                                                            className="h-8 w-8 rounded-full"
                                                            src={user.photoURL}
                                                            alt="user"
                                                        /> : <UserIcon className="block h-7 w-7 text-white p-1" aria-hidden="true" />
                                                    }
                                                    {!cart.length ||
                                                        <small className="absolute -top-1 -right-2 text-xs text-white font-bold bg-green-500 rounded-full px-1">{cart.length}</small>
                                                    }
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md z-50 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <NavLink to="/profile"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                                Profile
                                                            </NavLink>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <NavLink to="/mybookings"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                                My Bookings
                                                                {!cart.length ||
                                                                    <small className="mx-2 text-xs text-white font-bold bg-green-500 rounded-full px-1">{cart.length}</small>
                                                                }
                                                            </NavLink>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <span onClick={logOut}
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}>
                                                                Sign out
                                                            </span>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </>
                                }
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden bg-white py-3">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    className={classNames('text-black hover:bg-green-100 block px-3 py-2 rounded-md text-base'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    <NavLink to={item.href}>
                                        {item.name}
                                    </NavLink>
                                </Disclosure.Button>
                            ))}
                            <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-green-600 font-bold' : 'text-black',
                                                'group rounded-md inline-flex items-center text-base font-medium hover:bg-green-100 px-3 py-2 z-50'
                                            )}
                                        >
                                            <span>Admin Actions</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-gray-600' : 'text-gray-400',
                                                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute z-50 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                                <div className="rounded-lg shadow-lg overflow-hidden">
                                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        {adminActions.map((item) => (
                                                            <NavLink
                                                                key={item.name}
                                                                to={item.href}
                                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                            >
                                                                <Disclosure.Button className="ml-4">
                                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                </Disclosure.Button>
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
