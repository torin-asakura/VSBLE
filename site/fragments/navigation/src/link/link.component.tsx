import React         from 'react'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { NextLink }  from '@ui/link'

import { LinkProps } from './link.interfaces'

const Link: FC<LinkProps> = ({ icon, path, text }) => (
  <NextLink path={path}>
    <Layout alignItems='center'>
      <Layout>{icon}</Layout>
      <Layout flexShrink={0} flexBasis={8} />
      <Layout>{text}</Layout>
    </Layout>
  </NextLink>
)

export { Link }
