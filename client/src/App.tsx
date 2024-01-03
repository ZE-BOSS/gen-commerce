import { useState, useEffect } from 'react'
import { useFetch } from './utils/hooks'
import { loadTheme, changeTheme } from './utils/mode'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogCard from './components/BlogCard'
import AccordionDetails from './components/AccordionDetails'
import Pager from './components/Pager'
import PriceDetails from './components/PriceDetails'
import ProductCard from './components/ProductCard'
import CartCard from './components/CartCard'
import { headItem, product, statusProp, categoryInterface } from './interfaces'
import StatusCard from './components/StatusCard'
import FilterSidebar from './components/FilterSidebar'

function App() {
  const [user, setuser] = useState<string>()
  const [mode, setMode] = useState<any>(localStorage.getItem("theme"))
  const routes: headItem[] = [
    {name: "Home", link:"/"},
    {name: "Products", link:"/products"},
    {name: "My Orders", link:"/orders"},
    {name: "About", link:"/about"},
    {name: "Contact", link:"/contact" },
  ]
  const [selected, setSelected] = useState<string>();
  const [page, setPage] = useState<number>(1)
  const [products,  setProducts] = useState<product[]>([
    {title: "Noteworthy Technology", image: "./images/gen_ai.jpeg", link: "#", quantity: 2, price: 30000},
    {title: "Acquisitions 2021", image: "./images/gen_out.jpeg", link: "#", quantity: 1, price: 46000},
    {title: "Industrial Generator", image: "./images/gen_big.jpeg", link: "#", quantity: 1, price: 58000}
  ])
  const [status, setStatus] = useState<statusProp[]>([
    {id: 0, status: false, type: "info" },
    {id: 1, status: false, type: "success" },
    {id: 2, status: false, type: "pending" },
    {id: 3, status: false, type: "error" }
  ])
  const [categories, setCategories] = useState<categoryInterface[]>([
    {
      name: "Category", 
      subCategory: [ 
        {name: "Diesel", type: "check", checked: false, quantity: 56},
        {name: "Inverter", type: "check", checked: false, quantity: 13},
        {name: "Natural Gas", type: "check", checked: false, quantity: 30},
        {name: "Lister", type: "check", checked: false, quantity: 78},
        {name: "Heavy Duty", type: "check", checked: false, quantity: 49},
      ],
      opened: true
    },
    {
      name: "Horse Power", 
      subCategory: [ 
        {name: "6hp", type: "check", checked: false, quantity: 61},
        {name: "10hp", type: "check", checked: false, quantity: 14},
        {name: "12hp", type: "check", checked: false, quantity: 47},
        {name: "18hp", type: "check", checked: false, quantity: 34},
        {name: "76hp", type: "check", checked: false, quantity: 23},
      ],
      opened: true
    },
    {
      name: "Color", 
      subCategory: [ 
        {name: "Orange", type: "check", checked: false, quantity: 93},
        {name: "Red", type: "check", checked: false, quantity: 30},
        {name: "Blue", type: "check", checked: false, quantity: 14},
        {name: "Green", type: "check", checked: false, quantity: 78},
        {name: "Indigo", type: "check", checked: false, quantity: 24},
      ],
      opened: true
    },
    {
      name: "Discount", 
      subCategory: [ 
        {name: "10% or more", type: "check", checked: false, quantity: 30},
        {name: "20% or more", type: "check", checked: false, quantity: 23},
        {name: "30% or more", type: "check", checked: false, quantity: 14},
        {name: "40% or more", type: "check", checked: false, quantity: 9},
        {name: "50% or more", type: "check", checked: false, quantity: 4},
      ],
      opened: true
    },
    {
      name: "Price", 
      subCategory: [
        {
            name: "Price Range", 
            type: "slider", 
            range: {
                start: {label: "NGN", value: 500}, 
                current: { start: {label: "NGN", value: 500}, end: {label: "NGN", value: 10000000}}, 
                end: {label: "NGN", value: 10000000}
            },
        }
      ],
      opened: true
    },
  ])

  const handleMode = () => {
    if(localStorage.getItem("theme") === "dark") {
      changeTheme("light") 
      setMode("light")
    } else {
      changeTheme("dark")
      setMode("dark")
    }
  }

  const handleStatus = (id: number, stat: boolean) => {
    const result: statusProp[] = []

    status.map( sts => {
      if(sts.id === id) {
        sts.status = stat 
      } else {
        sts.status = false 
      }

      result.push(sts)
    })

    setStatus(result)
  }

  const handleFilterAccord = (name: string) => {
    const result: categoryInterface[] = []

    categories.map( cat => {
      if(cat.name === name) {
        cat.opened = !cat.opened 
      } 

      result.push(cat)
    })

    setCategories(result)
  }

  const handleFilterChecker = (cat: number, subcat: number) => {
    const result: categoryInterface[] = []

    categories.map((cart, index) => {
      if(index === cat) {
        cart.subCategory.map((subCart, inx) => {
          if(inx === subcat) {
            subCart.checked = !subCart.checked
          }
        }) 
      } 

      result.push(cart)
    })

    setCategories(result)
  }

  const handleFilterSlider = (cat: number, subcat: number, min: number, max: number) => {
    const result: categoryInterface[] = []

    categories.map((cart, index) => {
      if(index === cat) {
        cart.subCategory.map((subCart, inx) => {
          if(inx === subcat) {
            if(subCart.range) {
              subCart.range.current.start.value = min
              subCart.range.current.end.value = max
            }
          }
        }) 
      } 

      result.push(cart)
    })

    setCategories(result)
  };

  const handleSubmit = () => {
    return alert("success");
  };

  const handleAction = () => {
    if(products.length === 0) [
      setProducts([
        {title: "Noteworthy Technology", image: "./images/gen_ai.jpeg", link: "#", quantity: 2, price: 30000},
        {title: "Acquisitions 2021", image: "./images/gen_out.jpeg", link: "#", quantity: 1, price: 46000},
        {title: "Industrial Generator", image: "./images/gen_big.jpeg", link: "#", quantity: 1, price: 58000}
      ])
    ]
    return alert("Checked Out");
  };

  const handleCancel = () => {
    setProducts([])
    return alert("Canceled");  
  };

  useEffect(() => {
    useFetch("/", setuser)
    loadTheme();
    routes.map((route) => route.link === window.location.pathname? setSelected(route.name) : null)
  }, [])

  return (
    <div className={`${mode == "dark"? "dark" : "light"}`}>
      <Header mode={mode} handleMode={handleMode} login={true} routes={routes} selected={selected} setSelected={setSelected} user={user}/>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <FilterSidebar 
                mode={mode}
                categories={categories}
                handleAction={handleFilterAccord}
                handleChecker={handleFilterChecker}
                handleSlider={handleFilterSlider}
              />
              <div className='flex flex-row'>
                <BlogCard 
                  mode={mode} 
                  title={"Noteworthy technology acquisitions 2021"} 
                  description={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}
                  link={"#"}
                  image={"./images/gen_bush.jpeg"}
                />
                <AccordionDetails 
                  mode={mode} 
                  header={"Noteworthy Technology"} 
                  title={"Noteworthy technology acquisitions 2021"} 
                  description={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}
                  link={{link: "#", text:"New Link"}}
                  data={[
                    {
                      title: "Transport", 
                      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                      open: false
                    },
                    {
                      title: "Electricity", 
                      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                      open: false
                    },
                    {
                      title: "Support", 
                      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                      open: false
                    },
                    {
                      title: "Transport", 
                      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                      open: false
                    },
                    {
                      title: "Support", 
                      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                      open: false
                    },
                    {
                      title: "Electricity", 
                      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                      open: false
                    },
                  ]} 
                />
                <Pager page={page} size={5} setPage={setPage} />
              </div>
              <div className='flex flex-row'>
                <PriceDetails 
                  mode={mode}
                  header={"Shirt"}
                  price={{title: "Price", price: 1400.39, currency: "NGN"}}
                  fee={{title: "Service Fee", percent: 0.5}}
                  quantity={{title: "Quantity", quantity: 2, name: "Pieces"}}
                  total={{title: "Gross Cost of Item(s)", price: 1490.79, currency: "NGN"}}
                  productDetails={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}
                  checker={{status: false, link: "#", text: "I agree with this", linktext: "terms and conditions"}}
                  buttonText={"Complete Purchase"}
                  handleSubmit={handleSubmit}
                />
                <ProductCard 
                  mode={mode}
                  image={"./images/gen_back.jpeg"}
                  price={{price: 1400.39, discount: 150, currency: "NGN"}}
                  product={{title: "Noteworthy Technology", link: "#"}}
                />
                <CartCard 
                  mode={mode} 
                  action={{title: "Checkout", handleAction}}
                  cancel={{title: "Cancel", handleCancel}}
                  products={products}
                />
              </div>
              <div className='flex flex-row'>
                <div className='flex flex-row my-10 mx-10'>
                  {status.map((stat) =>
                    <div className='mx-2'>
                      <button 
                        className={`py-4 px-8 text-white ${
                          stat.type === "success"? "bg-green-500" 
                        : stat.type === "info"? "bg-blue-500" 
                        : stat.type === "pending"? "bg-orange-500"
                        : "bg-red-500"
                        }`} 
                        onClick={() => handleStatus(stat.id, true)}
                      >
                        {(stat.type[0].toUpperCase() + stat.type.slice(1))} Alert
                      </button>
                      <StatusCard 
                        show={stat.status} 
                        message={'Test Message for Alert Status'} 
                        status={stat.type} 
                        handleClose={() => handleStatus(stat.id, false)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
