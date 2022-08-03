import "./ProductsWrapp.scss";

type ProductsWrapp = {
    children: React.FC;
};

const ProductsWrapp: React.FC = ({ children }) => {
    return <div className="products-wrapp">{children}</div>;
};

export { ProductsWrapp };
