import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './router/AppRouter'
import { Provider } from 'react-redux'
import {store} from './redux/store';
import { generateFakeEmployees } from './lib/faker';
import './index.css'

if (!localStorage.getItem('employeesData')) {
  const fakeEmployees = generateFakeEmployees(30);
  localStorage.setItem('employeesData', JSON.stringify(fakeEmployees));
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>,
)
