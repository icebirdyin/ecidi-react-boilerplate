###ecidi-react-boilerplate

*一个简单的环境有利于快速起步。*

#### 基础目录

所有目录性质的都小写开头。

1. `app/`：源代码根目录，用于存储功能性代码；
2. `docs/`：用于存放开发过程中产生的开发文档；
3. `server/`：服务器配置目录，用于存放配置服务器配置信息；

#### 基础业务逻辑目录

app文件夹内部所有功能组件性质的集合都大写开头。

1. `Ajax/`：用于存放所有请求；
  1. `GET/`：用于存放所有的`GET`请求；
    1. `[name].js`：用于存放对应的`GET`方法，`[name]`为`restful api`最后一个单词；
  2. `POST/`：用于存放所有的`POST`请求；
  3. `PUT/`：用于存放所有的`GET`请求；
  4. `PATCH/`：用于存放所有的`PATCH`请求；
  5. `DELETE/`：用于存放所有的`DELETE`请求；
2. `Components/`：用于存放所有全局使用的`UI`组件，如顶部导航栏，底部页脚栏等；
3. `Pages/`：用于存放所有拥有独立`url`的页面文件，需与`app.js`中的`router`配置相匹配；
  1. `HomePage/`：用于存放`HomePage`该页面相关的代码；
    1. `index.js`: `HomePage`相关页面代码；
    2. `styles.css`：`HomePage`相关样式代码；
    3. `tests/`：`HomePage`相关测试代码；
        1. `index.test.js`：`HomePage`相关页面测试代码；
4. `app.js`：客户端入口及路由配置文件；

#### 基础指令

`$ npm install`

`$ npm run start`

打开游览器，地址栏输入 http://localhost:8080；

如何变动端口号：

变动 webpack.dev.config.js 以及 server.js 当中的端口号。

<br>
<br>
<br>
<br>
-- 本着一颗简单的心来完成简单的事情



