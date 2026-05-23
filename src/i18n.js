import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        bio: 'Biographie',
        music: 'Musique',
        videos: 'Clips',
        gallery: 'Galerie',
        news: 'Actualités',
        events: 'Événements',
        press: 'Presse',
        marketplace: 'Boutique',
        contact: 'Contact',
      },
      home: {
        latest: 'Dernier album',
        latest_sub: 'Le nouvel album "Guérison" est maintenant disponible sur toutes les plateformes de streaming. Plongez dans l\'univers unique d\'Adji Télépathe.',
      },
      hero: {
        latest: 'Dernier album',
        welcome: "Bienvenue sur le site officiel de",
        tagline: 'Ne manquez aucune actualité d\'Adji Telepathe',
        discover: 'Découvrir',
        listen: 'Écouter maintenant',
      },
      bio: {
        title: 'Biographie',
        subtitle: 'L\'histoire d\'Adji Télépathe',
        text1: 'Né le 4 décembre 1996, Adji Télépathe débute sa carrière en 2014. En 2015, il remporte le concours "Jeune Talent" organisé par King Bala, ouvrant la voie à ses premières collaborations professionnelles. Après une pause pour ses études en 2019, il revient en 2022 avec le succès "Afissa", produit par Marlins Thavibe, qui le révèle au grand public.',
        text2: 'Son ascension s\'accélère en 2023 avec MANSA GROUPE. Il enchaîne les hits comme "La Différence" et "Aïcha", dont le clip dépasse le million de vues. En 2024, il remplit le Palais des Congrès de Kara, le CETEF de Lomé et le stade de Sokodé devant plus de 20 000 spectateurs.',
        text3: 'L\'année 2025 est marquée par le phénomène "Mobodé" et son sacre aux Kara Music Awards avec le prestigieux KMA d\'Or. Avec son premier album "Guérison" sorti le 11 septembre 2025, Telepathe affirme son ambition d\'exporter sa musique au-delà des frontières togolaises et de conquérir la scène africaine.',
      },
      music: {
        title: 'Discographie',
        subtitle: 'Albums & Singles',
        listen: 'Écouter',
        spotify: 'Spotify',
        youtube: 'YouTube',
      },
      videos: {
        title: 'Clips Vidéos',
        subtitle: 'Univers visuel',
        watch: 'Regarder',
      },
      gallery: {
        title: 'Galerie',
        subtitle: 'Photos officielles',
        all: 'Tout',
        promo: 'Promotionnelles',
        concert: 'Concerts',
        backstage: 'Backstage',
      },
      news: {
        title: 'Actualités',
        subtitle: 'Dernières nouvelles',
        readMore: 'Lire la suite',
      },
      events: {
        title: 'Événements',
        subtitle: 'Concerts & Dates',
        next: 'Prochain concert',
        past: 'Passés',
        upcoming: 'À venir',
        reserve: 'Réserver',
      },
      newsletter: {
        title: 'Restez connecté',
        subtitle: 'Recevez les dernières nouvelles, sorties et dates de concerts directement dans votre boîte mail.',
        placeholder: 'Votre adresse email',
        subscribe: 'S\'abonner',
        success: 'Merci ! Vous êtes maintenant abonné.',
        error: 'Une erreur est survenue. Réessayez.',
      },
      press: {
        title: 'Espace Presse',
        subtitle: 'Ressources pour les médias',
        download: 'Télécharger le dossier de presse',
        contact: 'Contact presse',
        bio_short: 'Biographie courte',
        bio_long: 'Biographie longue',
        photos_hd: 'Photos HD',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Booking & Management',
        name: 'Nom complet',
        email: 'Email',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer',
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi. Réessayez.',
        whatsapp: 'WhatsApp Booking',
        booking: 'Booking & Management',
      },
      marketplace: {
        title: 'Boutique',
        description: 'Découvrez et achetez les albums officiels d\'Adji Télépathe et sa collection de merchandise exclusive.',
        albums: 'Albums',
        albumsDescription: 'Les albums d\'Adji Télépathe en version numérique et physique',
        merchandise: 'Merchandise',
        merchandiseDescription: 'Vêtements, accessoires et articles officiels',
        tracks: 'titres',
        buy: 'Acheter',
        colors: 'Couleurs disponibles',
      },
      meta: {
        marketplace: 'Boutique officielle d\'Adji Télépathe',
      },
      footer: {
        rights: 'Tous droits réservés',
        made: 'Site officiel',
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        bio: 'Biography',
        music: 'Music',
        videos: 'Videos',
        gallery: 'Gallery',
        news: 'News',
        events: 'Events',
        press: 'Press',
        marketplace: 'Store',
        contact: 'Contact',
      },
      home: {
        latest: 'Latest Album',
        latest_sub: 'The new album "Guérison" is now available on all streaming platforms. Dive into the unique world of Adji Télépathe.',
      },
      hero: {
        latest: 'Latest Album',
        welcome: "Welcome to the official website of Adji Télépathe",
        tagline: 'Don\'t miss any news from Adji Telepathe',
        discover: 'Discover',
        listen: 'Listen now',
      },
      bio: {
        title: 'Biography',
        subtitle: 'The story of Adji Télépathe',
        text1: 'Born on December 4, 1996, Adji Télépathe began his career in 2014. In 2015, he won the "Jeune Talent" competition organized by King Bala, paving the way for his first professional collaborations. After a break for university in 2019, he returned in 2022 with the hit "Afissa", produced by Marlins Thavibe, which introduced him to a wider audience.',
        text2: 'His rise accelerated in 2023 with MANSA GROUPE. He released successive hits such as "La Différence" and "Aïcha", with the latter exceeding one million views. In 2024, he confirmed his stardom by filling major venues in Kara, Lomé, and Sokodé before over 20,000 fans.',
        text3: '2025 was marked by the viral phenomenon "Mobodé" and his victory at the Kara Music Awards, winning the prestigious Golden KMA. With his debut album "Guérison" released on September 11, 2025, Telepathe affirms his ambition to export his music beyond Togolese borders and conquer the African music scene.',
      },
      music: {
        title: 'Discography',
        subtitle: 'Albums & Singles',
        listen: 'Listen',
        spotify: 'Spotify',
        youtube: 'YouTube',
      },
      videos: {
        title: 'Music Videos',
        subtitle: 'Visual universe',
        watch: 'Watch',
      },
      gallery: {
        title: 'Gallery',
        subtitle: 'Official photos',
        all: 'All',
        promo: 'Promotional',
        concert: 'Concerts',
        backstage: 'Backstage',
      },
      news: {
        title: 'News',
        subtitle: 'Latest updates',
        readMore: 'Read more',
      },
      events: {
        title: 'Events',
        subtitle: 'Concerts & Dates',
        next: 'Next concert',
        past: 'Past',
        upcoming: 'Upcoming',
        reserve: 'Reserve',
      },
      newsletter: {
        title: 'Stay connected',
        subtitle: 'Receive the latest news, releases and concert dates directly to your inbox.',
        placeholder: 'Your email address',
        subscribe: 'Subscribe',
        success: 'Thank you! You are now subscribed.',
        error: 'An error occurred. Please try again.',
      },
      press: {
        title: 'Press Room',
        subtitle: 'Media resources',
        download: 'Download press kit',
        contact: 'Press contact',
        bio_short: 'Short biography',
        bio_long: 'Full biography',
        photos_hd: 'HD Photos',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Booking & Management',
        name: 'Full name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send',
        success: 'Message sent successfully!',
        error: 'Error sending message. Try again.',
        whatsapp: 'WhatsApp Booking',
        booking: 'Booking & Management',
      marketplace: {
        title: 'Store',
        description: 'Discover and buy official albums from Adji Télépathe and his exclusive merchandise collection.',
        albums: 'Albums',
        albumsDescription: 'Adji Télépathe albums in digital and physical format',
        merchandise: 'Merchandise',
        merchandiseDescription: 'Official clothing, accessories and items',
        tracks: 'tracks',
        buy: 'Buy',
        colors: 'Available colors',
      },
      meta: {
        marketplace: 'Official store of Adji Télépathe',
      },
      },
      footer: {
        rights: 'All rights reserved',
        made: 'Official website',
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    detection: {
      order: ['querystring', 'cookie', 'navigator'],
      lookupQuerystring: 'lang',
    },
    interpolation: { escapeValue: false }
  })

export default i18n
