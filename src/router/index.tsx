import React from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

//这种方式会被打包成一个文件，加载其中某个页面会导入整个文件，需优化
// import Discover from '@/views/discover'
// import Mine from '@/views/mine'
// import Focus from '@/views/focus'
// import Download from '@/views/download'

//路由懒加载
const Discover = React.lazy(() => import('@/views/discover'))
const Recommend = React.lazy(() => import('@/views/discover/c-views/recommend'))
const Ranking = React.lazy(() => import('@/views/discover/c-views/ranking'))
const Songs = React.lazy(() => import('@/views/discover/c-views/songs'))
const Djradio = React.lazy(() => import('@/views/discover/c-views/djradio'))
const Artist = React.lazy(() => import('@/views/discover/c-views/artist'))
const Album = React.lazy(() => import('@/views/discover/c-views/album'))

const Mine = React.lazy(() => import('@/views/mine'))
const Focus = React.lazy(() => import('@/views/focus'))
const Download = React.lazy(() => import('@/views/download'))
const Demo = React.lazy(() => import('@/views/demo'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/demo',
    element: <Demo />
  }
]

export default routes
