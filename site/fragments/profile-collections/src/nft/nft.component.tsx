import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

const Nft: FC = () => (
  <Row justifyContent='center'>
    <Layout width={['100%', '100%', 1136]}>
      <Column fill>
        <Row justifyContent='center'>
        <Text fontSize='giant' color='text.accent' fontWeight='bold' lineHeight='extra' textAlign='center'>
          <FormattedMessage id="creator_page.nft_message" defaultMessage="There's nothing here yet"/>
        </Text>
        </Row>
        <Layout flexBasis={24} />
      </Column>
    </Layout>
  </Row>
)

export { Nft }
