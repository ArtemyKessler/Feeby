import ReportIssueForm from './components/ReportIssue/ReportIssueForm'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useScrollToInput } from './utils/scrollToInput'

export default function App() {
  useScrollToInput()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ReportIssueForm />
    </ThemeProvider>
  )
}
