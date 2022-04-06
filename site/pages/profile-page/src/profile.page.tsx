import React           from 'react'
import { FC }          from 'react'

import { Navigation }  from '@site/navigation-fragment'
import { ProfileInfo } from '@site/profile-info-fragment'
import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'

const ProfilePage: FC = () => (
  <Column fill>
    <Navigation />
    <Layout flexShrink={0} flexBasis={40} />
    <ProfileInfo />
  </Column>

)

export { ProfilePage }
