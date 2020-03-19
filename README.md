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

## 编码风格
```js
// 声明单一变量，无需换行
// 声明多个变量，空一行
// 方法之间空一行
// 注释前空一行
// 逻辑判断前后空一行
// 避免不必要的注释内容，变量名称、函数名称尽可能表现行为
// 避免长函数（方法），原则是一个方法只处理一种逻辑
// let 声明的变量将被更新/覆盖
// const 声明的变量不允许修改/覆盖
// const 声明的大写变量为常量
// class 声明构造函数
// function 声明返回值void方法
// const variable = function (){} 函数表达式 声明参数与具体返回值的方法（存在与function混用）
// _toString/_slice/_typeof/_str 原型方法/函数内私有变量
// __methods 集合
// [tag] 注释标签
// [强调]：编码习惯对于个人（我）而言，只是帮助个人（我）快速开发与阅读的风格，利于将来重新阅读时快速回忆代码逻辑的思路。
// [强调]：该编码习惯不作任何推广，对其他开发者可能不友好，特此声明。
// P.S. 关于编码风格约束，推荐阅读《编写可维护的JavaScript》
// @copyright zhouliang@126.com
```

## api的管理思考
常规的前端项目的api管理，可能是由前端集中管理一套路由路径，服务端通过切换服务器、再改本机host来实现开发、测试、生产等环境的数据交互。

这样有什么好处呢，前端的工作量减少了，省事儿。有什么坏处呢？1.联调阶段依赖服务端提供接口的质量，一旦联调遇阻，进度可能会停滞，增加项目延期的风险。2.前后端分离开发时，因为跨域影响，导致api管理不灵活。

当提出可能遇到的风险的时候，就要思考如何减少风险对项目进度的影响。

我是怎么做的呢，假设有三个运行环境，本地mock，开发联调环境，生产数据环境，例如：

```js
const url = {
	mock: {

	},
	dev: {

	},
	prod: {

	}
}
```