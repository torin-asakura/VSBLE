import { ReactNode } from 'react'

export interface CardsProps {
  children?: ReactNode
  columnsCountBreakPoints: {[key: string]: number}
  columnsCount?: number
  gutter?: number
}
