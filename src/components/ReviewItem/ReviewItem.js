import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = ({ product ,handleReviewItem}) => {
  const { id,name, price, quantity, img } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
            <p>{name}</p>
            <p><small>Price : {price}</small></p>
            <p><small>Quantity : {quantity}</small></p>
        </div>
      </div>
      <div className="delete-container">
        <button onClick={()=>handleReviewItem(id)} className="btn-delete">
            <FontAwesomeIcon className="delete-icon" icon={faTrashAlt}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
