import { Link } from 'react-router-dom'
import { CyanButton } from '@/components/ui'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <div className="font-display text-[12rem] font-black text-gradient leading-none opacity-20 mb-8">
          404
        </div>
        <h1 className="font-display text-3xl font-bold text-white mb-4">Page introuvable</h1>
        <p className="font-body text-white/50 mb-8">Cette page n'existe pas ou a été déplacée.</p>
        <CyanButton href="/">← Retour à l'accueil</CyanButton>
      </div>
    </div>
  )
}
