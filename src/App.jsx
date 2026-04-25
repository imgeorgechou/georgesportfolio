import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Works from './pages/Works'
import AboutPage from './pages/AboutPage'
import ProjectDetail from './pages/ProjectDetail'
import ScrollManager from './components/ScrollManager'
import SplashIntro from './components/SplashIntro'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <SplashIntro />
      <div className="min-h-screen bg-paper text-ink grain-overlay">
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/works" element={<Works />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
