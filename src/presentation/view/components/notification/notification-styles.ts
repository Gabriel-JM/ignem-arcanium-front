import { css } from 'lithen-tag-functions'

export const notificationStyles = css`
  :host {
    position: fixed;
    top: 10px;
    right: 10px;
    animation: show 1s ease-in-out forwards;
  }

  :host(.hide) {
    pointer-events: none;
    animation: hide 1s ease-in forwards;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  .notification-container {
    display: flex;
    max-width: 400px;
    background: linear-gradient(to top right, #212f21, #1a1a1a 35%);
    border: 1px solid #222;
    border-radius: 5px;
    padding: 16px 20px;
    align-items: center;
    box-sizing: border-box;
  }

  .notification-container ignem-wrapper {
    padding-right: 12px;
    width: 60px;
    height: 60px;
    color: #417741;
  }

  .notification-content {
    flex: 4;
    padding: 0 10px;
  }

  .notification-content h4 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .notification-content p {
    font-size: 0.95rem;
    color: #aaa;
  }

  .notification-container span {
    height:100%;
    font-size: 1.6rem;
    cursor: pointer;
  }

  @keyframes show {
    0% {
      transform: translateX(400px);
    }

    75% {
      transform: translateX(-20px);
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes hide {
    25% {
      transform: translateX(-50px);
    }

    100% {
      transform: translateX(100vw);
    }
  }
`
