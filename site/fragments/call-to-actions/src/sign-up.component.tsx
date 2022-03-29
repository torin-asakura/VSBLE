import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'

import { Tile }             from './tile'

const doNothing = () => {
  // do nothing
}

const SignUpCTA: FC = () => (
  <Row>
    <Column alignItems='center' fill>
      <Layout flexBasis={16} />
      <Layout width={['100%', '100%', 1440]} justifyContent='center'>
        <Layout flexBasis={24} />
        <Layout flexDirection={['column', 'column', 'row']}>
          <Tile
            actionName={
              <FormattedMessage
                id='call_to_actions.sign_up_as_a_brand'
                defaultMessage='Sign Up as a Brand'
              />
            }
            content={
              <FormattedMessage
                id='call_to_actions.find_selected_creators_worldwide'
                defaultMessage='Find selected creators worldwide'
              />
            }
            action={doNothing}
          />
          <Tile
            actionName={
              <FormattedMessage
                id='call_to_actions.sign_up_as_a_creator'
                defaultMessage='Sign Up as a Creator'
              />
            }
            content={
              <FormattedMessage
                id='call_to_actions.showcase_your_work_and_win_clients'
                defaultMessage='Showcase your work and wind clients'
              />
            }
            action={doNothing}
          />
        </Layout>
        <Layout flexBasis={24} />
      </Layout>
    </Column>
  </Row>
)

export { SignUpCTA }
