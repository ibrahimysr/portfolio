# 🚀 İbrahim Yaşar - Portfolio Website

Modern ve interaktif kişisel portfolio web sitesi. 3D grafik efektleri, animasyonlar ve responsive tasarım ile dikkat çekici bir kullanıcı deneyimi sunar.

![Portfolio Preview](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Özellikler

### 🎨 Kullanıcı Arayüzü
- **3D Animasyonlar**: Three.js ile interaktif 3D bilgisayar ve dünya modelleri
- **Smooth Animations**: Framer Motion ile akıcı geçişler ve animasyonlar
- **Modern Design**: Gradient renkler, glassmorphism efektleri
- **Dark Theme**: Göz yormayan koyu tema
- **Responsive**: Tüm cihazlarda mükemmel görünüm

### 📱 Bölümler
1. **Hero** - 3D bilgisayar modeli ile tanıtım
2. **About** - Yetenekler ve hizmetler
3. **Skills** - 2D modern kartlarla teknoloji yığını (12+ teknoloji)
4. **Experience** - İş deneyimleri timeline (5 şirket)
5. **Education** - Akademik geçmiş (diploma style)
6. **Achievements** - Başarılar ve sertifikalar (6 sertifika)
7. **Projects** - Infinite slider ile projeler (12 proje)
   - Mobil uygulamalar (Play Store linkleri)
   - Web projeleri (Canlı site linkleri)
8. **Contact** - EmailJS entegrasyonu ile çalışan form
9. **Footer** - Sosyal medya linkleri ve navigasyon

### 🚀 Teknik Özellikler
- ⚡ Lightning-fast performance (Vite)
- 🎯 SEO optimized
- 📧 Çalışan contact formu (EmailJS)
- 🌟 Parçacık efektleri ve yıldız animasyonları
- 🎮 Interaktif 3D elementler
- 📱 Play Store entegrasyonu
- 🔗 GitHub ve canlı site linkleri
- 💾 Responsive tasarım

## 🛠️ Teknolojiler

### Frontend
- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### 3D & Graphics
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber

### Utilities
- **EmailJS** - Contact form email service
- **React Router DOM** - Client-side routing
- **React Vertical Timeline** - Timeline component

## 📦 Kurulum

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın:**
```bash
git clone https://github.com/ibrahimysr/portfolio.git
cd portfolio
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Environment variables oluşturun:**

`.env` dosyası oluşturun ve aşağıdaki bilgileri ekleyin:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Development sunucusunu başlatın:**
```bash
npm run dev
```

5. Tarayıcıda `http://localhost:5173` adresini açın

## 🔐 Environment Variables

Contact formunun çalışması için EmailJS credentials gereklidir:

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

### EmailJS Kurulumu

1. [EmailJS](https://www.emailjs.com/) hesabı oluşturun
2. Email service ekleyin (Gmail, Outlook, vb.)
3. Email template oluşturun
4. API keys'i alın
5. `.env` dosyasına ekleyin

## 📁 Proje Yapısı

```
portfolio/
├── public/
│   ├── cv.pdf              # CV dosyası
│   ├── logo.png            # Logo
│   ├── desktop_pc/         # 3D bilgisayar modeli
│   └── planet/             # 3D dünya modeli
├── src/
│   ├── assets/
│   │   ├── company/        # Şirket logoları
│   │   ├── tech/           # Teknoloji ikonları
│   │   └── index.js        # Asset exports
│   ├── components/
│   │   ├── canvas/         # 3D components
│   │   │   ├── Computers.jsx
│   │   │   ├── Earth.jsx
│   │   │   └── Stars.jsx
│   │   ├── About.jsx       # About section
│   │   ├── Contact.jsx     # Contact form
│   │   ├── Education.jsx   # Education section
│   │   ├── Experience.jsx  # Work experience
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Navbar.jsx      # Navigation
│   │   ├── Tech2D.jsx      # Skills section
│   │   ├── WorksInfinite.jsx # Projects slider
│   │   ├── Achievements.jsx # Achievements
│   │   ├── Footer.jsx      # Footer
│   │   └── index.js        # Component exports
│   ├── constants/
│   │   └── index.js        # Data & configuration
│   ├── hoc/
│   │   └── SectionWrapper.jsx # HOC for sections
│   ├── utils/
│   │   └── motion.js       # Animation variants
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── .env                    # Environment variables
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.cjs     # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🎨 Özelleştirme

### Kişisel Bilgileri Güncelleme

**1. Genel Bilgiler (`src/constants/index.js`):**
```javascript
// Servisler, teknolojiler, deneyimler, projeler, eğitim, sertifikalar
export const navLinks = [...];
export const services = [...];
export const technologies = [...];
export const experiences = [...];
export const projects = [...];
export const education = [...];
export const achievements = [...];
export const certifications = [...];
```

**2. Sosyal Medya Linkleri:**
- `src/components/Hero.jsx` - Hero section social links
- `src/components/Footer.jsx` - Footer social links

**3. CV Dosyası:**
- `public/cv.pdf` - Kendi CV'nizi ekleyin

**4. Logo:**
- `public/logo.png` - Navbar logosu
- `src/assets/logo.png` - Asset logosu

### Renkleri Değiştirme

`tailwind.config.cjs` dosyasında:
```javascript
colors: {
  primary: "#050816",
  secondary: "#aaa6c3",
  tertiary: "#151030",
  "black-100": "#100d25",
  "black-200": "#090325",
  "white-100": "#f3f3f3",
},
```

## 🚀 Deploy

### Vercel (Önerilen)

1. [Vercel](https://vercel.com) hesabı oluşturun
2. Repository'nizi bağlayın
3. Environment variables ekleyin
4. Deploy butonuna tıklayın

```bash
# Vercel CLI ile
npm install -g vercel
vercel
```

### Netlify

1. [Netlify](https://netlify.com) hesabı oluşturun
2. Repository'nizi bağlayın
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Environment variables ekleyin

### GitHub Pages

```bash
# Build
npm run build

# Deploy
npm run deploy
```

## 📊 Performans

- ⚡ Lighthouse Score: 90+
- 🎯 First Contentful Paint: < 1.5s
- 🚀 Time to Interactive: < 3s
- 📱 Mobile-friendly: Yes
- ♿ Accessibility: WCAG 2.1 AA

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📝 Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 📧 İletişim

**İbrahim Yaşar**
- 📧 Email: ibrahimyasar2701@gmail.com
- 💼 LinkedIn: [ibrahimysr](https://www.linkedin.com/in/ibrahimysr/)
- 🐙 GitHub: [ibrahimysr](https://github.com/ibrahimysr)
- 📷 Instagram: [ibrahimysr.00](https://www.instagram.com/ibrahimysr.00/)

## 🙏 Teşekkürler

Bu projeyi geliştirirken kullanılan açık kaynak kütüphaneler ve topluluk için teşekkürler:

- [React](https://reactjs.org/)
- [Three.js](https://threejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)

---

⭐ **Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

Made with ❤️ by [İbrahim Yaşar](https://github.com/ibrahimysr)

