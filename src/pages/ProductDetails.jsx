import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <main>
      <div className="p-8">
        <h1>{ id }</h1>
      </div>
    </main>
  );
};

export default ProductDetails;
