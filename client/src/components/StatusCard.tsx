import { statusInterface } from '../interfaces'

const StatusCard = ({ status, message, show, handleClose }: statusInterface) => {

    return (
        <div className={`fixed top-10 right-10 max-w-80 min-w-60 justify-center transition-opacity ease-in-out delay-500 duration-1000 ${show? "opacity-100" : "opacity-0 after:hidden"} ${
            status === "success"? "bg-green-500" 
            : status === "info"? "bg-blue-500" 
            : status === "pending"? "bg-orange-500"
            : "bg-red-500"
        }`}>
            <button type="button" onClick={handleClose} className={`absolute right-4 top-2 text-white text-center justify-center font-medium`}>
                X
            </button>
            <h5 className='text-center text-white py-8 px-10'>{message}</h5> 
        </div>
    )
}

export default StatusCard