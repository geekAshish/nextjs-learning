function ProductDetails({ params }: { params: { productId: string } }) {
  console.log(params);

  return (
    <>
      <h1>Product details about {params.productId}</h1>
    </>
  );
}

export default ProductDetails;
