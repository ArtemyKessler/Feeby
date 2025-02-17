import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

import styled from 'styled-components'

import FormField from './FormField'
import ImagePreview from './ImagePreview'
import SubmitButton from './SubmitButton'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { WelcomeModal } from '../WelcomeModal/WelcomeModal'
import { saveIsVisited, selectIsVisited } from '../WelcomeModal/helper'
import { LanguageSelect } from '../LanguageSelect/LanguageSelect'
import { Box } from '@mui/material'

interface ReportIssueFormProps {
  // onSubmit: (formData: FormData) => void
}

const validateForm = (formFields: (string | File)[][]) => {
  let isValid = true
  formFields.forEach(el => {
    if (el[0] === 'feedback') {
      if (el[1] !== 'string' || el[1].length < 10) {
        isValid = false
      }
    }
  })
  return isValid
}

const ReportIssueForm: React.FC<ReportIssueFormProps> = () => {
  const { t } = useTranslation()
  const ref: MutableRefObject<HTMLFormElement | null> = useRef(null)
  const childRef = useRef()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    ref.current?.reset()
    // @ts-ignore
    childRef.current?.reset()

    console.log('formData', Array.from(formData.entries()))

    if (validateForm(Array.from(formData.entries()))) {
      console.log('SENDING')
      // TODO change to actual back-end url
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/Applications/validate',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  useEffect(() => {
    if (!selectIsVisited()) {
      handleOpen()
      saveIsVisited(true)
    }
  }, [])

  return (
    <StyledForm ref={ref} onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <WelcomeModal open={open} handleClose={handleClose} />
      <header className="form-header">
        <button
          type={'button'}
          className={'header-button'}
          onClick={handleOpen}
          title={t('titles.info')}
        >
          ?
        </button>
        <h1>{t('title')}</h1>
        <button
          type={'button'}
          className="header-button"
          aria-label="clear form"
          title={t('titles.clear')}
        >
          ✖
        </button>
      </header>
      <Box
        sx={{
          alignSelf: 'flex-end'
        }}
      >
        <LanguageSelect />
      </Box>
      <main>
        <FormField label={t('labels.name')} id="name" type="text" />
        <FormField label={t('labels.phone')} id="phone" type="tel" />
        <FormField label={t('labels.feedback')} id="feedback" type="textarea" />
        <ImagePreview ref={childRef} />
        <SubmitButton />
      </main>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  background-color: #f7fafa;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 150px;

  .form-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 16px 8px;

    h1 {
      flex: 1;
      text-align: center;
      font: 700 18px/1 'Public Sans', sans-serif;
      color: #141c24;
    }

    .header-button {
      font-size: 24px;
      background-color: transparent;
      cursor: pointer;
      border: none;
      padding: 4px;
    }
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 16px 16px;
  }
`

export default ReportIssueForm
