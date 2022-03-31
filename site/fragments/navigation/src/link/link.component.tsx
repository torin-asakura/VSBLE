import React         from 'react'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { NextLink }  from '@ui/link'
import { useHover }  from '@ui/utils'

import { LinkProps } from './link.interfaces'

const Link: FC<LinkProps> = ({ icon, path, text, ...props }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Layout display={['none', 'none', 'flex']}>
      <NextLink path={path} {...hoverProps} {...props}>
        <Layout alignItems='center'>
          <Layout>{typeof icon === 'function' ? icon(hover) : icon}</Layout>
          <Layout flexShrink={0} flexBasis={8} />
          <Layout>{text}</Layout>
        </Layout>
      </NextLink>
    </Layout>
  )
}
export { Link }
