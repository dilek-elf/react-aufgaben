import ProductCard from "./components/ProductCard";

function App () {
  {/* my data is here */}
  const product = {
    name: "Elfpods headphone",
    price: 199,
    category: "Electronics",
    description: "noice-cancelling 10h battery live",
    initialStock: 25,
  }

  {/* my pproducts are in my Productcard */}
  return <ProductCard product = {product} />;
}
  export default App;