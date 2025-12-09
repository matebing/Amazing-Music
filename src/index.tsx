import React from 'react';
import ReactDOM from 'react-dom/client';
//对css样式进行重置，有些原生样式不是我们想要的效果
import 'normalize.css';
import './assets/css/index.less';

import App from '@/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

//渲染APP
root.render(<App />);
