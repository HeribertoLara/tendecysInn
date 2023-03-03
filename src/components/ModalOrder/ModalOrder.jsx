import React, { useContext } from "react";
import { DataContext } from "../../context/context";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalOrder = () => {
  const { orders } = useContext(DataContext);
  const navigate = useNavigate();

  const { id } = useParams();
  const orderData = orders.find((order) => order.id === id);
  const notify = () => {
    toast("🪙 successful payment", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(()=>{
        navigate('/')
    },4000
    )
  };

  const goHome=()=>navigate('/')
  return (
    <div className=" backdrop-blur-sm bg-white/30 z-10 grid grid-cols-1 gap-4 place-items-center">
      <h2>{orderData.id} </h2>
      <p>
        {orderData.items[0].name} 
      </p>
      <div>{orderData.items[0].quantity}</div>
      <div>{orderData.items[0].price}</div>

      <section className="  grid-cols-1 gap-4 place-items-center">
        <button 
          className='mx-14 bg-sky-400 font-bold text-white p-2 rounded-full'
            onClick={goHome}
        >
            cancelar
        </button>
        <button 
          className="m-24 bg-sky-400 font-bold text-white  p-2 rounded-full" 
          onClick={notify}
        >
          pagar
        </button>
      </section>
      <ToastContainer />
    </div>
  );
};

export { ModalOrder };
