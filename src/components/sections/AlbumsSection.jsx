import { useTranslation } from 'react-i18next'
import { ShoppingCart, Music } from 'lucide-react'
import { useState } from 'react'

export default function AlbumsSection() {
  const { t } = useTranslation()
  const [albums] = useState([
    {
      id: 1,
      title: 'Album Title',
      artist: 'Adji Télépathe',
      price: 5000,
      image: 'https://via.placeholder.com/250x250?text=Album+1',
      tracks: 12,
    },
    {
      id: 2,
      title: 'Second Album',
      artist: 'Adji Télépathe',
      price: 5000,
      image: 'https://via.placeholder.com/250x250?text=Album+2',
      tracks: 14,
    },
    {
      id: 3,
      title: 'Latest Release',
      artist: 'Adji Télépathe',
      price: 5000,
      image: 'https://via.placeholder.com/250x250?text=Album+3',
      tracks: 10,
    },
  ])

  return (
    <section className="mb-20">
      <div className="mb-12">
        <h2 className="text-3xl font-display font-bold mb-2 flex items-center gap-3">
          <Music className="w-8 h-8 text-gold" />
          {t('marketplace.albums')}
        </h2>
        <p className="text-white/60">{t('marketplace.albumsDescription')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {albums.map((album) => (
          <div
            key={album.id}
            className="group bg-dark-400/50 border border-dark-300 hover:border-gold transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-gold/20"
          >
            {/* Album Cover */}
            <div className="relative overflow-hidden bg-dark-300 aspect-square">
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Album Info */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-1 line-clamp-2">{album.title}</h3>
              <p className="text-white/60 text-sm mb-4">{album.artist}</p>
              <p className="text-white/50 text-xs mb-4">{album.tracks} {t('marketplace.tracks')}</p>

              {/* Price and Button */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gold">{album.price} FCFA</span>
                <button className="bg-gold text-dark px-4 py-2 hover:bg-gold/80 transition-colors flex items-center gap-2 font-semibold">
                  <ShoppingCart className="w-4 h-4" />
                  {t('marketplace.buy')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
