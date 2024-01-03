import { pagerInterface } from "../interfaces"

const Pager = ({ page, size, setPage }: pagerInterface) => {

    const handlePage = (type: "prev" | "next") => {
        if(type === "prev" && page > 1) {
            setPage(page - 1)
        } 
        
        if(type === "next" && page < size) {
            setPage(page + 1)
        }
    }

    return (
        <div className={`overflow-hidden w-40 h-16 mt-20 bg-primary-theme text-white shadow-lg`}>
            <div className={`relative w-full px-8 py-5`}>
                <div className={`flex flex-row justify-between`}>
                    <button type="button" onClick={() => handlePage("prev")} className={`flex items-center justify-between font-medium rtl:text-right`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-4 rotate-180 shrink-0" viewBox="0 0 24 24"><path stroke="currentColor" d="M18 7.328v-5.328l8 8-8 8v-5.328l-34-0.672z"/></svg>
                    </button>
                    <h5 className='text-sm font-normal'>{page}/{size}</h5>
                    <button type="button" onClick={() => handlePage("next")} className={`flex items-center justify-between font-medium rtl:text-right`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-4 shrink-0" viewBox="0 0 24 24"><path stroke="currentColor" d="M18 7.328v-5.328l8 8-8 8v-5.328l-34-0.672z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pager