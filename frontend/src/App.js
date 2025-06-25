import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://127.0.0.1:8000/api';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/products/`);
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Ошибка при загрузке данных');
      console.error('Ошибка:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB'
    }).format(price);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ru-RU');
  };

  if (loading) {
    return (
      <div className="App">
        <div className="loading">Загрузка товаров...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <div className="error">
          {error}
          <button onClick={fetchProducts} className="retry-btn">
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>🛍️ Магазин товаров</h1>
        <p>Fullstack приложение на Django REST Framework + React</p>
      </header>

      <main className="main-content">
        {products.length === 0 ? (
          <div className="empty-state">
            <h2>Товары не найдены</h2>
            <p>Добавьте товары через админ панель Django</p>
            <a 
              href="http://127.0.0.1:8000/admin/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="admin-link"
            >
              Перейти в админ панель
            </a>
          </div>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">{formatPrice(product.price)}</div>
                <div className="product-meta">
                  <small>Добавлен: {formatDate(product.created_at)}</small>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="App-footer">
        <p>Общее количество товаров: {products.length}</p>
        <button onClick={fetchProducts} className="refresh-btn">
          🔄 Обновить данные
        </button>
      </footer>
    </div>
  );
}

export default App; 