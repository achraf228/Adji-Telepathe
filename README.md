# Adji Télépathe — Frontend React SPA

Site officiel bilingue (FR/EN) d'Adji Télépathe.
Stack : **React 18** · **Vite** · **Tailwind CSS** · **react-router-dom** · **react-i18next** · **Framer Motion** · **PWA**

---

## Architecture

```
adji-telepathe/
├── index.html                  # Point d'entrée HTML
├── vite.config.js              # Config Vite + PWA
├── tailwind.config.js          # Thème Tailwind (couleurs, polices, animations)
├── postcss.config.js
├── .env.example                # Variables d'environnement à copier
│
└── src/
    ├── main.jsx                # Bootstrap React
    ├── App.jsx                 # Router + Layout principal
    ├── index.css               # Tailwind base + composants CSS
    ├── i18n.js                 # Config i18next (FR/EN)
    │
    ├── lib/
    │   └── api.js              # Axios + tous les appels API Laravel
    │
    ├── hooks/
    │   └── useScrollAnimation.js  # Hooks d'animation au scroll
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Layout.jsx      # Wrapper global (Navbar + Outlet + Footer)
    │   │   ├── Navbar.jsx      # Navigation responsive + switcher langue
    │   │   └── Footer.jsx      # Footer avec liens + réseaux sociaux
    │   │
    │   ├── sections/
    │   │   ├── HeroSection.jsx     # Section hero page d'accueil
    │   │   ├── LatestSection.jsx   # Dernier projet musical
    │   │   └── NewsletterSection.jsx  # Inscription newsletter
    │   │
    │   └── ui/
    │       ├── index.jsx       # Composants réutilisables (Buttons, Skeleton…)
    │       └── SEOHead.jsx     # Helmet : title, meta, OG, hreflang
    │
    └── pages/
        ├── HomePage.jsx        # Accueil
        ├── BiographiePage.jsx  # Biographie
        ├── DiscographiePage.jsx # Discographie (Albums + Singles)
        ├── ClipsPage.jsx       # Clips vidéos (YouTube embed)
        ├── GaleriePage.jsx     # Galerie photos (filtres + lightbox)
        ├── ActualitesPage.jsx  # Actualités / Blog
        ├── EvenementsPage.jsx  # Concerts & Événements
        ├── PressePage.jsx      # Espace Presse (PDF + photos HD)
        ├── ContactPage.jsx     # Formulaire contact + reCAPTCHA
        └── NotFoundPage.jsx    # Page 404
```

---

## Installation

### Prérequis
- Node.js >= 18.x
- npm >= 9.x

### 1. Cloner le dépôt
```bash
git clone https://github.com/votre-repo/adji-telepathe.git
cd adji-telepathe
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer les variables d'environnement
```bash
cp .env.example .env
```
Remplir `.env` :
```
VITE_API_URL=http://localhost:8000/api
VITE_BASE_URL=https://adjitelepathe.com
VITE_RECAPTCHA_SITE_KEY=votre_cle_recaptcha
VITE_GA4_ID=G-XXXXXXXXXX
```

### 4. Lancer le serveur de développement
```bash
npm run dev
```
→ Ouvre http://localhost:5173

### 5. Build de production
```bash
npm run build
```
Les fichiers sont générés dans `dist/`.

### 6. Prévisualiser le build
```bash
npm run preview
```

---

## Déploiement sur Render

1. Pousser le code sur GitHub
2. Créer un **Static Site** sur Render
3. **Build Command** : `npm install && npm run build`
4. **Publish Directory** : `dist`
5. Ajouter les variables d'environnement dans Render Dashboard
6. Configurer la règle de réécriture pour le SPA :
   - Source : `/*`
   - Destination : `/index.html`
   - Action : **Rewrite**

---

## Routes du site

| Route | Page |
|-------|------|
| `/` | Accueil |
| `/biographie` | Biographie |
| `/discographie` | Discographie |
| `/clips` | Clips Vidéos |
| `/galerie` | Galerie Photos |
| `/actualites` | Actualités / Blog |
| `/evenements` | Événements / Concerts |
| `/presse` | Espace Presse |
| `/contact` | Contact |

---

## Connexion avec le backend Laravel

Toutes les requêtes API passent par `src/lib/api.js` via Axios.

Le backend doit exposer ces endpoints :

| Méthode | Route Laravel | Utilisation |
|---------|--------------|-------------|
| GET | `/api/albums` | Liste albums |
| GET | `/api/musiques` | Liste singles |
| GET | `/api/videos` | Clips YouTube |
| GET | `/api/galerie` | Photos galerie |
| GET | `/api/articles` | Articles blog |
| GET | `/api/evenements` | Concerts |
| POST | `/api/contact` | Formulaire contact |
| POST | `/api/newsletter/subscribe` | Inscription newsletter |
| GET | `/api/press/kit` | Dossier presse |

---

## SEO

- `react-helmet-async` : title, description, canonical, Open Graph, Twitter Cards
- Balises `hreflang` auto-générées (fr/en)
- Sitemap : à générer côté Laravel et soumettre à Google Search Console
- `robots.txt` : configurer côté Render

---

## PWA

Le site est installable sur mobile grâce à `vite-plugin-pwa`.
Ajouter les fichiers `pwa-192x192.png` et `pwa-512x512.png` dans `/public/`.

---

## Polices Google Fonts utilisées

- **Playfair Display** — Titres (display)
- **DM Sans** — Corps de texte
- **DM Mono** — Labels, metadata, uppercase

---

## Palette de couleurs

| Variable | Valeur | Usage |
|----------|--------|-------|
| `gold` | `#C9A84C` | Accent principal |
| `gold-light` | `#E8C96A` | Hover états |
| `dark` | `#0a0a0a` | Background principal |
| `dark-200` | `#1a1a1a` | Cartes |
| `dark-400` | `#2e2e2e` | Bordures |
