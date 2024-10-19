import { CircularProgress } from '@mui/material'
import styled, { css } from 'styled-components'

export const Loading = () => {
  return (
    <Wrapper>
      <CircularProgress size={100} />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 16px);
  height: calc(100vh - 16px);
  align-items: center;
  justify-content: center;
`
