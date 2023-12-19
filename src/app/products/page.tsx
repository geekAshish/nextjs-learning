"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Product() {
  const productNavLink = [
    { name: "Product 1", link: "products/1" },
    { name: "Product 2", link: "products/2" },
    { name: "Product 3", link: "products/3" },
    { name: "Product 100", link: "products/100" },
  ];
  const pathName = usePathname();
  return (
    <>
      <h1>Product List</h1>
      {productNavLink &&
        productNavLink.map((product, i) => {
          const isActive = pathName.startsWith(product.link);
          return (
            <div key={i} className="p-1">
              <Link
                href={product.link}
                className={isActive ? "font-bold text-red-500" : ""}
              >
                {product.name}
              </Link>
            </div>
          );
        })}
    </>
  );
}

export default Product;
