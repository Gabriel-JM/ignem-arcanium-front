import { css } from 'lithen-tag-functions'

export const inputStyles = css`
  .input-container span {
    display: inline-block;
    padding-bottom: 4px;
    font-size: 1.05rem;
  }

  .input {
    --input-outline: var(--btn-focus-outline-color);
    --input-border-color: #555;

    width: 100%;
    background-color: var(--body-bg-color);
    border: 1px solid var(--input-border-color);
    border-radius: 4px;
    color: var(--font-color);
    font-size: 0.9rem;
    padding: 6px 10px;
    transition: all 250ms;
  }

  .input:focus {
    box-shadow: 0 0 0 2px var(--input-outline);
  }

  .input.error {
    --input-border-color: #a14747;
  }

  .input.error:focus {
    --input-outline: var(--danger);
  }

  .input-message {
    font-size: 0.9rem;
    height: 0.9rem;
    width: fit-content;
    color: #a14747;
  }

  @keyframes drop {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
