import React, { forwardRef, useImperativeHandle } from 'react'

import { MuiFileInput } from 'mui-file-input'

import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'

// eslint-disable-next-line react/display-name
const ImagePreview = forwardRef((props, ref) => {
  const [value, setValue] = React.useState<null | File[]>(null)
  const { t } = useTranslation()

  useImperativeHandle(ref, () => ({
    reset() {
      setValue(null)
    }
  }))

  const handleChange = (newValue: any) => {
    setValue(newValue)
  }

  return (
    <StyledPreview>
      <StyledLabel htmlFor={'images'}>{t('labels.image')}</StyledLabel>
      <FileInputContainer style={{ position: 'relative' }}>
        <MuiFileInput
          id={'images'}
          name={'images'}
          multiple
          value={value || undefined}
          onChange={handleChange}
        />
        <div
          style={{
            position: 'absolute',
            left: '8px',
            top: '16px',
            zIndex: 1000
          }}
        >
          📁
        </div>
      </FileInputContainer>
      <GridContainer>
        {value &&
          value?.map(el => {
            const previewSrc = URL.createObjectURL(el)
            return (
              <img
                key={el.name}
                width={'100%'}
                src={previewSrc || ''}
                alt="preview"
              />
            )
          })}
      </GridContainer>
    </StyledPreview>
  )
})

const StyledPreview = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

const FileInputContainer = styled(Box)`
  width: 100%;

  .MuiOutlinedInput-root {
    padding-left: 24px;
  }
`

const StyledLabel = styled.label`
  color: #141c24;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 8px;
`

export default ImagePreview
