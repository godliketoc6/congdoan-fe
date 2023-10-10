import Layout from "./components/layout/Layout"
import { Routes, Route } from 'react-router-dom';
import Trangchu from "./pages/Trangchu";
import Taosukien from "./pages/Taosukien";
import Danhsachdangki from "./pages/Danhsachdangki";
import Nhanvien from "./pages/Nhanvien";
import Bieudonhanvien from "./pages/Bieudonhanvien";
import Sukien from "./pages/Sukien";
import {useState} from "react";

export default function App() {
  const [role, setRole] = useState('admin');
  // useState for role if =
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trangchu />} />
          <Route path="/danhsachsukien" element={<Sukien />} /> 
          <Route path="/taosukien" element={<Taosukien />} /> 
          <Route path="/danhsachdangki" element={<Danhsachdangki />} /> 
          <Route path="/nhanvien" element={<Nhanvien />} /> 
          <Route path="/bieudonhanvien" element={<Bieudonhanvien />} /> 
        </Route>
      </Routes>
    </>
  )
}