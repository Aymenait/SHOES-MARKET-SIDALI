import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold">
          Hell Heaven DZ
        </Link>
        <nav>
          <Link href="/products" className="mr-4">
            Products
          </Link>
          <Link href="/cart">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
