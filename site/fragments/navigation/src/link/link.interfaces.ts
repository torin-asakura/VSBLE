import { EventHandler } from 'react'
import { ReactNode }    from 'react'

export interface LinkProps {
  icon: ReactNode
  text: string | ReactNode
  path: string
  onClick?: EventHandler<any>
}
