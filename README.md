# Urban Emergency Management

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## About
项目前端资源目录及说明
```
├── src                        // 源代码
│   ├── api                    // 所有请求：api 与 views 文件一一对应
│   ├── assets                 // 主题、字体等静态资源
│   ├── axios                  // axios 封装：default config, interface, factory axios
│   ├── components             // 全局公用组件
│   │   ├── package            // 组件：表单组件，单功能组件
│   │   ├── widget             // 挂件：多功能挂件
│   │   └── elements.js        // element-ui 按需加载
│   ├── config                 // 全局配置文件
│   │   └── config.js          // 全局配置：常量, 正则
│   ├── echarts                // echarts：echarts 按需加载
│   ├── iconfont               // 字体图标
│   ├── router                 // 路由
│   ├── store                  // 全局 store 管理
│   ├── styles                 // 全局样式
│   │   ├── components         // 组件样式
│   │   ├── views              // 页面样式
│   │   ├── _variable.styl     // 样式变量
│   │   ├── common.styl        // 公共基础样式
│   │   └── index.styl         // 全局样式引入
│   ├── utils                  // 全局公用方法
│   │   ├── index.js           // utils 入口：公共方法及 utils 入口
│   │   └── register.js        // 挂载：vue.prototype 挂载或 window 挂载
│   ├── views                  // view：多页面、模块
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   └── permission.js          // 权限管理
├── public                     // 静态资源
│   ├── mock                   // mock 模拟数据
│   ├── index.html             // html 模板
│   └── favicon.ico            // 网页标签图标
├── .eslintrc.js               // eslint 配置项
├── babel.config.js            // babel-loader 配置项
├── tsconfig.json              // typescript 配置项
├── vue.config.js              // vue-cli3 配置项
└── package.json               // package.json
```

