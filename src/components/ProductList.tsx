interface Props {
  desc: string;
  price: number;
  quantityAvailable: number;
}

const ProductList = ({ desc, price, quantityAvailable }: Props) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col col-md-6 col-lg-4">
          <div className="card">
            <img
              src={"/public/" + desc + ".jpeg"}
              className="card-img-top"
              alt={desc}
            />
            <div className="card-body">
              <h5 className="card-title">{desc}</h5>
              <p className="card-text">${price}</p>
              <p className="card-text">
                Quantity in Stock: {quantityAvailable}
              </p>
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
