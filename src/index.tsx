import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//渲染APP，使用严格模式
root.render(
    <App />
);
