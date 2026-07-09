import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);

      const productRes = await fetch("https://dummyjson.com/products");
      const productData = await productRes.json();

      const categoryRes = await fetch(
        "https://dummyjson.com/products/categories"
      );
      const categoryData = await categoryRes.json();

      setProducts(productData.products);
      setCategories(categoryData);
    } catch (err) {
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  }

  const filteredProducts =
    selectedCategory === "All"? products : products.filter(
          (product) => product.category === selectedCategory.slug
        );

  return (
    <div className="container">
      <h1> Product Listing</h1>

      <div className="filters">
        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.slug}
            className={selectedCategory.slug === cat.slug ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {loading && <h2>Loading Products...</h2>}

      {error && <h2>{error}</h2>}

      <div className="products">
        {!loading &&
          !error &&
          filteredProducts.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />

              <h3>{product.title}</h3>

              <p>{product.category}</p>

              <h4>${product.price}</h4>

              <button>Buy Now</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;