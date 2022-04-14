import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

import { HereAreSomeProps } from './here-are-some.interfaces'

const HereAreSome: FC<HereAreSomeProps> = ({ role }) => (
  <Row justifyContent='center'>
    <Text fontSize='giant' color='text.accent' fontWeight='bold' textAlign='center'>
      <FormattedMessage
        id='here_are_some.here_are_some_trending'
        defaultMessage='Here are some trending '
      />
      <Layout display={['none', 'none', 'flex']}>
        <Space/>
      </Layout>
      {role}
    </Text>
  </Row>
)

export { HereAreSome }
