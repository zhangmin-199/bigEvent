const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
app.listen(3307, () => console.log('启动'));


// 配置应用级别的中间件
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// 加载路由模块
// app.use('前缀',require('xxxxx'));
app.use('/api', require(path.jion(__dirname, 'routers', 'login')));
app.use('/my/article', require(path.jion(__dirname, 'routers', 'category')));
app.use('/my/article', require(path.jion(__dirname, 'routers', 'article')));
app.use('/my', require(path.jion(__dirname, 'routers', 'user')));