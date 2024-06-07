import "./App.css";
import React, { useEffect, useState } from "react";
import { Footer } from "./component/footer";

function App() {
  const [advice, setAdvice] = useState();
  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data.slip.id);
    setAdvice(data);
  };
  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleClick = async () => {
    // math random
    const random = Math.floor(Math.random() * 224) + 1;
    let id = random;
    // new fetch
    const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
    const newData = await response.json();
    console.log(newData.slip.id);
    setAdvice(newData);
  };

  return (
    <>
      <div className="Main">
        <div className="Container">
          <p className="Title">advice #{advice?.slip?.id}</p>
          <p className="Page">"{advice?.slip?.advice}"</p>
          <span className="divider">
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                <g transform="translate(212)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
          </span>
          <div className="dividerMobile">
            <svg
              width="100%"
              max-width="295"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 295 16"
            >
              <g fill="none" fill-rule="evenodd">
                <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
                <g transform="translate(138)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
          </div>
          <div className="btnContainer">
            <button type="button" onClick={handleClick}>
              <svg
                width="24"
                height="24"
                display="block"
                margin="auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                  fill="#202733"
                />
              </svg>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
