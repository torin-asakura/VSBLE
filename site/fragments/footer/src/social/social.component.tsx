import React           from 'react'
import { FC }          from 'react'

import { Link }        from '@ui/link'
import { useHover }    from '@ui/utils'

import { SocialProps } from './social.interfaces'

const Social: FC<SocialProps> = ({ url, icon }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Link href={url} {...hoverProps}>
      {typeof icon === 'function' ? icon(hover) : icon}
    </Link>
  )
}

export { Social }
