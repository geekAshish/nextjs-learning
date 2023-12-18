function ProductReview({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  return (
    <>
      <h1>
        Review no. {params.reviewId} for product {params.productId}
      </h1>
    </>
  );
}

export default ProductReview;
