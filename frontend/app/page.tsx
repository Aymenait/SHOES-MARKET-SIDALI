import ProductCard from '../components/ProductCard';

const products = [
  {
    id: '1',
    name: 'Loro Piana',
    price: 500,
    imageUrl: '/placeholder.svg',
    sizes: ['40', '41', '42'],
    colors: ['Beige', 'Black'],
  },
  {
    id: '2',
    name: 'Nike Air Max',
    price: 250,
    imageUrl: '/placeholder.svg',
    sizes: ['38', '39', '40', '41', '42'],
    colors: ['White', 'Black', 'Red'],
  },
  {
    id: '3',
    name: 'Adidas Ultraboost',
    price: 300,
    imageUrl: '/placeholder.svg',
    sizes: ['39', '40', '41', '42', '43'],
    colors: ['Black', 'White'],
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
