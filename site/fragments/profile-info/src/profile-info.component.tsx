import React                from 'react'
import { FC }               from 'react'

import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { UserDetails }      from './user-details'

const ProfileInfo: FC = () => (
  <Row justifyContent='center'>
    <Layout width={['100%', '100%', 1392]}>
      <Column fill>
        <UserDetails />
      </Column>
    </Layout>
  </Row>
)

export { ProfileInfo }
