import React, { ButtonHTMLAttributes } from 'react'

import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const SubmitButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { t } = useTranslation()
  return (
    <StyledButton {...props} type="submit">
      {t('submit')}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  //background-color: #f5c754;
  background-color: #264653;
  border: none;
  border-radius: 12px;
  //color: #141c24;
  color: #e9c46a;
  font-weight: 700;
  font-size: 16px;
  padding: 16px;
  width: 100%;
  margin-top: 17px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    //background-color: #f3bd3a;
    background-color: #2a9d8f;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #141c24;
  }
`

export default SubmitButton
