import React,{createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const  DataContext = createContext()

export const  DataProvider= ({children}) => {
   
  const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ"
  
  const [orders, setOrders] = useState([])
  
  const [order, setOrder] = useState(
    {
      id: '5687565',
      items:
    [{
    
    sku:'',
    name:'',
    price:'',
    quantity:'',
  }]})
  
  const getProducts = async () => {
    try {
      const res = await axios.get(
        "https://eshop-deve.herokuapp.com/api/v2/orders",{
          headers: { Authorization: `Bearer ${token}` }, 
        }
        
       
      );
      
    setOrders(res.data.orders)
    
    ;
    } catch (error) {
      alert(error); 
    }
  };

  const onSubmit = (e)=>{
    
    e.preventDefault()
    
    orders.unshift(order)
    setOrders([...orders])
    /* setOrder({
      id:'',
      sku:'',
      firstName:'',
      lastName:'',
      quantity:'',
      price:'',
    }) */
    
  }
  
  useEffect(()=>{
    getProducts()
   
  },[])

  return (
    <DataContext.Provider value={{
        
        orders,
        setOrders,
        order,
        setOrder,
        onSubmit, 
        }}
    >
    {children}
    </DataContext.Provider>
  )

}
