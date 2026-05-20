import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true,
})

// Request interceptor — attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Response interceptor — handle 401
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('admin_token')
      window.location.href = '/admin/login'
    }
    return Promise.reject(err)
  }
)

export default api

// ─── Public endpoints ─────────────────────────────────────────────────────────
export const publicAPI = {
  getBio: () => api.get('/biographie'),
  getAlbums: (lang) => api.get('/albums', { params: lang ? { lang } : {} }),
  getMusiques: (lang) => api.get('/musiques', { params: lang ? { lang } : {} }),
  getVideos: () => api.get('/videos'),
  getGallerie: (cat) => api.get('/galerie', { params: { categorie: cat } }),
  getArticles: (page = 1, lang) => api.get('/articles', { params: { ...((page || page === 0) ? { page } : {}), ...(lang ? { lang } : {}) } }),
  getArticle: (slug) => api.get(`/articles/${slug}`),
  getEvenements: () => api.get('/evenements'),
  getPresseKit: () => api.get('/presse'),
  subscribeNewsletter: (email) => api.post('/newsletter/subscribe', { email }),
  sendContact: (data) => api.post('/contact', data),
}

export const musicAPI = {
  getAlbums: publicAPI.getAlbums,
  getSingles: publicAPI.getMusiques,
}

export const videoAPI = {
  getAll: publicAPI.getVideos,
}

export const galleryAPI = {
  getAll: publicAPI.getGallerie,
}

export const newsAPI = {
  getAll: (lang) => publicAPI.getArticles(1, lang),
  getArticle: publicAPI.getArticle,
}

export const eventsAPI = {
  getAll: publicAPI.getEvenements,
}

export const contactAPI = {
  send: publicAPI.sendContact,
}

// ─── Admin endpoints ───────────────────────────────────────────────────────────
export const adminAPI = {
  login: (creds) => api.post('/admin/login', creds),
  logout: () => api.post('/admin/logout'),
  getMessages: () => api.get('/admin/messages'),
  markMessageRead: (id) => api.put(`/admin/messages/${id}/read`),
  getSubscribers: () => api.get('/admin/newsletter'),
  sendNewsletter: (data) => api.post('/admin/newsletter/send', data),
  updateBio: (data) => api.put('/admin/biographie', data),
  createAlbum: (data) => api.post('/admin/albums', data),
  updateAlbum: (id, data) => api.put(`/admin/albums/${id}`, data),
  deleteAlbum: (id) => api.delete(`/admin/albums/${id}`),
  createMusique: (data) => api.post('/admin/musiques', data),
  updateMusique: (id, data) => api.put(`/admin/musiques/${id}`, data),
  deleteMusique: (id) => api.delete(`/admin/musiques/${id}`),
  createVideo: (data) => api.post('/admin/videos', data),
  deleteVideo: (id) => api.delete(`/admin/videos/${id}`),
  uploadPhoto: (data) => api.post('/admin/galerie', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  deletePhoto: (id) => api.delete(`/admin/galerie/${id}`),
  createArticle: (data) => api.post('/admin/articles', data),
  updateArticle: (id, data) => api.put(`/admin/articles/${id}`, data),
  deleteArticle: (id) => api.delete(`/admin/articles/${id}`),
  createEvenement: (data) => api.post('/admin/evenements', data),
  updateEvenement: (id, data) => api.put(`/admin/evenements/${id}`, data),
  deleteEvenement: (id) => api.delete(`/admin/evenements/${id}`),
  updatePresse: (data) => api.post('/admin/presse', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  updateContact: (data) => api.put('/admin/contact', data),
}
