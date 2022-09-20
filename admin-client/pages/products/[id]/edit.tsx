import { EditProductForm, PageTitle, ProductsTable } from "components";
import { ProductController } from "lib/controllers";
import { Product } from "lib/interfaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductEditPage = () => {
  const router = useRouter();
  const { id: productId } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    loadProductDetails();
  }, []);

  async function loadProductDetails() {
    if (productId == undefined || Array.isArray(productId)) return;
    try {
      const product = await ProductController.getProductById(productId);
      setProduct(product);
    } catch (error) {
      router.back();
    }
  }
  return (
    <section>
      <PageTitle routes={["Products", "Edit"]} />
      <div className="spacer-X"></div>
      {product && <EditProductForm product={product} />}
    </section>
  );
};

export default ProductEditPage;
