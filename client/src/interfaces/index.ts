export interface headItem { 
    name: string;
    link: string; 
}

export interface blogInterface {
    mode: any,
    title: string,
    description: string,
    link: string,
    image: string
}

export interface accordionInterface {
    mode: any,
    header: string,
    title: string,
    description: string,
    link: {link: string, text: string},
    data: accord[]
}

export interface accord {
    title: string,
    description: string,
    open: boolean
}

export interface pagerInterface {
    page: number,
    size: number,
    setPage: any
}

export interface PriceInterface {
    mode: any,
    header: string,
    price: {title: string, price: number, currency: string},
    fee: {title: string, percent: number},
    quantity: {title: string, quantity: number, name: string},
    total: {title: string, price: number, currency: string},
    productDetails: string,
    checker: {status: boolean, link: string, text: string, linktext: string},
    buttonText: string,
    handleSubmit: any
}

export interface productInterface {
    mode: any,
    image: string,
    price: {price: number, discount?: number, currency: string},
    product: {title: string, link: string},
}

export interface cartInterface {
    mode: any,
    action: {title: string, handleAction: any},
    cancel: {title: string, handleCancel: any},
    products: product[],
}
  
export interface product {
    image: string,
    link: string,
    title: string,
    quantity: number,
    price: number
}

export interface dropDownItems {
    name: string,
    link: string
}

export interface dropDownInterface {
    mode: any,
    nav: {status: boolean, userEmail?: string, userName?: string, title?: string},
    show: boolean,
    items: dropDownItems[],
    type: "plain" | "custom",
    actionField: {status: boolean, element: any, ref?: string},
}

export interface buttonIconInterface {
    clickable: boolean,
    action: any,
    svg: any
}

export interface statusInterface {
    status: "error" | "pending" | "success" | "info",
    message: string,
    show: boolean,
    handleClose: any
}

export interface statusProp {
    id: number, 
    status: boolean
    type: "error" | "pending" | "success" | "info",
}

export interface rangeSub {
    label: string,
    value: number
}

export interface categoryInterface {
    name: string, 
    subCategory: {
        name: string, 
        type: "check" | "slider", 
        checked?: boolean, 
        range?: {
            start: rangeSub, 
            current: { start: rangeSub, end: rangeSub}, 
            end: rangeSub
        },
        quantity?: number
    }[],
    opened: boolean,
}

export interface filterInterface {
    mode: "light" | "dark",
    categories: categoryInterface[],
    handleAction: any, 
    handleChecker?: any,
    handleSlider?: any
}

export interface paySelect {
    title: string,
    options: {
        name: string,
        checked: boolean,
        logo: string
    }[]
}

export interface serviceInterface {
    title: string,
    bargeText: string,
    linkText: string,
    link: string,
    image: string
}