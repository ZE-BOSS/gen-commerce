import { filterInterface } from '../interfaces'
import MultiRangeSlider from './MultiRangeSlider'

const FilterSidebar = ({ mode, categories, handleAction, handleChecker, handleSlider }: filterInterface) => {

    return (
        <>
            <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="cta-button-sidebar" className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className={`h-full px-3 py-4 overflow-y-auto ${mode==="light"? "bg-white" : "bg-dark-theme"}`}>
                    {categories.map((category, index) =>
                        <div className={`border-b ${mode==="light"? "border-gray-200" : "border-gray-800"}`} key={index}>
                            <h2>
                                <button type="button" onClick={() => handleAction(category.name)} className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 gap-3">
                                    <span>{category.name}</span>
                                    <svg data-accordion-icon className={`w-3 h-3 ${category.opened? "" : "rotate-180"} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div className={`relative pt-2 pb-14 px-5 ${category.opened? "" : "hidden"}`}>
                                {category.subCategory.map((subcat, inx) =>
                                    <div className={'py-2'}>
                                        {subcat.type === "slider"?
                                            <MultiRangeSlider
                                                min={subcat.range? subcat.range.start.value : 0}
                                                max={subcat.range? subcat.range.end.value : 0}
                                                mode={mode}
                                                labelMin={subcat.range? subcat.range.start.label : ""}
                                                labelMax={subcat.range? subcat.range.end.label : ""}
                                                custom={{
                                                    activeLine: {light: "bg-primary-theme", dark: "bg-primary-theme"},
                                                    inActiveLine: {light: "bg-gray-200", dark: "bg-gray-800"},
                                                    text: {light: "font-medium text-gray-700", dark: "font-medium text-gray-300"}
                                                }}
                                                onChange={({ min, max } : { min: number, max: number }) => handleSlider(index, inx, min, max)}
                                            />
                                        :
                                            <div className="flex items-center me-4 justify-between px-5">
                                                <input id="orange-checkbox" type="checkbox" onClick={() => handleChecker(index, inx)} checked={subcat.checked} className={`w-4 h-4 mx-2 accent-primary-theme text-primary-theme ${mode==="light"? "bg-gray-200" : "bg-gray-800"}`}/>
                                                <label htmlFor="orange-checkbox" className={`ms-2 text-sm font-medium ${subcat.checked? "text-primary-theme" : mode==="light"? "text-gray-800" : "text-gray-300"}`}>{subcat.name}</label>
                                                <p className={`ms-2 text-sm font-medium ${subcat.checked? "text-primary-theme" : mode==="light"? "text-gray-800" : "text-gray-300"}`}>{subcat.quantity}</p>
                                            </div>
                                        }
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </aside>
        </>
    )
}

export default FilterSidebar