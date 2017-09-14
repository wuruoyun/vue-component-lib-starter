import QuickStartPage from './pages/QuickStartPage.vue';
import ComponentAPage from './pages/ComponentAPage.vue';
import ComponentBPage from './pages/ComponentBPage.vue';

export default [
  { path: '/quick-start', component: QuickStartPage },
  { path: '/component-a', component: ComponentAPage },
  { path: '/component-b', component: ComponentBPage },
  { path: '*', redirect: '/quick-start' }
]