import { Outlet } from "react-router-dom";

const ProductLayout = () => {
    return (
        <main>
            <div className="p-8">
                <h1>Product Layout</h1>
            </div>

            <Outlet />
        </main>
    );
}
 
export default ProductLayout;