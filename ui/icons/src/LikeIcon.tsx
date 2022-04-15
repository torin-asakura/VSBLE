import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const LikeIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.995 3.2332C6.5455 1.61 4.12832 1.17336 2.31215 2.65973C0.495992 4.1461 0.240302 6.63121 1.66654 8.38921L7.995 14.25L14.3235 8.38921C15.7498 6.63121 15.5253 4.13047 13.6779 2.65973C11.8305 1.189 9.4446 1.61 7.995 3.2332Z'
        stroke='black'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
