import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState("");

 
  const notify = () => toast("Type something to find");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!inputValue.trim()) {
      notify();
    } else {
      setQuery(inputValue);
      resetInput();
    }
  };


  const resetInput = () => {
    setInputValue('');
  };

  return (
    <>
      <header className={s.header}>
        <form onSubmit={handleSubmit} className={s.form}>
          <div className={s.inputContainer}>
          <button className={s.btn} type="submit">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.09 1.09l3.655 3.654a1 1 0 0 0 1.414-1.414l-3.654-3.655zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </button>
            <input
              className={s.input}
              value={inputValue}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </div>
        </form>
      </header>
      <Toaster />
    </>
  );
};

export default SearchBar;