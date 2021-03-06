import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: none;
  // Pass in the cart props from details to change the button color to yellow
  border-color: ${prop =>
    prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${prop => (prop.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0;
  transition: all 0.15s ease-in-out;
  &:hover {
    background: ${prop =>
      prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
