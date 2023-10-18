
// import React from "react";
// import CustomNavbar from "./components/CustomNavbar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Products from "./pages/Products";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import NotFound from "./pages/NotFound";
// import ProductDetails from "./components/ProductDetails";
// import Cart from "./components/cart/Cart";
// import { ThemeProvider } from "./components/context/ThemeContext"; // Import ThemeProvider
// import { LanguageProvider } from "./components/context/LanguageContext"; // Import ThemeProvider
// import ThemeToggle from "./components/ThemeToggle";
// import LanguageSwitch from "./components/LanguageSwitch";


// function App() {
//   return (
//     <BrowserRouter>
//       <ThemeProvider> 
//         <LanguageProvider> 
//           <CustomNavbar />
//           <ThemeToggle /> 
//           <LanguageSwitch /> 
//           <Routes>
//             <Route path="/" element={<Products />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/productDetails/:id" element={<ProductDetails />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </LanguageProvider>
//       </ThemeProvider>
//     </BrowserRouter>
//   );
// }

// export default App;


// App.js
import React, { Suspense, useState } from "react";
import CustomNavbar from "./components/CustomNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./components/context/ThemeContext";
import { LanguageContext } from "./components/context/LanguageContext";

// Lazy-load your components
const Products = React.lazy(() => import("./pages/Products"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ProductDetails = React.lazy(() => import("./components/ProductDetails"));
const Cart = React.lazy(() => import("./components/cart/Cart"));

function App() {
  const [contextLang, setContextLang] = useState("en");
  // const [contextTheme, setContextTheme] = useState(false); // Default is light mode
  const [contextTheme, setContextTheme] = useState("light");

  return (
    <BrowserRouter>
         <div className={contextLang == 'ar' ? 'text-right' : 'text-left'} dir={contextLang == 'ar' ? 'rtl' : 'ltr'}>
          <LanguageContext.Provider value={{ contextLang, setContextLang}}>
            <div className={contextTheme == 'light' ? 'bg-light' : 'bg-dark'}>
            <ThemeContext.Provider value={{ contextTheme, setContextTheme }}>
          <CustomNavbar />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Products />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="/register"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Register />
                </Suspense>
              }
            />
            <Route
              path="/productDetails/:id"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ProductDetails />
                </Suspense>
              }
            />
            <Route
              path="/cart"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Cart />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <NotFound />
                </Suspense>
              }
            />
          </Routes>
          </ThemeContext.Provider>
            </div>
          </LanguageContext.Provider>
          </div>
        
    </BrowserRouter>
  );
}

export default App;
