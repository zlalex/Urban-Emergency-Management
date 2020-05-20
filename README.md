# project

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

### 基础结构

项目的基础结构，包含
  接口、数据模型管理 api requestMethod models mappers
  静态资源 assets iconfont style utils plugins
  路由、数据流管理 router store
  组件、页面管理 components pages

#### api
api.js 与 pages.vue 一一对应，例如login.js 中的方法包含了 login.vue 中所有应用的接口。

api.js 引入 axios 再封装的函数，返回接口结果。

api-url.js 是服务端所有接口的集合，如果服务端接口变化，就只需要变化接口的映射关系。

api-host.js 处理不同开发环境下的host，可能存在不同的开发环境对应不同host，由于脚手架本地代理的支持，默认情况host为 / 特殊情况是ip地址。

api-mock.js mock开发环境下时，mock-url为public文件下的mock.json, 作用等同于api-url.js.

api-prod.js 服务端接口地址，作用等同于api-url.js。

api-prefix.js 对应处理不同开发环境下的共同的接口前缀。

#### requestMethod
requestMethod是对axios或fetch的封装处理，返回get、post或更多的请求方法，请求方法接受url和params。作用提供api.js接口调用。

request.config.js 处理封装的参数，默认的host、请求头等配置。

request.factory.js 对request前后拦截、cancel处理，并且处理不同的code码。