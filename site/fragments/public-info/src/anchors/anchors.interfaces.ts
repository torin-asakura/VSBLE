import { ReactNode } from 'react'

export interface AnchorLink {
  path: string
  content: string | ReactNode
}

export interface AnchorsProps {
  anchors: Array<AnchorLink>
}
