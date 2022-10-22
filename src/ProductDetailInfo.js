import Button from "./Button.js";
import { useDispatch } from "react-redux";
import { addProduct } from "./store.js";

function ProductDetailInfo(props) {
  const {product} = props;

  const dispatch = useDispatch();

  const onProductAdd = () => {
    dispatch(addProduct(product));
  };

  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd()}>${product.price}</Button>
    </>
  );
}

export default ProductDetailInfo;