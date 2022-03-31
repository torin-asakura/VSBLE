import { WithoutUser }      from '@atls/react-user'

import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

const GetStartedCTA: FC = () => (
  <WithoutUser>
    <Row justifyContent='center'>
      <Layout width={['100%', '100%', 1440]} justifyContent='center'>
        <Layout flexBasis={24} />
        <Column alignItems='center' fill>
          <Row justifyContent='center'>
            <Text
              fontSize={['giant', 'giant', 'colossal']}
              color='text.accent'
              fontWeight='bold'
              textAlign='center'
            >
              <FormattedMessage
                id='call_to_actions.get_started'
                defaultMessage="Get started, It's Free"
              />
            </Text>
          </Row>
          <Layout flexBasis={36} />
          <Row justifyContent='center'>
            <Button>
              <FormattedMessage
                id='call_to_actions.sign_up_for_free'
                defaultMessage='Sign Up For Free'
              />
            </Button>
          </Row>
        </Column>
        <Layout flexBasis={24} />
      </Layout>
    </Row>
  </WithoutUser>
)

export { GetStartedCTA }
