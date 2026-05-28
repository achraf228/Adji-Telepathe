import { useTranslation } from 'react-i18next'
import { ShoppingCart, Package } from 'lucide-react'
import { useState } from 'react'

export default function MerchandiseSection() {
  const { t } = useTranslation()
  const [merchandise] = useState([
    {
      id: 1,
      name: 'T-Shirt classique',
      category: 'T-Shirt',
      price: 4000,
      image: 'https://via.placeholder.com/250x250?text=T-Shirt+1',
      colors: ['Black', 'White', 'Gold'],
    },
    {
      id: 2,
      name: 'Casquette',
      category: 'Casquette',
      price: 2500,
      image: 'https://via.placeholder.com/250x250?text=Cap',
      colors: ['Black', 'White'],
    },
    {
      id: 3,
      name: 'Pull-over à capuche',
      category: 'pull-over',
      price: 5000,
      image: 'https://via.placeholder.com/250x250?text=Hoodie',
      colors: ['Black', 'Navy', 'Gray'],
    },
    {
      id: 4,
      name: 'Pull-over sans capuche',
      category: 'Pull-over',
      price: 7000,
      image: 'https://via.placeholder.com/250x250?text=Poster',
      colors: ['Color'],
    },
    {
      id: 5,
      name: 'Jacket',
      category: 'Jacket',
      price: 4000,
      image: 'https://via.placeholder.com/250x250?text=Jacket',
      colors: ['Black'],
    },
    {
      id: 6,
      name: 'Complet personnalisé',
      category: 'Complet',
      price: 10000,
      image: 'https://via.placeholder.com/250x250?text=Mug',
      colors: ['White'],
    },
  ])

  return (
    <section>
      <div className="mb-12">
        <h2 className="text-3xl font-display font-bold mb-2 flex items-center gap-3">
          <Package className="w-8 h-8 text-cyan" />
          {t('marketplace.merchandise')}
        </h2>
        <p className="text-white/60">{t('marketplace.merchandiseDescription')}</p>
      </div>
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {merchandise.map((item) => (
          <div
            key={item.id}
            className="group bg-dark-400/50 border border-dark-300 hover:border-cyan transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-cyan/20"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden bg-dark-300 aspect-square">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-cyan text-dark px-3 py-1 text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.category}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              
              {/* Colors */}
              <div className="mb-4">
                <p className="text-white/50 text-xs mb-2">{t('marketplace.colors')}</p>
                <div className="flex gap-2">
                  {item.colors.map((color) => (
                    <span
                      key={color}
                      className="text-xs bg-dark-300 border border-dark-200 px-2 py-1 rounded text-white/70"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price and Button */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-cyan">{item.price} FCFA</span>
                <button className="bg-cyan text-dark px-4 py-2 hover:bg-cyan/80 transition-colors flex items-center gap-2 font-semibold">
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
