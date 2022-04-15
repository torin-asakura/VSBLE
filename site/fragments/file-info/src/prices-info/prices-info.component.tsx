import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Repeater }         from '@ui/utils'

import { License }          from './license'
import { useMockedPrices }  from '../data'

const PricesInfo: FC = () => {
  const { licenses } = useMockedPrices()

  return (
    <Layout>
      <Box width={['100%', '100%', 320]}>
        <Column fill>
          <Repeater items={licenses} onIteration={License} />
          <Layout flexShrink={0} flexBasis={24} />
          <Button>
            <FormattedMessage id='file_page.add_to_cart' defaultMessage='Add to Cart' />
          </Button>
          <Layout flexShrink={0} flexBasis={24} />
          <Row>
            <Text
              fontSize='semiRegular'
              color='text.accent'
              fontWeight='normal'
              lineHeight='default'
            >
              <FormattedMessage
                id='file_page.question'
                defaultMessage='Your project requires specific usage that is not reflected in the pricing above?'
              />
            </Text>
          </Row>
          <Layout flexShrink={0} flexBasis={24} />
        </Column>
      </Box>
    </Layout>
  )
}

export { PricesInfo }
