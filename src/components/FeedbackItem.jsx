import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { useState } from "react";

function FeedbackItem({ item, handleDelete }) {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const handleLike = (element) => {
    if (element) {
      setLike(false);
      setCount(0);
    } else {
      setLike(true);
      setCount(1);
    }
  };
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      <div className="text-display feedback">
        <div className="like">
          {like ? (
            <FaThumbsUp onClick={() => handleLike(true)} />
          ) : (
            <FaRegThumbsUp onClick={() => handleLike(false)} />
          )}
        </div>
        <div className="like">{count}</div>
      </div>
    </Card>
  );
}

export default FeedbackItem;
