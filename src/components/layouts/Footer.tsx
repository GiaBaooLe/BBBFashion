import FS from "../../assets/images/logo.png"
export const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-800 text-sm ">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
         
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <div>
              <img src={FS} alt="Logo" className="w-40 mb-3" />
              <h5 className="font-mono text-lg mb-2">
                BBB Fashion Inc
              </h5>
              <ul className="space-y-1 text-sm text-gray-600">
             
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <div>
              <h5 className="font-semibold text-lg mb-2">Về chúng tôi</h5>
              <ul className="space-y-2">
                {[
                  { href: "/site/about-us", text: "Giới thiệu BBB Fashion" },
                  { href: "/site/terms", text: "Điều khoản sử dụng" },
                  { href: "/site/faq", text: "Các vấn đề thường gặp" },
                  { href: "/site/security", text: "Chính sách bảo mật" },
                  { href: "/site/term-exchange", text: "Chính sách đổi - trả - hoàn tiền" },
                  { href: "/site/payment-method", text: "Phương thức thanh toán" },
                  { href: "/site/delivery-method", text: "Phương thức vận chuyển" },
                ].map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-gray-700 hover:text-black transition">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

      
          <div className="w-full md:w-1/2 lg:w-1/6 px-4 mb-6">
            <div>
              <h5 className="font-semibold text-lg mb-2">Tiện ích</h5>
              <ul className="space-y-2">
                <li><a href="/tin-tuc" className="hover:text-blue-600">Tin tức</a></li>
                <li><a href="/shop/wishlist" className="hover:text-blue-600">Sản phẩm yêu thích</a></li>
                <li><a href="/account/orders" className="hover:text-blue-600">Đơn hàng của bạn</a></li>
              </ul>
            </div>
          </div>

        
          <div className="w-full lg:w-1/4 px-4 mb-6">
            <div>
              <h5 className="font-semibold text-lg mb-2">Liên kết</h5>
              <p className="mb-3 text-gray-600">Theo dõi chúng tôi trên</p>
              <div className="flex gap-3">
            
              </div>
            </div>
          </div>
        </div>

      
        <div className="border-t pt-4 mt-6 text-center text-gray-500 text-xs">
          Designed by <a href="https://www.facebook.com/GiaBaoo0512/" className="text-blue-500" target="_blank">Bảo Bình Tân</a> — Copyright{" "}
          <a href="https://www.facebook.com/GiaBaoo0512/" className="text-blue-500" target="_blank">Bảo Bình Tân</a>
        </div>
      </div>

  
      <div className="fixed bottom-4 right-4">
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 rounded-full shadow transition"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" fill="currentColor" viewBox="0 0 13 8">
            <path d="M11.4 7.7l-4.9-5-4.9 5c-.4.4-.9.4-1.3 0s-.4-.9 0-1.3L6.5 0l6.2 6.4c.4.4.3.9 0 1.3s-.9.4-1.3 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
