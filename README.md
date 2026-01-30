# 🛍️ Shopping Online - Hướng Dẫn Setup & Chạy Ứng Dụng

Đây là ứng dụng mua sắm trực tuyến với kiến trúc 3 tầng: **React Admin UI + React Customer UI + Node.js Backend**

---

## 📋 Yêu Cầu Trước Khi Bắt Đầu

- **Node.js & npm** cài đặt sẵn (Tải từ: https://nodejs.org/)
- **Git** (để clone project)
- **MongoDB Atlas account** (dùng cloud database) hoặc local MongoDB

**Kiểm tra cài đặt:**
```bash
node --version
npm --version
git --version
```

---

## 🚀 Bước 1: Setup Ban Đầu

### 1.1. Clone Project (nếu chưa có)
```bash
git clone <link-repo>
cd LuongNhatTien_2374802013071_shoppingonline
```

### 1.2. Cài Đặt Dependencies cho Backend
```bash
cd server
npm install
```

### 1.3. Cài Đặt Dependencies cho Admin Client
```bash
cd ../client-admin
npm install react-scripts@latest --save
```

### 1.4. Cài Đặt Dependencies cho Customer Client
```bash
cd ../client-customer
npm install
```

---

## ⚙️ Bước 2: Cấu Hình Database

### 2.1. Kiểm Tra MongoDB Connection String

Mở file `server/utils/MyConstants.js` và kiểm tra:

```javascript
const MyConstants = {
    DB_SERVER: 'banhang.bywn4fs.mongodb.net',
    DB_USER: 'NhatTien11',
    DB_PASS: '11092005',
    DB_DATABASE: 'shoppingonline',
    // ... các settings khác
};
```

**Nếu khác**, hãy update với credentials của MongoDB Atlas của bạn.

### 2.2. Tạo Tài Khoản Admin Ban Đầu (Tùy Chọn)

Bạn có thể:
- **Cách 1**: Tạo admin qua UI (Register button ở login page)
- **Cách 2**: Tạo trực tiếp trong MongoDB Atlas:
  1. Vào MongoDB Atlas
  2. Database: `shoppingonline`
  3. Collection: `admins`
  4. Insert Document:
  ```json
  {
    "username": "admin",
    "password": "5d41402abc4b2a76b9719d911017c592"
  }
  ```
  > Password là MD5 của "hello"

---

## 🎯 Bước 3: Chạy Ứng Dụng

### Lựa chọn A: Chạy 3 Terminal Riêng Biệt (Khuyên dùng)

#### Terminal 1 - Chạy Backend (Server)
```bash
cd server
npm start
```
✅ Kết quả: `Server running at http://localhost:5000`

#### Terminal 2 - Chạy Admin Dashboard
Mở terminal mới trong thư mục project:
```bash
cd client-admin
npm start
```
✅ Kết quả: Tự động mở `http://localhost:3000/admin`

#### Terminal 3 - Chạy Customer App
Mở terminal mới trong thư mục project:
```bash
cd client-customer
npm start
```
✅ Kết quả: Tự động mở `http://localhost:3001`

---

### Lựa chọn B: Chạy Trên Windows CMD (Lần Lượt)

**Terminal 1 - Backend:**
```cmd
cd server
npm start
```

**Terminal 2 - Admin:**
```cmd
cd client-admin
npm start
```

**Terminal 3 - Customer:**
```cmd
cd client-customer
npm start
```

---

## 📱 Truy Cập Ứng Dụng

| Tên | URL | Mô Tả |
|-----|-----|-------|
| **Admin Dashboard** | http://localhost:3000/admin | Quản lý hệ thống |
| **Customer App** | http://localhost:3001 | Mua sắm |
| **Backend API** | http://localhost:5000 | Server API |

---

## 🔐 Đăng Nhập Admin

**Tài khoản mặc định:**
- **Username**: `admin`
- **Password**: `hello`

**Hoặc tạo account mới:**
1. Vào http://localhost:3000/admin
2. Click "Create Account"
3. Nhập username & password
4. Click "REGISTER"
5. Quay lại "Login" và đăng nhập

---

## 🛠️ API Endpoints

### Admin Endpoints
- `POST /api/admin/login` - Đăng nhập
- `POST /api/admin/register` - Tạo tài khoản admin
- `GET /api/admin/token` - Kiểm tra token (cần Authorization header)

### Test API
```bash
# Test backend
curl http://localhost:5000/hello
# Kết quả: {"message":"Hello from backend"}
```

---

## ❌ Troubleshooting

### Lỗi: "Port đã sử dụng"
```bash
# Tìm process dùng port 5000 và kill
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5000 | xargs kill -9
```

### Lỗi: CORS Error
✅ Đã fix trong `server/server.js` - không cần lo

### Lỗi: MongoDB không kết nối
- Kiểm tra Network Access trong MongoDB Atlas
- Kiểm tra credentials trong `MyConstants.js`
- Kiểm tra internet connection

### Lỗi: "react-scripts not found"
```bash
cd client-admin
npm install react-scripts@latest --save
npm start
```

### Lỗi: Module not found
```bash
cd <thư-mục-lỗi>
rm -r node_modules
rm package-lock.json
npm install
```

---

## 📁 Cấu Trúc Thư Mục

```
LuongNhatTien_2374802013071_shoppingonline/
├── server/                    # Backend (Node.js + Express)
│   ├── api/
│   │   └── admin.js          # API endpoints
│   ├── models/
│   │   ├── AdminDAO.js       # Database queries
│   │   └── Models.js         # Mongoose schemas
│   ├── utils/
│   │   ├── MongooseUtil.js   # MongoDB connection
│   │   ├── MyConstants.js    # Configuration
│   │   ├── JwtUtil.js        # JWT authentication
│   │   ├── CryptoUtil.js     # MD5 hashing
│   │   └── EmailUtil.js      # Email sending
│   ├── server.js             # Main server file
│   └── package.json
│
├── client-admin/              # Admin Dashboard (React)
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoginComponent.js    # Login/Register
│   │   │   ├── MainComponent.js     # Main layout
│   │   │   ├── MenuComponent.js     # Navigation
│   │   │   └── HomeComponent.js     # Dashboard
│   │   ├── contexts/
│   │   │   ├── MyContext.js         # Global state
│   │   │   └── MyProvider.js        # Context provider
│   │   ├── App.js            # Main app
│   │   └── index.js          # Entry point
│   └── package.json
│
└── client-customer/           # Customer App (React)
    ├── src/
    │   ├── components/
    │   ├── App.js
    │   └── index.js
    └── package.json
```

---

## 🗄️ Database Collections (MongoDB)

- **admins** - Quản lý viên hệ thống
- **categories** - Danh mục sản phẩm
- **customers** - Khách hàng
- **products** - Sản phẩm
- **orders** - Đơn hàng

---

## 📚 Công Nghệ Sử Dụng

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JWT (Authentication)
- MD5 (Password hashing)

**Frontend:**
- React 18/19
- React Router
- Context API (State management)

---

## 🎓 Các Bước Phát Triển Tiếp Theo

1. ✅ Setup & chạy ứng dụng
2. ✅ Đăng nhập Admin
3. ⏳ Xây dựng Admin Dashboard (quản lý sản phẩm, danh mục)
4. ⏳ Xây dựng Customer App (xem sản phẩm, giỏ hàng, thanh toán)
5. ⏳ Kết nối frontend với backend API
6. ⏳ Deploy lên server

---

## 💡 Mẹo

- Dùng **MongoDB Compass** để xem dữ liệu: https://www.mongodb.com/products/compass
- Dùng **Postman** để test API: https://www.postman.com/
- Kiểm tra **Developer Console** (F12) để debug lỗi frontend
- Kiểm tra **Server Console** để xem logs backend

---

## ❓ Câu Hỏi Thường Gặp

**Q: Tôi muốn reset database?**
A: Xóa các collections trong MongoDB Atlas rồi app sẽ tạo lại khi cần.

**Q: Thay đổi port khác được không?**
A: Có, sửa trong `server.js` (backend) và `package.json` (frontend).

**Q: Làm sao để deploy lên production?**
A: Tìm hiểu về Heroku, Vercel, hoặc VPS hosting.

---

**Có vấn đề? Kiểm tra terminal logs hoặc Developer Console (F12) để debug!** 🚀
