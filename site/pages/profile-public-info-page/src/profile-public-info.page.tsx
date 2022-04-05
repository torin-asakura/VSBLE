import React          from 'react'
import { FC }         from 'react'

import { Navigation } from '@site/navigation-fragment'
import { PublicInfo } from '@site/public-info-fragment'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'

const ProfilePublicInfoPage: FC = () => (
  <Column fill>
    <Navigation />
    <Layout flexShrink={0} flexBasis={40} />
    <PublicInfo />
  </Column>
)

export { ProfilePublicInfoPage }
