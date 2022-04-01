import React          from 'react'
import { FC }         from 'react'

import { Navigation } from '@site/navigation-fragment'
import { Settings }   from '@site/settings-fragment'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'

const ProfileSettingsPage: FC = () => (
  <Column fill>
    <Navigation />
    <Layout flexShrink={0} flexBasis={40} />
    <Settings />
  </Column>
)

export { ProfileSettingsPage }
