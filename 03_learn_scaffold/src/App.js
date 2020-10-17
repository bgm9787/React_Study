import React from 'react';
import logo from './logo.svg';
import './App.css';

// yarn.lock文件：记录项目中各个module真实的安装版本
// package.json文件：整个项目的配置信息
// 项目启动：yarn start

// manifest.json文件 & serviceWorker.js文件
// ------> WA技术
// 对网页进行安装和离线缓存

// yarn eject命名
// ------> 把webpack中的配置暴露出来
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
