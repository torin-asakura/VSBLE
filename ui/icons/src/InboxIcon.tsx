import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const InboxIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M19.25 11.75L17.6644 6.20056C17.4191 5.34195 16.6344 4.75 15.7414 4.75H8.2586C7.36564 4.75 6.58087 5.34196 6.33555 6.20056L4.75 11.75'
        stroke='black'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.2142 12.3689C9.95611 12.0327 9.59467 11.75 9.17085 11.75H4.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V11.75H14.8291C14.4053 11.75 14.0439 12.0327 13.7858 12.3689C13.3745 12.9046 12.7276 13.25 12 13.25C11.2724 13.25 10.6255 12.9046 10.2142 12.3689Z'
        stroke='black'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
