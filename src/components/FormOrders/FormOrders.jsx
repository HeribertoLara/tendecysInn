import React, { useContext } from "react";
import { DataContext } from "../../context/context";
import "./FormOrders.css";

const FormOrders = () => {
  const { order, setOrder, onSubmit } = useContext(DataContext);

  return (
    <>
      <form
        className="border-2 margin-2 grid grid-cols-1 gap-4 place-items-center p-2"
        onSubmit={onSubmit}
      >
        <label>sku</label>
        <input
          className="outline outline-2 rounded-md p-2"
          value={order.items[0].sku}
          onChange={(e) =>
            setOrder({
              ...order,
              items: [
                {
                  ...order.items[0],
                  sku: e.target.value,
                },
                
              ],
            })
          }
          placeholder="SKU"
        />
        <label>name</label>
        <input
          className="outline outline-2 rounded-md p-2"
          value={order.items[0].name}
          onChange={(e) =>
            setOrder({
              ...order,
              items: [
                {
                  ...order.items[0],
                  name: e.target.value,
                },
                
              ],
            })
          }
          placeholder="name"
        />
        <label>quantity</label>
        <input
          className="outline outline-2 rounded-md p-2"
          value={order.items[0].quantity}
          onChange={(e) =>
            setOrder({
              ...order,
              items: [
                {
                  ...order.items[0],
                  quantity: e.target.value,
                },
                
              ],
            })
          
          }
          placeholder="quantity"
        />
        <label>price</label>
        <input
          className="outline outline-2 rounded-md p-2"
          value={order.items[0].price}
          onChange={(e) =>
            setOrder({
              ...order,
              items: [
                {
                  ...order.items[0],
                  price: e.target.value,
                },
                
              ],
            })
          
          }
          placeholder="price"
        />

        <div>
          <button
            className=" text-white font-semibold w-48 p-2 rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
            type="submit"
          >
            Add Order
          </button>
        </div>
      </form>
    </>
  );
};

export { FormOrders };
