import { useState  } from 'react'
import { accordionInterface, accord } from '../interfaces'

const AccordionDetails = ({ header, mode, title, description, link, data }: accordionInterface) => {
    const [accordions, setAccordions] = useState<accord[]>(data.slice(0, 5))
    const [padding, setPadding] = useState<string>()
    const titlePad: string = (". ".repeat((title.length) * 2))

    const handleAccordion = (current: number) => {
        const update: accord[] = [];
        
        accordions.map((accordion, index) => {
            if(index === current) {
                accordion.open = !accordion.open
                setPadding(accordion.open? ". ".repeat((accordion.description.length) * 2) : "")
            } else {
                accordion.open = false
            }

            update.push(accordion)
        })

        setAccordions(update)
    }

    return (
        <div className={`overflow-hidden mx-10 my-10 pt-20`}>
            <div className={`relative max-w-sm pt-64 ${mode === "light"? "bg-white shadow-gray-300" : 'bg-zinc-950 shadow-gray-700'}`}>
                <div className='relative -mt-64 mb-10'>
                    <a className="absolute -top-16 shadow-md left-10 right-10">
                        <div id="accordion-flush" data-accordion="collapse" className={`bg-primary-theme text-white`}>
                            <a>
                                <h5 className="mb-2 text-lg font-bold mx-10 pt-10 tracking-tight">{header}</h5>
                            </a>
                            {accordions.map((accordion, index) =>
                                <div className='px-10'>
                                    <h2 onClick={() => handleAccordion(index)}>
                                        <button type="button" className={`flex items-center justify-between w-full py-5 font-medium rtl:text-right ${index !== 4 || accordion.open? "border-b border-gray-200" :  ""} gap-3`} data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                                            <span>{accordion.title}</span>
                                            <svg data-accordion-icon className={`w-3 h-3 ${accordion.open?"rotate-180":""} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-flush-body-1" className={accordion.open? "" : "hidden"} aria-labelledby="accordion-flush-heading-1">
                                        <div className={`py-5 ${index !== 4? "border-b border-gray-200" : ""}`}>
                                            <p className="mb-2">{accordion.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </a>
                </div>
                <div className={`p-5 mt-80`}>
                    <a className={''}>
                        <h5 className={`${titlePad.length > 200?"mb-4":"-mt-10"} tracking-tight ${mode==="light"?"text-white":"text-dark-theme"}`}>{titlePad}</h5>
                    </a>
                    <a className={''}>
                        <h5 className={`${padding?"mb-4":""} tracking-tight ${mode==="light"?"text-white":"text-dark-theme"} mt-5`}>{padding}</h5>
                    </a>
                    <a>
                        <h5 className="mb-2 text-md font-bold tracking-tight">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-sm pt-5">{description}</p>
                    <a href={link.link} className={`inline-flex items-center pt-5 px-3 py-2 text-sm font-medium text-center text-primary-theme hover:opacity-70 focus:outline-none`}>
                        {link.text}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AccordionDetails