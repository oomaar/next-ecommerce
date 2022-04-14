const Product = ({ product, products }) => {
    console.log("🚀 ~ file: [id].js ~ line 2 ~ Product ~ product", product);
    console.log("🚀 ~ file: [id].js ~ line 3 ~ Product ~ products", products);

    return (
        <div>Product Page</div>
    )
}

export default Product;

export const getStaticPaths = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();

    const paths = data.map(product => {
        return {
            params: { id: product.id.toString() }
        };
    });

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    const likes = await fetch(`https://fakestoreapi.com/products`);
    const products = await likes.json();

    return {
        props: { product: data, products }
    };
};
