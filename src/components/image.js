import product from "../product.js";
const Image = () => {
  return (
    <img
      src={product.imageUrl}
      alt={product.name}
      style={{ maxWidth: "200px" }}
    />
  );
};

export default Image;
