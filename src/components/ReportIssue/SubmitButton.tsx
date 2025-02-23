import React, { ButtonHTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

import { SpecialButton } from '../common/buttons/StyledButton'

const SubmitButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { t } = useTranslation()
  return (
    <SpecialButton {...props} type="submit">
      {t('submit')}
    </SpecialButton>
  )
}

export default SubmitButton
