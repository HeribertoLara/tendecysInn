import React from 'react';
import { DataProvider } from './context/context';
import './App.css';


import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ModalOrder } from './components/ModalOrder/ModalOrder';
import { Menu } from './components/MenuOrders/Menu';
import TableOrders from './components/TableOrders/TableOrders';
import { FormOrders } from './components/FormOrders/FormOrders';

function App() {

  return (
    <DataProvider>
      <BrowserRouter>
          <Menu/>
        <Routes>
          <Route path="/"  exact element={<TableOrders/>}/>
          <Route path="/form"   element={<FormOrders/>}/>
          <Route path="/detail/:id"  exact element={<ModalOrder/>}/>
          <Route path="*"  element={<p>404 Not Found</p>}/>
          
        </Routes>
      
      </BrowserRouter>
      

       

        
    
    </DataProvider>
  );
}

export default App;
