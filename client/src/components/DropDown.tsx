import { dropDownInterface } from '../interfaces'

const DropDown = ({ mode, nav, items, show, type, actionField }: dropDownInterface) => {

    return (
        <div className={`relative`}>
            <div className={`z-50 absolute top-4 right-6 ${show? "block" : "hidden"} my-4 text-base list-none ${type === "plain"? mode === "light"? " w-60 divide-y divide-gray-300 bg-white text-dark-theme" : "w-60 divide-y divide-gray-700 bg-dark-theme text-white" : mode === "light"? "px-10 py-10 w-72 bg-dark-theme text-white" : "px-10 py-10 w-72 bg-white text-dark-theme"} shadow`} id="user-dropdown">
                {nav.status?
                    <div className="px-4 py-3">
                        <span className="block text-sm">{nav.userName}</span>
                        <span className="block text-sm truncate">{nav.userEmail}</span>
                    </div>
                :
                    <div className="px-4 py-3">
                        <span className={`block text-sm font-${type === "plain"? "normal" : "bold"}`}>{nav.title}</span>
                    </div>
                }
                <ul className={`py-2 ${type === "plain"? "" : "mt-6"}`} aria-labelledby="user-menu-button">
                    {items.map((item) => 
                        <li className={`group ${type === "plain"? "hover:bg-primary-theme hover:text-white" : ""}`}>
                            <a href={item.link} className={`block mx-4 py-2 text-sm ${type === "plain"? "" : "group-hover:border-b-2 group-hover:max-w-fit group-hover:border-primary-theme group-hover:text-primary-theme"}`}>{item.name}</a>
                        </li>
                    )}
                    {actionField.status?
                        actionField.element
                    : null} 
                </ul>
            </div>
        </div>
    )
}

export default DropDown