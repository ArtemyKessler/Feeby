import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: #f5c754;
  border: none;
  border-radius: 12px;
  color: #000000;
  font-weight: 700;
  font-size: 16px;
  padding: 16px;
  width: 100%;
  margin-top: 17px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f3bd3a;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #141c24;
  }
`
export const SpecialButton = styled(StyledButton)`
  background-color: #264653;
  color: #e0ceb3;
  &:hover {
    background-color: #2a9d8f;
  }
`
