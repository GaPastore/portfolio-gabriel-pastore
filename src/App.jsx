import { createRouter, RootRoute, Route, RouterProvider } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useTranslation } from "react-i18next"
import "./i18n/i18n"
import Home from './pages/Home'
import Audiovisual from './pages/Audiovisual'
import CienciaDaComputacao from './pages/CienciaDaComputacao'
import Desenhos from './pages/Desenhos'
import Shot from './pages/Shot'
import Contato from './pages/Contato'
import Menu from './components/Menu'

function RootLayout() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const savedLang = localStorage.getItem("lang")
    if (savedLang) {
      i18n.changeLanguage(savedLang)
    }
  }, [])

  return (
    <>
      <Menu />
    </>
  )
}

const rootRoute = new RootRoute({
  component: RootLayout,
})

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const audiovisualRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/audiovisual',
  component: Audiovisual,
})

const cienciaRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/ciencia_da_computacao',
  component: CienciaDaComputacao,
})

const desenhos Route = new Route({
  getParentRoute: () => rootRoute,
  path: '/desenhos',
  component: Desenhos,
})

const shotRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/shot',
  component: Shot,
})

const contatoRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/contato',
  component: Contato,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  audiovisualRoute,
  cienciaRoute,
  desenhosRoute,
  shotRoute,
  contatoRoute,
])

const router = createRouter({
  routeTree,
  basepath: '/portfolio-gabriel-pastore',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return <RouterProvider router={router} />
}

export default App
