function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name} </td>
      <td>{product.price} </td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category != lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow key={product.name} product={product} />);

    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Recherche" />
      <label>
        <input type="checkbox" />
        N’afficher que les produits en stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "1 €", stocked: true, name: "Pomme" },
  { category: "Fruits", price: "1 €", stocked: true, name: "Fruit du dragon" },
  {
    category: "Fruits",
    price: "2 €",
    stocked: false,
    name: "Fruit de la passion",
  },
  { category: "Légumes", price: "2 €", stocked: true, name: "Épinard" },
  { category: "Légumes", price: "4 €", stocked: false, name: "Citrouille" },
  { category: "Légumes", price: "1 €", stocked: true, name: "Petits pois" },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
