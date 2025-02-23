import ReportIssueForm from './components/ReportIssue/ReportIssueForm'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useScrollToInput } from './utils/scrollToInput'
import { useCallback, useEffect } from 'react'

export default function App() {
  useScrollToInput()
  const loadTelegramWebApp = useCallback(() => {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script')
      script.src = '/scripts/webApp.js'
      script.onload = () => resolve()
      script.onerror = () =>
        reject(new Error('Failed to load Telegram WebApp script'))
      document.head.appendChild(script)
    })
  }, [])

  const init = async () => {
    await loadTelegramWebApp()
    const webApp = window.Telegram.WebApp
    webApp.disableVerticalSwipes()
  }

  useEffect(() => {
    void init()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ReportIssueForm />
    </ThemeProvider>
  )
}
