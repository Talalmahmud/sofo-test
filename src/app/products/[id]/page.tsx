import Head from "next/head";
import Link from "next/link";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const similarProducts = [
    {
      id: 1,
      name: "5 Cartons",
      description: "330 ml - 20 bottles",
      price: "50.0",
    },
    {
      id: 2,
      name: "5 Cartons",
      description: "330 ml - 20 bottles",
      price: "50.0",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Product Details - Mecca Mosques</title>
        <meta
          name="description"
          content="Details about water products for mosques"
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Product Details
          </h1>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                5 Cartons
              </h2>
              <p className="text-gray-600 mb-4">330 ml - 20 bottles</p>
              <p className="text-2xl font-bold text-blue-600 mb-6">$50.0</p>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mb-8 transition duration-200">
                Add to Cart
              </button>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Product Overview
                </h3>
                <p className="text-gray-700">
                  For this items it will be distribute in Haram and Around Haram
                  from 1 Ramadan to 10 Ramadan
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Key Features
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>100% natural spring water source</li>
                  <li>Advanced multi-stage filtration</li>
                  <li>P/B-free recyclable packaging</li>
                  <li>Perfect pH library (D-7/8)</li>
                  <li>Convenient bulk packaging</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Suggested Similar Products
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {similarProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h4 className="font-bold text-gray-800">{product.name}</h4>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-blue-600 font-bold">{product.price}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/water"
                className="text-blue-600 hover:underline font-medium"
              >
                See All &gt;
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
