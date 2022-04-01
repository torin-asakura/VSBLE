import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

const ConnectPaymentGateway: FC = () => (
  <Row id='connect-payment-gateway'>
    <Column fill>
      <Row>
        <Text fontSize='semiGiant' color='text.accent' lineHeight='semiLarge' fontWeight='bold'>
          <FormattedMessage
            id='settings.connect_payment_gateway'
            defaultMessage='Connect Payment Gateway'
          />
        </Text>
      </Row>
      <Layout flexBasis={8} />
      <Row>
        <Text fontSize='default' lineHeight='medium'>
          <FormattedMessage
            id='settings.please_connect_payment_gateway'
            defaultMessage='Please connect a payment gateway so we can pay out your sales. We also send you a sales statemt with each sale. The comission on online sales is only as low as 15%.'
          />
        </Text>
      </Row>
      <Layout flexBasis={24} />
      <Row>
        <Text fontSize='default' fontWeight='semiBold' lineHeight='medium'>
          <FormattedMessage id='settings.stripe' defaultMessage='Stripe' />
        </Text>
      </Row>
      <Layout flexBasis={8} />
      <Row>
        <Text fontSize='semiRegular' lineHeight='medium'>
          <FormattedMessage
            id='settings.connect_your_art_brief'
            defaultMessage='Connect your ArtBrief account to your Stripe account'
          />
        </Text>
      </Row>
      <Layout flexBasis={24} />
      <Layout>
        <Button>
          <FormattedMessage id='settings.connect' defaultMessage='Connect' />
        </Button>
      </Layout>
    </Column>
  </Row>
)

export { ConnectPaymentGateway }
