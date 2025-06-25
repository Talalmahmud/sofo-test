import Head from "next/head";
import Link from "next/link";

export default function Premium() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>الاشتراك المميز - خدمة مساجد مكة</title>
        <meta name="description" content="اشترك في الخدمة المميزة لمساجد مكة" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            خدمة مساجد مكة
          </Link>
          <div className="flex space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              الرئيسية
            </Link>
            <Link
              href="/cart"
              className="px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              السلة
            </Link>
            <Link
              href="/orders"
              className="px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              الطلبات
            </Link>
            <Link
              href="/media"
              className="px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              الوسائط
            </Link>
            <Link
              href="/profile"
              className="px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              الملف الشخصي
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                الاشتراك المميز
              </h1>
              <p className="text-gray-600">
                We have subscription. Do you want to subscribe?
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                مساجد مكة الأكثر حاجة
              </h2>
              <p className="text-gray-700 mb-4">سقيا وإطفاء الجم</p>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-medium text-blue-800 mb-2">
                  مميزات الاشتراك:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>إدارة متكاملة لمساجد مكة</li>
                  <li>تتبع احتياجات السقيا والتبريد</li>
                  <li>تقارير مفصلة عن الخدمات المقدمة</li>
                  <li>دعم فني متخصص</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
                اشترك الآن
              </button>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>1/3</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
