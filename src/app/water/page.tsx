import Head from "next/head";
import Link from "next/link";

export default function WaterProvision() {
  const products = [
    {
      id: 1,
      name: "5 Cartons",
      description: "330 ml - 20 bottles",
      price: "4.50.0",
    },
    {
      id: 2,
      name: "5 Cartons",
      description: "330 ml - 20 bottles",
      price: "4.50.0",
    },
    {
      id: 3,
      name: "5 Cartons",
      description: "330 ml - 20 bottles",
      price: "4.50.0",
    },
    {
      id: 4,
      name: "5 Cartons",
      description: "330 ml - 20 bottles",
      price: "4.50.0",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Providing Water - Mecca Mosques</title>
        <meta
          name="description"
          content="Water provision for mosques in Mecca"
        />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Mecca Mosques
          </Link>
          <div className="flex space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="/cart"
              className="px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Cart
            </Link>
            <Link
              href="/orders"
              className="px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Orders
            </Link>
            <Link
              href="/media"
              className="px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Media
            </Link>
            <Link
              href="/profile"
              className="px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Mecca mosques most needed
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-6">
          Providing Water
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Menu</h3>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700">
              Menu
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700">
              Menu
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
