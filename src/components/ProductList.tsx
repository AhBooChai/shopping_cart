interface Product {
  desc: string;
  price: number;
  quantityInStock: number;
}

interface Props {
  productList: Product[];
  onAdd: () => void;
}

const ProductList = ({ productList, onAdd }: Props) => {
  if (productList.length !== 0)
    return (
      <div className="container text-center">
        <div className="row mb-5">
          {productList.map((product) =>
            product.quantityInStock !== 0 ? (
              <div className="col col-md-6 col-lg-4">
                <div className="card">
                  <img
                    src={"/public/" + product.desc + ".jpeg"}
                    className="card-img-top"
                    alt={product.desc}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.desc}</h5>
                    <p className="card-text">${product.price}</p>
                    <p className="card-text">
                      Quantity in Stock: {product.quantityInStock}
                    </p>
                    <button className="btn btn-primary" onClick={() => onAdd()}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    );
};

export default ProductList;
