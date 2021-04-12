import Home from '../view/Home.vue'
// import Home from '../views/Home.vue'
// import ProductList from '../views/ProductList.vue'
// import ProductInfo from '../views/ProductInfo.vue'

export const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  }
]
//   {
//     path:'/Loginout',
//     redirect:'/Login'
//   },
//   {
//     path: '/Home',
//     name: 'Home',
//     component: Home,
//     children: [
//       {
//         path: '/ProductList',
//         name: 'ProductList',
//         component: ProductList,
//       },
//       {
//         path: '/ProductInfo',
//         name: 'ProductInfo',
//         component: ProductInfo,
//       }
//     ]
//   }
// ]