
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // 配置别名，对引用路径进行隐射
  // alias: {
  //   '@': require('path').resolve(__dirname, './src'),
  //   '@components': require('path').resolve(__dirname, './src/components'),
  // },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'myapp',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  theme: {
    'primary-color': '#3385ff',
    'font-size-base': '14px',
  },
  // routes: [
  //   { path: '/', component: './index' },
  //   { path: '/home', component: './Home/index' },
  // ],
  routes: [
    // { path: '/login', component: 'login' },
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: './index' },
        { path: '/home', component: './Home/index' },
      ],
    }, 
  ],
}
