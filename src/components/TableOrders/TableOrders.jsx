import React, { useContext } from "react";
import { DataContext } from "../../context/context";
import '../../index.css'
import {Link} from 'react-router-dom'

const TableOrders = () => {
  const { 
    orders
  }= useContext(DataContext)
  return (
    <>
    <table className="border-solid border-2 border-sky-500 m-12 rounded z-0">
      <thead>
        <tr>
          <th 
            className="border border-slate-600 p-2 border-solid border-2 border-sky-500"
            >
              SKU
          </th>
          <th 
            className="border border-slate-600 p-2 border-solid border-2 border-sky-500"
            >
              Name
          </th>
          <th 
            className="border border-slate-600 p-2 border-solid border-2 border-sky-500"
            >
              Quantity
          </th>
          <th 
            className="border border-slate-600 p-2 border-solid border-2 border-sky-500"
            >
              Price
          </th>
          <th 
            className="border border-slate-600 p-2 border-solid border-2 border-sky-500"
          >
            Detail
          </th>
        </tr>
      </thead>
      <tbody>
        {
          orders.map((order, i) =>(
            <tr key={i}>

              <td 
                className="border border-slate-700 p-1 border-solid border-2 border-sky-500"
                >
                {order.items[0].sku}
              </td>
              <td 
                className="border border-slate-700 p-1 border-solid border-2 border-sky-500"
                >
                  {order.items[0].name}

              </td>
              <td className="border border-slate-700 p-1 border-solid border-2 border-sky-500">
                {order.items[0].quantity}
              </td>

              <td className="border border-slate-700 p-1 border-solid border-2 border-sky-500">
                {order.items[0].price}
              </td>

              <td className="border border-slate-700 p-1 border-solid border-2 border-sky-500"> 
                <button
                  className="text-white font-semibold w-24 p-2 rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  
                >
                  <Link to={`/detail/${order.id}`}>
                    Detail
                  </Link> 
                </button>
              </td>
            </tr>
            
            ))
          }
         
      </tbody>
    </table>

    </>
  );
};

export default TableOrders;
