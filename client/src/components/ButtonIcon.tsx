import { buttonIconInterface } from '../interfaces'

const ButtonIcon = ({ clickable, action, svg }: buttonIconInterface) => {

    return (
        <div className='relative'>
            <button type="button" onClick={() => clickable? action : []} className={`absolute right-5 top-5 bg-primary-theme text-white w-10 h-10 text-center justify-center font-medium`}>
                {svg}
            </button>
        </div>
    )
}

export default ButtonIcon