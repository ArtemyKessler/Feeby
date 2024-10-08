import ReportIssueForm from './components/ReportIssue/ReportIssueForm'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export default function App() {
  const handleSubmit = (data: FormData) => {
    data.forEach(el => {
      console.log(el)
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ReportIssueForm onSubmit={handleSubmit} />
    </ThemeProvider>
  )
}
