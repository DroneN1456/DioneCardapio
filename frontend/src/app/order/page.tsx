import Cart from "./components/cart";
import OrderContainer from "./components/orderContainer";

export default async function Page() {
  const res = await fetch("http://localhost:3030/product", {
    next: { revalidate: 0 },
  });
  const products = await res.json();

  return (
    <div className="m-0">
      <OrderContainer products={products} />
    </div>
  );
}
