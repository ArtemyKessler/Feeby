import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useTranslation } from 'react-i18next'

export const AVAILABLE_LANGUAGES = [
  {
    code: 'en-US',
    name: 'English'
  },
  {
    code: 'ro',
    name: 'Română'
  },
  {
    code: 'ru',
    name: 'Русский'
  }
]

export const LanguageSelect = () => {
  const defaultLang = localStorage.getItem('i18nextLng')
  const [lang, setAge] = React.useState(defaultLang)
  const { t } = useTranslation()

  const handleChange = (event: SelectChangeEvent) => {
    const newVal = event.target.value as string
    setAge(newVal)
    localStorage.setItem('i18nextLng', newVal)
    location.reload()
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel id="lang-select-label">{t('language')}</InputLabel>
        <Select
          labelId="lang-select-label"
          id="lang-select"
          value={lang || undefined}
          label="Language"
          onChange={handleChange}
        >
          {AVAILABLE_LANGUAGES.map(el => (
            <MenuItem value={el.code}>{el.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
