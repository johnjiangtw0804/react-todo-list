import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'


// 取得 root 的元素
// getElementById
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
