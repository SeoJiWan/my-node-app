// index.js
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello CI/CD! gitlab runner 등록 성공!!!!! 개인 서버 기반 GitLab CI/CD 구축'));
app.listen(port, () => console.log(`Server running on port ${port}`));