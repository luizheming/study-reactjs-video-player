import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 20px;
  overflow-y: auto;
  height: 28vw;
  max-height: 500px;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #6272a4;
    opacity: 0.8;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #6272a4;
  }
`
