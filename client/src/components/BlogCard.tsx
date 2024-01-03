import { blogInterface } from "../interfaces"

const BlogCard = ({ mode, title, description, link, image }: blogInterface) => {

  return (
    <div className={`overflow-hidden mx-10 my-10 pt-40`}>
        <div className={`relative max-w-sm pt-24 ${mode === "light"? "bg-white shadow-gray-300" : 'bg-zinc-950 shadow-gray-700'}`}>
            <div className='relative -mt-24 mb-10'>
                <a className="absolute -top-36 shadow-md left-10 right-10">
                    <img className='h-60 w-96' src={image} alt="" />
                </a>
            </div>
            <div className="p-5 mt-24">
                <a>
                    <h5 className="mb-2 text-xl font-bold tracking-tight">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-sm pt-5">{description}</p>
                <a href={link} className={`inline-flex items-centerm pt-5 px-3 py-2 text-sm font-medium text-center hover:text-primary-theme hover:border-primary-theme focus:outline-none border-b-2 ${mode === "light"? "border-dark-theme" : 'border-light-theme'}`}>
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-5.5 ms-2 hover:text-primary-theme" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
  )
}

export default BlogCard