import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: #fff; /* var(--color-grey-0) */
    background-color: #0369a1; /* var(--color-blue-700) */

    &:hover {
      background-color: #e0f2fe; /* var(--color-blue-100) */
    }
  `,
  secondary: css`
    color: #4b5563; /* var(--color-grey-600) */
    background: #fff; /* var(--color-grey-0) */
    border: 1px solid #e5e7eb; /* var(--color-grey-200) */

    &:hover {
      background-color: #f9fafb; /* var(--color-grey-50) */
    }
  `,
  danger: css`
    color: #fee2e2; /* var(--color-red-100) */
    background-color: #b91c1c; /* var(--color-red-700) */

    &:hover {
      background-color: #991b1b; /* var(--color-red-800) */
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 0.25rem; /* var(--border-radius-sm) */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04); /* var(--shadow-sm) */

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
