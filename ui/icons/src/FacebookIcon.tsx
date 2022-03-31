import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const FacebookIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width={32} height={32} rx={16} fill='black' />
      <path
        d='M17.0685 26.6672V16.9361H20.3348L20.8239 13.1437H17.0685V10.7223C17.0685 9.62437 17.3734 8.87604 18.948 8.87604L20.9562 8.87512V5.48326C20.6088 5.43721 19.4167 5.33398 18.0299 5.33398C15.1345 5.33398 13.1523 7.10125 13.1523 10.3469V13.1438H9.87744V16.9362H13.1522V26.6673L17.0685 26.6672Z'
        fill='white'
      />
    </svg>
  )
}
