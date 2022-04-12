import { ReactNode } from 'react'

type Renderer = (hover: boolean) => ReactNode

export interface SocialProps {
  icon: ReactNode | Renderer
  url: string
}
