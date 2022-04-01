import React                     from 'react'
import { FC }                    from 'react'
import { FormattedMessage }      from 'react-intl'

import { Box }                   from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Column }                from '@ui/layout'
import { Row }                   from '@ui/layout'
import { NextLink }              from '@ui/link'
import { Text }                  from '@ui/text'
import { Repeater }              from '@ui/utils'
import { Hover }                 from '@ui/utils'

import { BasicInformation }      from './basic-information'
import { ConnectPaymentGateway } from './connect-payment-gateway'
import { Marketplace }           from './marketplace'
import { Notification }          from './notification'
import { Password }              from './password'
import { SalesStatements }       from './sales-statements'

const Settings: FC = () => (
  <Row justifyContent='center'>
    <Layout flexBasis={24} />
    <Layout width={['100%', '100%', 1392]}>
      <Column fill>
        <Row justifyContent='center'>
          <Text fontSize='colossal' color='text.accent' fontWeight='bold' lineHeight='extra'>
            <FormattedMessage id='settings.settings' defaultMessage='Settings' />
          </Text>
        </Row>
        <Layout flexBasis={40} />
        <Row>
          <Box flexDirection='column' position='sticky' height={184} top={160}>
            <Repeater
              items={[
                {
                  path: '#basic-information',
                  content: (
                    <FormattedMessage
                      id='settings.basic_information'
                      defaultMessage='Basic Information'
                    />
                  ),
                },
                {
                  path: '#password',
                  content: <FormattedMessage id='settings.password' defaultMessage='Password' />,
                },
                {
                  path: '#connect-payment-gateway',
                  content: (
                    <FormattedMessage
                      id='settings.connect_payment_gateway'
                      defaultMessage='Connect Payment Gateway'
                    />
                  ),
                },
                {
                  path: '#marketplace',
                  content: (
                    <FormattedMessage id='settings.marketplace' defaultMessage='Marketplace' />
                  ),
                },
                {
                  path: '#notification-settings',
                  content: (
                    <FormattedMessage
                      id='settings.notification_settings'
                      defaultMessage='Notification Settings'
                    />
                  ),
                },
                {
                  path: '#sales-statements',
                  content: (
                    <FormattedMessage
                      id='settings.sales_statements'
                      defaultMessage='Sales Statements'
                    />
                  ),
                },
              ]}
              onIteration={(item) => (
                <>
                  <Row>
                    <Hover>
                      {(hover, hoverProps) => (
                        <NextLink path={item.path} {...hoverProps}>
                          <Text
                            fontSize='increased'
                            lineHeight='semiLarge'
                            fontWeight='bold'
                            color={hover ? 'text.accent' : 'text.lightGray'}
                          >
                            {item.content}
                          </Text>
                        </NextLink>
                      )}
                    </Hover>
                  </Row>
                  <Layout flexBasis={8} />
                </>
              )}
            />
          </Box>
          <Layout flexBasis={165} />
          <Column flexGrow={1} maxWidth={560}>
            <BasicInformation />
            <Layout flexBasis={48} />
            <Password />
            <Layout flexBasis={48} />
            <ConnectPaymentGateway />
            <Layout flexBasis={48} />
            <Marketplace />
            <Layout flexBasis={48} />
            <Notification />
            <Layout flexBasis={48} />
            <SalesStatements />
            <Layout flexBasis={48} />
          </Column>
          <Column flexGrow={1} flexShrink={0} />
        </Row>
      </Column>
    </Layout>
    <Layout flexBasis={24} />
  </Row>
)

export { Settings }
