# 🛍️ Shopping Online - Hướng Dẫn Setup & Chạy Ứng Dụng

**Ứng dụng mua sắm trực tuyến hoàn chỉnh** cho Admin quản lý + Khách hàng mua sắm

---

## 🎯 Ứng Dụng Này Là Gì?

Tưởng tượng bạn có một cửa hàng online:
- 👨‍💼 **Admin Dashboard** - Bạn (chủ cửa hàng) quản lý sản phẩm, danh mục, đơn hàng
- 👥 **Customer App** - Khách hàng truy cập website để mua sắm
- 🖥️ **Backend Server** - "Não" của hệ thống, xử lý tất cả yêu cầu

---

## 📋 Yêu Cầu Trước Khi Bắt Đầu

### **Các Phần Mềm Cần Cài (Đã Cài Chưa?)**

1. **Node.js & npm** - Giống như "động cơ" để chạy ứng dụng
   - Tải từ: https://nodejs.org/
   - Chọn phiên bản **LTS** (ổn định nhất)
   - Cài xong sẽ tự cài npm theo

2. **Git** - Công cụ quản lý code
   - Tải từ: https://git-scm.com/
   - Dùng để tải project từ GitHub

3. **MongoDB Atlas account** - Nơi lưu dữ liệu (miễn phí)
   - Đăng ký tại: https://www.mongodb.com/cloud/atlas
   - Chỉ cần email là được

### **Kiểm Tra Cài Đặt**

Mở **Command Prompt** hoặc **PowerShell** và chạy các lệnh này:

```bash
node --version
```
Nếu hiển thị số phiên bản (vd: v18.0.0) → ✅ Node.js cài đúng

```bash
npm --version
```
Nếu hiển thị số phiên bản → ✅ npm cài đúng

```bash
git --version
```
Nếu hiển thị số phiên bản → ✅ Git cài đúng

---

## 🚀 Bước 1: Tải Project Về Máy

### **Bước 1.1: Mở Command Prompt / PowerShell**

- **Windows**: Nhấn `Win + R`, gõ `cmd` và Enter
- **Hoặc**: Mở **Git Bash** (nếu cài Git)

### **Bước 1.2: Tải Project Từ GitHub**

Gõ lệnh này:
```bash
git clone https://github.com/LuongNhatTien/LuongNhatTien_2374802013071_shoppingonline.git
cd LuongNhatTien_2374802013071_shoppingonline
```

**Giải thích:** 
- `git clone` = Tải project từ GitHub về máy
- `cd` = Vào thư mục project

---

## 💾 Bước 2: Cài Đặt Dependencies (Thư Viện)

### **Cái này là gì?**
Dependencies = Các công cụ/thư viện mà dự án cần để chạy (giống như cần lắp ráp những chi tiết để hoàn thành máy)

### **Bước 2.1: Cài Đặt Backend (Server)**

```bash
cd server
npm install
```

**Giải thích:**
- `cd server` = Vào thư mục server
- `npm install` = Tải tất cả thư viện cần thiết
- ⏱️ Chờ ~2-3 phút tùy tốc độ internet

✅ **Khi xong** sẽ có thư mục `node_modules` xuất hiện (chứa tất cả thư viện)

### **Bước 2.2: Cài Đặt Admin Dashboard**

Mở **terminal mới** (Ctrl+` trong VS Code hoặc mở Command Prompt mới):
```bash
cd client-admin
npm install react-scripts@latest --save
```

✅ **Khi xong** sẽ có thư mục `node_modules`

### **Bước 2.3: Cài Đặt Customer App**

Mở **terminal mới**:
```bash
cd client-customer
npm install
```

✅ **Khi xong** sẽ có thư mục `node_modules`

---

## ⚙️ Bước 3: Cấu Hình Database (Lưu Dữ Liệu)

### **Database Là Gì?**
Database = Nơi lưu trữ tất cả dữ liệu (username, sản phẩm, đơn hàng, v.v.)

### **Bước 3.1: Kiểm Tra Thông Tin Kết Nối**

Mở file này bằng **VS Code**:
```
server/utils/MyConstants.js
```

Kiểm tra xem có thông tin MongoDB hay không:
```javascript
const MyConstants = {
    DB_SERVER: 'banhang.bywn4fs.mongodb.net',    // Địa chỉ server
    DB_USER: 'NhatTien11',                        // Tên đăng nhập
    DB_PASS: '11092005',                          // Mật khẩu
    DB_DATABASE: 'shoppingonline',                // Tên cơ sở dữ liệu
    // ... các settings khác
};
```

### **Bước 3.2: Nếu Muốn Dùng MongoDB Của Riêng Bạn**

1. Đăng ký **MongoDB Atlas**: https://www.mongodb.com/cloud/atlas
2. Tạo một Cluster (project)
3. Lấy Connection String
4. Thay thế thông tin trong `MyConstants.js`

### **Bước 3.3: Tạo Tài Khoản Admin**

**Cách dễ nhất**: Tạo qua giao diện sau khi chạy ứng dụng

**Nếu muốn tạo trước**:
1. Vào MongoDB Atlas
2. Click **Collections** → Database: `shoppingonline` → Collection: `admins`
3. Click **Insert Document** và paste:
```json
{
  "username": "admin",
  "password": "5d41402abc4b2a76b9719d911017c592"
}
```
> Password này là mật khẩu "hello" sau khi mã hóa (không cần nhớ nguyên tắc này)

---

## ▶️ Bước 4: Chạy Ứng Dụng (Quan Trọng Nhất!)

### **Cách Chạy Đơn Giản Nhất: 3 Terminal Chạy Đồng Thời**

**Tại sao 3 terminal?**
- Terminal 1: Chạy server (backend) - xử lý yêu cầu từ frontend
- Terminal 2: Chạy admin dashboard - giao diện quản lý
- Terminal 3: Chạy customer app - giao diện mua sắm

### **Terminal 1: Chạy Backend Server**

1. Mở **Terminal** trong VS Code (hoặc Command Prompt)
2. Gõ:
```bash
cd server
npm start
```

3. Chờ tới khi thấy:
```
Server running at http://localhost:5000
MongoDB connected
```

✅ **Server đã chạy!** Không đóng terminal này.

### **Terminal 2: Chạy Admin Dashboard**

1. Mở **terminal mới** (Ctrl+` hoặc chuột phải mở Terminal mới)
2. Gõ:
```bash
cd client-admin
npm start
```

3. Chờ khoảng 10-15 giây, browser sẽ tự mở trang:
```
http://localhost:3000/admin
```

✅ **Admin Dashboard chạy!**

### **Terminal 3: Chạy Customer App**

1. Mở **terminal mới**
2. Gõ:
```bash
cd client-customer
npm start
```

3. Browser sẽ tự mở trang:
```
http://localhost:3001
```

✅ **Customer App chạy!**

### **Hoàn Thành!**

Bây giờ bạn sẽ có:
- 🖥️ **Server** chạy ở: http://localhost:5000
- 👨‍💼 **Admin** chạy ở: http://localhost:3000/admin
- 👥 **Customer** chạy ở: http://localhost:3001

---

## 🔐 Bước 5: Đăng Nhập Admin

### **Tài Khoản Mặc Định:**
- **Username**: `admin`
- **Password**: `hello`

### **Hoặc Tạo Tài Khoản Mới:**

1. Vào: http://localhost:3000/admin
2. Click nút **"Create Account"**
3. Nhập username & password
4. Click **"REGISTER"**
5. Quay lại **"Back to Login"**
6. Đăng nhập bằng tài khoản vừa tạo

✅ **Đăng nhập thành công → Vào Admin Dashboard!**

---

## 📱 Sơ Đồ Ứng Dụng Hoạt Động

```
┌─────────────────────────────────────────────────────┐
│                  ADMIN DASHBOARD                     │
│             (Quản lý sản phẩm, đơn hàng)            │
│           http://localhost:3000/admin               │
└────────────────────┬────────────────────────────────┘
                     │
                     │ (Gửi/nhận dữ liệu)
                     ↓
┌─────────────────────────────────────────────────────┐
│               BACKEND SERVER                         │
│  (Xử lý yêu cầu, quản lý database)                 │
│              http://localhost:5000                  │
└────────────────────┬────────────────────────────────┘
                     │
     ┌───────────────┼───────────────┐
     ↓               ↓               ↓
┌─────────────┐ ┌─────────────┐ ┌──────────────┐
│  DATABASE   │ │   CUSTOMER  │ │ ADMIN LOGIN  │
│  (MongoDB)  │ │ MANAGEMENT  │ │  MANAGEMENT  │
└─────────────┘ └─────────────┘ └──────────────┘
```

---

## 📚 Giải Thích Các Thành Phần Chính

### **Backend (Server)**
- **Cái gì**: "Não" của ứng dụng
- **Việc làm**: Xử lý yêu cầu từ admin/khách hàng, quản lý database
- **Dùng**: Node.js + Express.js
- **Chạy ở**: http://localhost:5000

### **Admin Dashboard**
- **Cái gì**: Trang web để chủ cửa hàng quản lý
- **Việc làm**: Thêm/sửa/xóa sản phẩm, xem đơn hàng, quản lý danh mục
- **Dùng**: React.js (công nghệ tạo giao diện web)
- **Chạy ở**: http://localhost:3000/admin

### **Customer App**
- **Cái gì**: Trang web để khách hàng mua sắm
- **Việc làm**: Xem sản phẩm, thêm vào giỏ, đặt hàng
- **Dùng**: React.js
- **Chạy ở**: http://localhost:3001

### **Database (MongoDB)**
- **Cái gì**: Kho lưu trữ dữ liệu
- **Lưu gì**: Username, mật khẩu, sản phẩm, đơn hàng, khách hàng
- **Ở đâu**: Cloud (MongoDB Atlas) - không cần lo

---

## 🛠️ Các Lệnh API (Có Thể Dùng Postman)

### **Đăng Nhập Admin**
```bash
POST http://localhost:5000/api/admin/login
Body: {"username": "admin", "password": "hello"}
```

### **Tạo Admin Mới**
```bash
POST http://localhost:5000/api/admin/register
Body: {"username": "user123", "password": "pass123"}
```

### **Test Server**
```bash
GET http://localhost:5000/hello
```
Nếu hiển thị `{"message":"Hello from backend"}` → ✅ Server hoạt động

---

## ❌ Lỗi Thường Gặp & Cách Fix

### **Lỗi 1: "Port 5000 đã được sử dụng"**

**Nguyên nhân**: Có chương trình khác dùng port này

**Cách Fix (Windows)**:
```bash
# Tìm process dùng port 5000
netstat -ano | findstr :5000

# Kill process (thay PID bằng số in ra)
taskkill /PID <số-PID> /F
```

**Cách Fix (Mac/Linux)**:
```bash
lsof -ti:5000 | xargs kill -9
```

---

### **Lỗi 2: "CORS Error - Cannot read properties of undefined"**

**Nguyên nhân**: Frontend gọi API bị chặn hoặc server chưa cấu hình CORS

**Cách Fix**:
- ✅ Đã fix sẵn trong `server/server.js`
- Hãy restart server (`npm start`)

---

### **Lỗi 3: "MongoDB connection failed"**

**Nguyên nhân**: 
- Credentials sai
- Network Access chưa cho phép
- Internet không tốt

**Cách Fix**:
1. Kiểm tra `server/utils/MyConstants.js` (username, password đúng chưa?)
2. Vào MongoDB Atlas → Network Access → Thêm IP hiện tại
3. Kiểm tra kết nối internet

---

### **Lỗi 4: "react-scripts not found"**

**Cách Fix**:
```bash
cd client-admin
npm install react-scripts@latest --save
npm start
```

---

### **Lỗi 5: "Module not found"**

**Cách Fix** (Cách này chắc chắn hoạt động):
```bash
cd <thư-mục-bị-lỗi>
rm -r node_modules
rm package-lock.json
npm install
```

> ⏱️ Chờ ~2-3 phút

---

## 💡 Tips & Tricks Hữu Ích

### **1. Dùng MongoDB Compass Để Xem Dữ Liệu**
- Tải: https://www.mongodb.com/products/compass
- Dễ hơn xem trực tiếp trong browser
- Thấy rõ các collections, documents

### **2. Dùng Postman Để Test API**
- Tải: https://www.postman.com/
- Không cần gõ lệnh curl, có giao diện đẹp
- Test login, register dễ dàng

### **3. Xem Lỗi Frontend**
- Nhấn **F12** hoặc **Ctrl+Shift+I** trong browser
- Vào tab **Console** để xem lỗi
- Rất hữu ích để debug

### **4. Xem Lỗi Backend**
- Nhìn vào terminal chạy server
- Sẽ hiển thị logs chi tiết
- Giúp biết server bị lỗi gì

### **5. Khởi Động Lại Khi Có Lỗi**
```bash
# Đóng terminal (Ctrl+C)
# Sau đó:
npm start
```

---

## ❓ Câu Hỏi Thường Gặp

**Q: Node.js, npm là cái gì?**
A: Chúng giống "động cơ" cho JavaScript chạy ở máy tính. Node.js cho phép chạy JavaScript ngoài browser, npm giúp cài các thư viện cần thiết.

**Q: Port là cái gì?**
A: Port là "cửa" của máy tính. Mỗi ứng dụng cần một port riêng:
- Port 5000: Server backend
- Port 3000: Admin dashboard
- Port 3001: Customer app

**Q: Tôi muốn reset database?**
A: 
1. Vào MongoDB Atlas
2. Vào Collections
3. Xóa các documents (hoặc xóa cả collection)
4. App sẽ tạo lại khi cần

**Q: Có thể thay đổi port không?**
A: Có, nhưng không khuyên nếu bạn mới bắt đầu.

**Q: Tôi quên mật khẩu admin?**
A: Vào MongoDB Atlas → xóa documents admin → register tài khoản mới từ UI.

**Q: Làm sao để chia sẻ code với team?**
A: Push lên GitHub (như bạn đã làm). Team khác có thể `git clone` và cài dependencies.

**Q: Ứng dụng này bảo mật không?**
A: Hiện tại chỉ cho học tập. Để bảo mật hơn cần:
- Mã hóa mật khẩu tốt hơn
- HTTPS thay HTTP
- Xác thực 2 lớp (2FA)

---

## 📁 Cấu Trúc Thư Mục & Ý Nghĩa

```
LuongNhatTien_2374802013071_shoppingonline/        ← Thư mục chính
│
├── server/                                         ← Backend (Node.js)
│   ├── api/
│   │   └── admin.js                  ← API xử lý đăng nhập, register
│   ├── models/
│   │   ├── AdminDAO.js              ← Truy vấn database
│   │   └── Models.js                ← Cấu trúc dữ liệu (schema)
│   ├── utils/
│   │   ├── MongooseUtil.js          ← Kết nối MongoDB
│   │   ├── MyConstants.js           ← Thông tin cấu hình (MongoDB, email, JWT)
│   │   ├── JwtUtil.js               ← Tạo & kiểm tra token (bảo mật)
│   │   ├── CryptoUtil.js            ← Mã hóa mật khẩu
│   │   └── EmailUtil.js             ← Gửi email
│   ├── server.js                     ← File chính của server
│   └── package.json                  ← Danh sách thư viện cần dùng
│
├── client-admin/                                    ← Admin Dashboard (React)
│   ├── public/
│   │   └── index.html               ← HTML ban đầu
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoginComponent.js    ← Trang đăng nhập & đăng ký
│   │   │   ├── MainComponent.js     ← Layout chính
│   │   │   ├── MenuComponent.js     ← Menu điều hướng
│   │   │   └── HomeComponent.js     ← Dashboard
│   │   ├── contexts/
│   │   │   ├── MyContext.js         ← Global state (lưu token, username)
│   │   │   └── MyProvider.js        ← Cung cấp context cho toàn app
│   │   ├── App.js                   ← Component chính
│   │   └── index.js                 ← Entry point (điểm bắt đầu)
│   └── package.json                  ← Danh sách thư viện React cần dùng
│
├── client-customer/                                 ← Customer App (React)
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/              ← Các thành phần giao diện
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── README.md                          ← Hướng dẫn này
├── package.json                       ← Cấu hình của toàn project
└── .gitignore                         ← File không cần push lên GitHub
```

---

## 🗄️ Database Collections (Bảng Dữ Liệu)

| Collection | Mục Đích | Ví Dụ Dữ Liệu |
|-----------|---------|----------------|
| **admins** | Lưu tài khoản admin | `{username: "admin", password: "5d41..."}` |
| **categories** | Danh mục sản phẩm | `{name: "Điện thoại"}`, `{name: "Laptop"}` |
| **customers** | Thông tin khách hàng | `{username: "user1", email: "user@gmail.com"}` |
| **products** | Sản phẩm bán | `{name: "iPhone 14", price: 20000000, image: "..."}` |
| **orders** | Đơn hàng khách | `{customer: {...}, items: [...], total: 50000000}` |

---

## 🚀 Các Công Nghệ Sử Dụng

### **Backend**
| Công Nghệ | Mục Đích | Giải Thích |
|-----------|---------|-----------|
| **Node.js** | Runtime | Chạy JavaScript ở máy tính |
| **Express.js** | Framework | Tạo API, quản lý routes |
| **MongoDB** | Database | Lưu trữ dữ liệu |
| **Mongoose** | ODM | Giúp tương tác với MongoDB |
| **JWT** | Authentication | Xác thực người dùng (token) |
| **MD5** | Encryption | Mã hóa mật khẩu |

### **Frontend**
| Công Nghệ | Mục Đích | Giải Thích |
|-----------|---------|-----------|
| **React** | Framework | Tạo giao diện web động |
| **React Router** | Routing | Chuyển trang mà không reload |
| **Context API** | State Management | Lưu trữ dữ liệu toàn app |

---

## 🎓 Hộp Thoại Phát Triển Tiếp Theo

Hiện tại đã hoàn thành:
1. ✅ Setup toàn bộ hệ thống
2. ✅ Kết nối MongoDB
3. ✅ Xây dựng API đăng nhập & đăng ký
4. ✅ Giao diện Admin đăng nhập

Cần làm tiếp:
5. ⏳ Quản lý sản phẩm (CRUD: Create, Read, Update, Delete)
6. ⏳ Quản lý danh mục
7. ⏳ Giao diện customer (xem sản phẩm, giỏ hàng)
8. ⏳ Tính năng thanh toán
9. ⏳ Quản lý đơn hàng
10. ⏳ Deploy lên server thực tế

---

## 📞 Cần Giúp?

### **Các Nguồn Tài Liệu Hữu Ích**

- **Node.js**: https://nodejs.org/en/docs/
- **React**: https://react.dev/
- **MongoDB**: https://docs.mongodb.com/
- **Express**: https://expressjs.com/

### **Tips Khi Gặp Lỗi**

1. 📖 Đọc error message kỹ (ở Terminal hoặc Console)
2. 🔍 Google lỗi đó
3. 🔄 Thử restart (đóng server, chạy lại)
4. 🗑️ Xóa `node_modules` & cài lại (tuyệt chiêu)
5. 📞 Hỏi bạn hoặc Stack Overflow

---

## ⭐ Mẹo Nâng Cao (Cho Ai Đã Biết Cơ Bản)

### **1. Dùng Nodemon Để Auto-Restart Server**
```bash
npm install --save-dev nodemon
# Rồi sửa package.json:
"scripts": { "start": "nodemon server.js" }
```

### **2. Dùng Environment Variables**
```bash
# Tạo file .env
DB_USER=youruser
DB_PASS=yourpass

# Dùng package dotenv
npm install dotenv
```

### **3. Dùng Postman Collection**
- Tạo file `.postman_collection.json`
- Import vào Postman
- Share với team

### **4. Dùng Docker (Để Deploy Dễ Hơn)**
- Tìm hiểu Docker
- Viết Dockerfile
- Có thể run trên bất kỳ máy nào

---

## 📝 Lưu Ý Quan Trọng

⚠️ **Không bao giờ:**
- Push mật khẩu thật lên GitHub
- Dùng production data để test
- Chia sẻ MongoDB credentials công khai

✅ **Luôn luôn:**
- Commit code thường xuyên
- Viết comments giải thích code
- Test kỹ trước khi deploy
- Backup database

---

## 🎉 Chúc Mừng!

Bạn đã có một ứng dụng e-commerce hoàn chỉnh! 🛍️

**Bước tiếp theo:**
- Thêm tính năng (giỏ hàng, thanh toán, v.v.)
- Tối ưu giao diện (CSS, responsive)
- Deploy lên internet (Heroku, Vercel, AWS)
- Chia sẻ với bạn bè 👥

Chúc bạn code vui vẻ! 🚀
