import ReportIssueForm from './components/ReportIssue/ReportIssueForm'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ReportIssueForm />
    </ThemeProvider>
  )
}
