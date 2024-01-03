import { useState } from 'react'
import DropDown from './DropDown'

interface props {
    mode: any,
    handleMode?: any,
    login?: boolean,
    routes?: any,
    selected?: string,
    setSelected?: any,
    user?: any
}

const Header = ({ mode, handleMode, login, selected, routes}: props) => {
    const [userMenu, setUserMenu] = useState<boolean>(false)
    const [navMenu, setNavMenu] = useState<boolean>(false)
    const [searchMenu, setSearchMenu] = useState<boolean>(false)
    const [searchMenu2, setSearchMenu2] = useState<boolean>(false)

    const handleSiteMode = (title: string) => {

        return (
            <li className='flex flex-row px-4 py-2 justify-between'>
                <a className={`block text-sm`}>{title}</a>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" onClick={handleMode} checked={mode === "dark"? true : false} value="" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-700"></div>
                </label>
            </li> 
        )
    }

    return (
        <div>
            <nav className={`${mode === "light"? "bg-white" : "dark"} shadow-sm ${mode === "light"? "shadow-gray-200" : "shadow-gray-700"}`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div className="flex items-center lg:order-2 space-x-3 lg:space-x-6 rtl:space-x-reverse">
                        <button type="button" onClick={() => setSearchMenu(!searchMenu)} data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="lg:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <div className={`relative ${searchMenu2? "lg:block" : "hidden"}`}>
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className={`block w-full p-2 ps-10 text-sm border rounded-lg ${mode === "light"? "bg-gray-100 border-gray-300" : "bg-gray-600 border-gray-800"}`} placeholder="Search..." />
                        </div>
                        <button type="button" onClick={() => setSearchMenu2(!searchMenu2)} data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className={`hidden lg:block hover:bg-primary-theme hover:text-light-theme focus:outline-none rounded-lg text-sm p-2`}>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className={`hidden lg:block hover:bg-primary-theme hover:text-light-theme focus:outline-none rounded-lg text-sm p-2`}>
                            <svg className={`w-5 h-5`} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 256 256">
                                <defs></defs>
                                <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                    <path stroke-width="2" stroke="currentColor" d="M 74.396 66.93 h -47.12 c -3.491 0 -5.549 -2.665 -5.777 -5.299 c -0.178 -2.057 0.741 -4.326 2.792 -5.506 L 16.745 22.34 c -0.132 -0.592 0.012 -1.213 0.392 -1.687 c 0.379 -0.474 0.954 -0.75 1.561 -0.75 H 88 c 0.647 0 1.256 0.314 1.631 0.842 c 0.375 0.528 0.471 1.206 0.258 1.817 l -7.983 22.876 c -0.991 2.838 -3.446 4.921 -6.406 5.438 l -48.522 8.48 c -0.006 0.001 -0.012 0.002 -0.019 0.003 c -1.499 0.267 -1.507 1.541 -1.473 1.926 c 0.033 0.386 0.261 1.644 1.792 1.644 h 47.12 c 1.104 0 2 0.896 2 2 S 75.501 66.93 74.396 66.93 z M 21.193 23.904 l 6.966 31.186 l 46.652 -8.152 c 1.533 -0.268 2.805 -1.347 3.318 -2.817 l 7.055 -20.216 H 21.193 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                                    <path stroke-width="2" stroke="currentColor" d="M 27.846 83.111 c -3.615 0 -6.555 -2.94 -6.555 -6.555 c 0 -3.615 2.94 -6.556 6.555 -6.556 s 6.556 2.94 6.556 6.556 C 34.401 80.171 31.46 83.111 27.846 83.111 z M 27.846 74.001 c -1.409 0 -2.555 1.146 -2.555 2.556 c 0 1.408 1.146 2.555 2.555 2.555 c 1.409 0 2.556 -1.146 2.556 -2.555 C 30.401 75.147 29.255 74.001 27.846 74.001 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                                    <path stroke-width="2" stroke="currentColor" d="M 68.845 83.111 c -3.615 0 -6.556 -2.94 -6.556 -6.555 c 0 -3.615 2.94 -6.556 6.556 -6.556 s 6.556 2.94 6.556 6.556 C 75.4 80.171 72.46 83.111 68.845 83.111 z M 68.845 74.001 c -1.409 0 -2.556 1.146 -2.556 2.556 c 0 1.408 1.146 2.555 2.556 2.555 s 2.556 -1.146 2.556 -2.555 C 71.4 75.147 70.254 74.001 68.845 74.001 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                                    <path stroke-width="2" stroke="currentColor" d="M 18.695 23.904 c -0.916 0 -1.742 -0.633 -1.95 -1.564 l -1.407 -6.301 c -0.677 -3.033 -3.321 -5.151 -6.428 -5.151 H 2 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 6.909 c 4.995 0 9.244 3.404 10.333 8.279 l 1.407 6.301 c 0.241 1.078 -0.438 2.147 -1.516 2.388 C 18.986 23.889 18.839 23.904 18.695 23.904 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                                </g>
                            </svg>
                            <span className="sr-only">Cart</span>
                        </button>
                        {!login?
                            <button type="button" className="text-white hidden lg:flex bg-primary-theme hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-primary-theme dark:focus:ring-blue-800">Login</button>
                        :
                            <button type="button" onClick={() => setUserMenu(!userMenu)} className="flex text-sm bg-gray-800 rounded-full lg:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                            </button>
                        }
                        <DropDown 
                            mode={mode} 
                            show={userMenu} 
                            type={'plain'} 
                            nav={{ status: true, userEmail: "name@flowbite.com", userName: "Bonnie Green", title: "Navigation Menu" }}  
                            actionField={{ status: true, element: handleSiteMode("Theme") }}
                            items={[
                                { name: "Dashboard", link: "#" },
                                { name: "Settings", link: "#" },
                                { name: "Earnings", link: "#" },
                                { name: "Sign out", link: "#" },
                            ]}
                        />
                        <button data-collapse-toggle="navbar-user" onClick={() => setNavMenu(!navMenu)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${searchMenu? "" : "hidden"} w-full md:w-auto`} id="navbar-user">
                        <div className="relative mt-3 lg:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                        </div>
                    </div>
                    <div className={`items-center justify-between ${navMenu? "" : "hidden"} w-full lg:flex lg:w-auto lg:order-1`} id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border rounded-lg lg:space-x-16 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0">
                            {routes.map((route: any) => (
                                <li>
                                    <a href={route.link} className={`block py-2 px-3 ${selected === route.name? "bg-primary-theme border-b-2 border-primary-theme lg:bg-transparent lg:text-primary-theme" : ""} rounded lg:hover:bg-transparent transition-all delay-200 lg:hover:border-b-2 lg:hover:border-primary-theme lg:hover:text-primary-theme lg:p-0 lg:pb-2`} aria-current="page">{route.name}</a>
                                </li>
                            ))}
                            <button type="button" className="text-white justify-center lg:hidden flex bg-primary-theme hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-primary-theme dark:focus:ring-blue-800">Login</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header