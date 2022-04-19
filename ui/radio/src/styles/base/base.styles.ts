import {}          from '..'

import { styleFn } from 'styled-system'

const createBaseStyles = (): styleFn => () => ({
  display: 'flex',
  boxSizing: 'border-box',
  position: 'absolute',
  '& > input': {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    width: '24px',
    height: '24px',
    margin: 0,
  },
  '& > input:checked ~ div, div:after': {
    display: 'flex',
  },
  'input::before': {
    content: '""',
    display: 'inline-block',
    backgroundImage:
      'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiM4NTYyQ0UiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNSIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==")',
    width: '24px',
    height: '24px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  'input:checked': {
    opacity: 1,
  },
})

export { createBaseStyles }
