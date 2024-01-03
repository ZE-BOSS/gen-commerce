import { useState, useEffect } from "react"
import { cartInterface, product } from "../interfaces"

const CartCard = ({ mode, action, cancel, products }: cartInterface) => {
    const [cartItems, setCartItems] = useState<product[]>(products)
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        setCartItems(products)
    }, [products])

    useEffect(() => {
        let allPrices: number = 0

        cartItems.map((item) => {
            allPrices += (item.price * item.quantity)
        })

        setTotal(allPrices)
    }, [cartItems])

    const handleRemoveItem = (current: number) => {
        const update: product[] = []
        let allPrices: number = 0

        cartItems.map((item, index) => {
            if(index !== current) {
                update.push(item)
                allPrices += (item.price * item.quantity)
            } 
        })

        setCartItems(update)
        setTotal(allPrices)
    }

    return (
        <div className={`mx-10 my-10`}>
            <div className={`relative max-w-sm min-w-74 pt-5 ${mode === "light"? "bg-white shadow-gray-300" : 'bg-zinc-950 shadow-gray-700'}`}>
                <div className={`relative mx-5`}>
                    {cartItems.map((item, index) =>
                        <div className={`relative flex flex-row justify-between my-2`}>
                            <div className={`relative flex flex-row`}>
                                <a href={item.link} className="pb-2">
                                    <img className={`h-10 w-10 border ${mode === "light"? "border-gray-200" : "border-gray-800"}`} src={item.image} alt="" />
                                </a>
                                <div className="pl-2">
                                    <a href={item.link} className={`tracking-tight font-bold text-md hover:text-primary-theme`}>{item.title}</a>
                                    <h5 className={`tracking-tight font-bold text-sm line-through text-gray-400`}>{item.quantity}X{item.price}</h5>
                                </div>
                            </div>
                            <button type="button" onClick={() => handleRemoveItem(index)} className={`pl-2 text-center hover:text-primary-theme justify-center font-medium -mt-5`}>
                                X
                            </button>
                        </div>
                    )}
                </div>
                <div className={`px-5 my-5 pt-2 pb-8`}>
                    <a className={'flex flex-row justify-between'}>
                        <h5 className={`tracking-tight font-bold text-md text-primary-theme`}>Total:</h5>
                        <h5 className={`tracking-tight font-bold text-md`}>{total}</h5>
                    </a>
                </div> 
                <div className={`px-5 my-5 pt-2 pb-8`}>
                    <a className={'flex flex-row justify-between'}>
                        <button type="button" onClick={() => action.handleAction()} className={`text-center mr-10 hover:opacity-50 bg-primary-theme px-5 py-3 text-white justify-center font-medium`}>
                            {action.title}
                        </button>
                        <button type="button" onClick={() => cancel.handleCancel()} className={`text-center ml-10 hover:opacity-50 px-5 py-3 border-2 border-primary-theme text-primary-theme justify-center font-medium`}>
                            {cancel.title}
                        </button>
                    </a>
                </div> 
            </div>
        </div>
    )
}

export default CartCard