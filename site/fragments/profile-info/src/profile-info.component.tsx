import React                from 'react'
import { FC }               from 'react'

import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'

import { UserDetails }      from './user-details'
import { UserInfo }         from './user-info'

const ProfileInfo: FC = () => (
  <Row justifyContent='center'>
    <Layout width={['100%', '100%', 1392]}>
      <Column fill>
        <UserDetails />
        <Layout flexBasis={40} />
        <UserInfo />
      </Column>
    </Layout>
  </Row>
)

export { ProfileInfo }
