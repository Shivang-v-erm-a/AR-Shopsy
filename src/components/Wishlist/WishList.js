import React, { useState } from "react";
import "./WishList.css";
import { Link } from 'react-router-dom';

const WishList = ({ wishlist, onRemoveItem }) => {
  const [fadeOutId, setFadeOutId] = useState(null);
  const isEmpty = wishlist.length === 0;

  const handleRemoveItem = (id) => {
    setFadeOutId(id);
    // Add a small delay for animation
    setTimeout(() => {
      onRemoveItem(id);
      setFadeOutId(null);
    }, 300);
  };

  const EmptyWishlist = () => {
    return (
      <div className="empty-wishlist">
        <div className="alert">
          You have no items in your wishlist yet!
          <p className="alert-subtext">Find something you love and add it here.</p>
        </div>
        <Link to="/product" className="button go-back">
          Browse Products
        </Link>
      </div>
    );
  };

  const FilledWishList = () => {
    return (
      <>
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div 
              key={item.id} 
              className={`wishlist-item ${fadeOutId === item.id ? 'fade-out' : ''}`}
              style={{
                borderLeftColor: item.color ? 
                  (item.color.toLowerCase() === 'red' ? '#ef4444' : 
                   item.color.toLowerCase() === 'blue' ? '#3b82f6' : 
                   item.color.toLowerCase() === 'green' ? '#10b981' : 
                   item.color.toLowerCase() === 'purple' ? '#8b5cf6' : 
                   item.color.toLowerCase() === 'yellow' ? '#f59e0b' : 
                   '#6366f1') : '#6366f1'
              }}
            >
              <div className="wishlist-details">
                <div className="wishlist-name">{item.name}</div>
                <div className="wishlist-category">Category: {item.category}</div>
                <div className="wishlist-color">Color: {item.color}</div>
              </div>
              <button 
                onClick={() => handleRemoveItem(item.id)} 
                className="remove-btn"
                aria-label={`Remove ${item.name} from wishlist`}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="wishlist-actions">
          <Link to="/" className="button go-back">
            Continue Shopping
          </Link>
        </div>
      </>
    );
  };

  return (
    <div className="container">
      {/* <h1 className="cart-title">My Wishlist</h1> */}
      <div className="cart-grid">
        <div className="cart-items-container">
          <div className="cart-paper">
            <h2 className="cart-heading">Saved Items</h2>
            <hr className="divider" />
            {isEmpty ? <EmptyWishlist /> : <FilledWishList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;