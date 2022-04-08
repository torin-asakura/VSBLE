import React       from 'react'
import { FC }      from 'react'

import { Row }     from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Column }  from '@ui/layout'

import { Tabs }    from './tabs'
import { Sedcard } from './sedcard'

const ProfileCollections: FC = () => (
  <Row justifyContent='center'>
    <Layout width={['100%', '100%', 1392]}>
      <Column fill>
        <Tabs />
        <Layout flexBasis={24} />
        <Sedcard />
      </Column>
    </Layout>
  </Row>
)


export { ProfileCollections }
