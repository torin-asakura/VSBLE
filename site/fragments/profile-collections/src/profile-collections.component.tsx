import { useReactiveVar } from '@apollo/client'

import React              from 'react'
import { FC }             from 'react'

import { Condition }      from '@ui/condition'
import { Row }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'
import { sedcardVar }     from '@site/store'
import { archiveVar }     from '@site/store'
import { nftVar }         from '@site/store'

import { Archive }        from './archive'
import { Nft }            from './nft'
import { Sedcard }        from './sedcard'
import { Tabs }           from './tabs'

const ProfileCollections: FC = () => {
  const sedcard = useReactiveVar<boolean>(sedcardVar)
  const archive = useReactiveVar<boolean>(archiveVar)
  const nft = useReactiveVar<boolean>(nftVar)

  return (
    <Row justifyContent='center'>
      <Layout width={['100%', '100%', 1392]}>
        <Column fill>
          <Tabs />
          <Layout flexBasis={24} />
          <Condition match={sedcard}>
            <Sedcard />
          </Condition>
          <Condition match={archive}>
            <Archive />
          </Condition>
          <Condition match={nft}>
            <Nft />
          </Condition>
        </Column>
      </Layout>
    </Row>
  )
}

export { ProfileCollections }
