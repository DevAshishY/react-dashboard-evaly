import { createGlobalStyle } from "styled-components";

// Reset css use for rest default css of browser
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: "Public Sans", sans-serif;
    box-sizing:border-box;
  
  }

  button {
    background: none;
		cursor: pointer;
    border: none;
  }

  :root {
    --primary-color: #23272E;
    --primary-background: #F3F4F8;
    --primary-font-color: #000;
    --shadow-black-color: rgba(0, 0, 0, 0.38);

  }

  body, html, #root {
    width: 100%;
    height: 100%;
    position: relative;
   
  }
  .flex{
    display:flex;
  }
  .flex-justify{
    justify-content: space-between;
    display: flex;
  }
  .flex-center{
    display: flex;
    align-items:center;
  }

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;
    color: var(--primary-color);
    margin-bottom:40px;
  }
`;
