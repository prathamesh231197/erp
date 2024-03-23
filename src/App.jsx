import React from "react";
import "./App.css";
import Bom from "./components/master/bom/Bom.jsx";
import Navigation from "./components/Navigation.jsx";
import MainLevelRoute from "./routes/main.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import PurchaseOrder from "./components/purchase/purchaseOrder/purchaseOrder.jsx";
import PurchaseRequisition from "./components/purchase/purchaseRequisition/purchaseRequisition.jsx";
import MaterialReturn from "./components/purchase/materialReturn/materialReturn.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard Routes will come under /erp */}
          <Route path="/erp" element={<MainLevelRoute />} >
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          {/* Master Routes will come under /master */}
          <Route path="/master" element={<MainLevelRoute />} >
            <Route path="item" element={<Bom />} />
            <Route path="party" element={<Bom />} />
            <Route path="bom" element={<Bom />} />
          </Route>

          {/* Purchase Routes will come under /purchase */}
          <Route path="/purchase" element={<MainLevelRoute />} >
            <Route path="purchase-order" element={<PurchaseOrder />} />
            <Route path="requisition" element={<PurchaseRequisition />} />
            <Route path="material-return" element={<MaterialReturn />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
