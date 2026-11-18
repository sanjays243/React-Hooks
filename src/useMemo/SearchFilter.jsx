import { useState, useMemo } from "react";

function SearchFilter() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const products = [
    "Laptop",
    "Mobile",
    "Keyboard",
    "Mouse",
    "Monitor",
    "Headphones"
  ];

  const filteredProducts = useMemo(() => {
    console.log("Filtering Products...");

    return products.filter((product) =>
      product.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <br />
      <h1>Product Search - useMemo</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Products:</h3>

      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>

      {filteredProducts.length === 0 && (
        <p>No products found</p>
      )}

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default SearchFilter;