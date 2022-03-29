import { ReactNode } from 'react'

export interface TileProps {
  actionName: string | ReactNode
  action: () => any
  content: string | ReactNode
}
