import React from 'react';
import s from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from '../../types';


const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ setPage }) => {
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <button onClick={handleLoadMore} className={s.button}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
