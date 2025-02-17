import React from 'react'

import styled from 'styled-components'

interface FormFieldProps {
  label: string
  id: string
  type: string
  placeholder?: string
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type,
  placeholder
}) => {
  const InputComponent = type === 'textarea' ? 'textarea' : 'input'

  return (
    <StyledFieldset>
      <label htmlFor={id}>{label}</label>
      <InputComponent
        id={id}
        name={id}
        type={type !== 'textarea' ? type : undefined}
        placeholder={placeholder}
      />
    </StyledFieldset>
  )
}

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 12px 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  label {
    color: #141c24;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 8px;
  }

  input,
  textarea {
    border-radius: 12px;
    background-color: #f7fafa;
    border: 1px solid #d4dbe8;
    padding: 16px 15px;
    font-size: 16px;
    color: #405473;
    width: 100%;
  }

  textarea {
    min-height: 144px;
    resize: vertical;
  }
`

export default FormField
