import { productInterface } from "../interfaces"
import ButtonIcon from "./ButtonIcon"

const ProductCard = ({ mode, image, price, product }: productInterface) => {

    return (
        <div className={`mx-10 my-10`}>
            <div className={`relative max-w-sm pt-5 ${mode === "light"? "bg-white shadow-gray-300" : 'bg-zinc-950 shadow-gray-700'}`}>
                <div className={`relative mx-5 border ${mode === "light"? "border-gray-200" : "border-gray-800"}`}>
                    {price.discount?
                        <ButtonIcon clickable={false} action={null} svg={"%"} />
                    : null}
                    <a href={product.link} className="">
                        <img className='h-60 w-60' src={image} alt="" />
                    </a>
                </div>
                <div className={`px-5 my-5 pt-2 pb-8`}>
                    <a href={product.link} className={`tracking-tight font-bold text-md text-gray-400 pb-2`}>{product.title}</a>
                    <a className={'flex flex-row justify-between'}>
                        <h5 className={`tracking-tight font-bold text-md text-primary-theme`}>{price.currency} {price.discount? price.price - price.discount : price.price}</h5>
                        {price.discount? <h5 className={`tracking-tight font-bold text-sm line-through text-gray-400`}>{price.currency} {price.price}</h5> : null}
                    </a>
                </div> 
            </div>
        </div>
    )
}

export default ProductCard