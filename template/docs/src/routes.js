import QuickStart from './pages/QuickStart.md'
import ComponentA from './pages/ComponentA.md'
import ComponentB from './pages/ComponentB.md'

export default [
  { path: '/quick-start', component: QuickStart },
  { path: '/component-a', component: ComponentA },
  { path: '/component-b', component: ComponentB },
  { path: '*', redirect: '/quick-start' }
]
