import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Layout from './pages/Layout/Layout'
import Services from "./pages/Services/Services"
import Projects from "./pages/Projects/Projects"
import News from "./pages/News/News"
import Shop from "./pages/Shop/Shop"
function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="services" element={<Services />} />
      <Route path="projects" element={<Projects />} />
      <Route path="news" element={<News />} />
      <Route path="shop" element={<Shop />} />
      {/* Add other routes as needed */}
    </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App
