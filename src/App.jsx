import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 1. استيراد مكونات الـ Router
import './index.css';

// تأكد أنك قمت بإنشاء مكونات الصفحات
import HomePage from './pages/Home';
import AboutPage from './pages/About'; // (مثال، إذا قمت بإنشاء صفحة "عنا")
import Menupage from './pages/Menu'; // (مثال، إذا قمت بإنشاء صفحة "عنا")
import Loginpage from './pages/Login'; // (مثال، إذا قمت بإنشاء صفحة "عنا")
import Registerpage from './pages/register'; // (مثال، إذا قمت بإنشاء صفحة "عنا")

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* 2. تحديد المسار '/' للصفحة الرئيسية */}
        <Route path="/about" element={<AboutPage />} /> {/* 3. تحديد المسار '/about' لصفحة "عنا" */}
        <Route path="/menu" element={<Menupage />} /> {/* 4. تحديد المسار '/menu' لصفحة "القائمة" */}
        <Route path="/login" element={<Loginpage />} /> {/* 4. تحديد المسار '/menu' لصفحة "القائمة" */}
        <Route path="/register" element={<Registerpage />} /> {/* 4. تحديد المسار '/menu' لصفحة "القائمة" */}
        {/* أضف المزيد من المسارات هنا */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;