import { useState } from 'react'
import { PriceInterface } from '../interfaces'

const PriceDetails = ({ mode, header, price, fee, quantity, total, productDetails, buttonText, checker, handleSubmit }: PriceInterface) => {
    const [showDetails, setShowDetails] = useState<boolean>(false)
    const [checkerStatus, setCheckerStatus] = useState<boolean>(false)

    return (
        <div className={`mx-10 my-10 pt-2`}>
            <div className={`relative max-w-md w-96 ${mode === "light"? "bg-white shadow-gray-300" : 'bg-zinc-950 shadow-gray-700'}`}>
                <a>
                    <h5 className="text-lg font-bold items-center mx-10 py-6 tracking-tight">{header}</h5>
                </a>
                <div className={`p-5 mx-5 mb-4 ${mode === "light"? "bg-light-theme" : "bg-dark-theme"}`}>
                    <a className={'flex flex-row justify-between'}>
                        <h5 className={`tracking-tight font-bold text-sm`}>{price.title}</h5>
                        <h5 className={`tracking-tight font-bold text-sm`}>{price.currency} {price.price}</h5>
                    </a>
                    <a className={'flex flex-row justify-between'}>
                        <h5 className={`tracking-tight text-sm`}>{fee.title}</h5>
                        <h5 className={`tracking-tight text-sm`}>{fee.percent}%</h5>
                    </a>
                    <a className={'flex flex-row justify-between'}>
                        <h5 className={`tracking-tight text-sm`}>{quantity.title}</h5>
                        <h5 className={`tracking-tight text-sm`}>{quantity.quantity} {quantity.name}</h5>
                    </a>
                    <a onClick={() => setShowDetails(!showDetails)} className={`flex flex-row cursor-pointer text-center text-sm text-gray-500 justify-center items-center pt-5 px-3 py-1 font-light hover:opacity-70 focus:outline-none`}>
                        <p className='pr-2'>Product Details {" "}</p>
                        <svg data-accordion-icon className={`w-3 h-3 ${showDetails? "" : "rotate-180"} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </a>
                    <p className={`justify-center text-sm text-gray-500 font-light border-t pt-2 border-gray-500 ${showDetails? "" : "hidden"}`}>
                        {productDetails}
                    </p>
                </div>
                <div className={`p-5 mx-5 my-4 ${mode === "light"? "bg-light-theme" : "bg-dark-theme"} text-center`}>
                    <a className={''}>
                        <h5 className={`tracking-tight text-2xl font-bold`}>{total.currency} {total.price}</h5>
                    </a>
                    <p className="mb-3 font-light text-sm text-gray-500">{total.title}</p>
                </div>
                <div className={`px-5 my-4 mb-4`}>
                    <button type="button" onClick={() => handleSubmit()} className={`flex bg-primary-theme text-white w-[21.5rem] px-10 items-center justify-between py-5 font-medium`}>
                        <span>{buttonText}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-4 shrink-0" viewBox="0 0 24 24"><path stroke="currentColor" d="M18 7.328v-5.328l8 8-8 8v-5.328l-34-0.672z"/></svg>
                    </button>
                    <div className="flex items-center py-5 ">
                        <input id="link-checkbox" type="checkbox" value="" onChange={() => setCheckerStatus(!checkerStatus)} checked={checkerStatus} className="w-4 h-4 accent-primary-theme text-primary-theme bg-gray-100 border-gray-300 rounded focus:ring-primary-theme focus:opacity-70 focus:ring-2" />
                        <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium">{checker.text} <a href={checker.link} className="text-primary-theme hover:underline">{checker.linktext}</a>.</label>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default PriceDetails