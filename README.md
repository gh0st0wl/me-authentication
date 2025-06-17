# Express & MongoDB Kimlik Doğrulama API'si | Authentication API

Bu proje, **Express.js** ve **MongoDB** kullanılarak yapılmış basit bir kullanıcı girişi (authentication) sistemidir.  
This is a simple user login (authentication) system built with **Express.js** and **MongoDB**.

---

## 🚀 Özellikler | Features

- Kullanıcı girişi (login)  
  User login  
- JWT token üretimi  
  JWT token generation  
- Şifreleri bcrypt ile hashleme  
  Password hashing with bcrypt  
- Token doğrulama middleware’i  
  Token verification middleware  

---

## 📦 Gereksinimler | Requirements

- Node.js (v16 veya üstü)  
  Node.js (v16 or higher)  
- MongoDB bağlantısı  
  MongoDB connection  
- `.env` dosyası  
  `.env` file for config  

---

## ⚙️ Kurulum | Installation

```bash
# Repo'yu klonla | Clone the repository
git clone https://github.com/kullaniciadi/me-authentication.git
cd me-authentication

# Bağımlılıkları yükle | Install dependencies
npm install

# Ortam dosyasını oluştur | Create environment file
touch .env
