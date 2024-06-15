import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import home components
import Homepage from "./pages/HomePage";
import Header from "./components/layout/Header";
// import Products from "./pages/ProductDetails";
import Login from "./components/user/LoginForm";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import TermsLayout from "./components/layout/TermsLayout";
import Privacy from "./terms/PrivacyPolicy";
import TermsAndConditions from "./terms/TermsAndConditions";
import CreateProduct from "./components/admin/CreateProduct";
import DeleteProductConfirmation from "./components/admin/DeleteProductConfirmation";
import LoginForm from "./components/user/LoginForm";
import UserRegistration from "./components/user/RegstrationForm";
import ProductLayout from "./components/layout/ProductLayout";
import Products from "./components/Home/Products";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Homepage />} />
      <Route path="products" element={<ProductLayout />}>
        <Route index element={<Products />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="terms" element={<TermsLayout />}>
        <Route path="privacy" element={<Privacy />} />
        <Route path="conditions" element={<TermsAndConditions />} />
      </Route>
      <Route path="addProduct" element={<CreateProduct />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<UserRegistration />} />
      {/* <Route path="deleteProduct" element={<DeleteProductConfirmation />} /> */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
