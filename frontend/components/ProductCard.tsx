import Image from 'next/image';

type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sizes: string[];
  colors: string[];
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Image src={product.imageUrl} alt={product.name} width={300} height={300} />
      <h2 className="text-xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <div className="mt-4">
        <label htmlFor="size" className="block text-sm font-medium text-gray-700">
          Size
        </label>
        <select
          id="size"
          name="size"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {product.sizes.map((size) => (
            <option key={size}>{size}</option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <label htmlFor="color" className="block text-sm font-medium text-gray-700">
          Color
        </label>
        <select
          id="color"
          name="color"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {product.colors.map((color) => (
            <option key={color}>{color}</option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          defaultValue="1"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
