import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Button }           from '@ui/button'
import { Tooltip }          from '@ui/tooltip'
import { InformationIcon }  from '@ui/icons'
import { Radio }            from '@ui/radio'

import { useMockedPrices }  from '../data/mocks/prices'

const PricesInfo: FC = () => {
  const { formatMessage } = useIntl()
  const { licenses } = useMockedPrices()

  return (
    <Layout>
      <Box width={['100%', '100%', 320]}>
        <Column fill>
          <Row alignItems='center'>
            <Box width={24} height={24}>
              <Radio/>
            </Box>
            <Layout flexBasis={8}/>
            <Layout>
              <Text fontSize='semiRegular' color='text.accent' fontWeight='normal' lineHeight='default'>
                {formatMessage({
                  id: 'file_page.online_license',
                  defaultMessage: `${licenses[0].license}`
                })}
              </Text>
            </Layout>
            <Layout flexBasis={5}/>
            <Layout>
              <Tooltip text='text' anchor='BOTTOM_CENTER' trigger='hover' animate showArrow>
                <Layout>
                  <InformationIcon width='1.5rem' height='1.5rem'/>
                </Layout>
              </Tooltip>
            </Layout>
            <Layout flexGrow={1}/>
            <Layout>
              <Text fontSize='semiRegular' color='text.accent' fontWeight='semiBold' lineHeight='default'>
                {licenses[0].price}
              </Text>
            </Layout>
          </Row>
          <Layout flexShrink={0} flexBasis={16}/>
          <Row alignItems='center'>
            <Box width={24} height={24}>
              <Radio/>
            </Box>
            <Layout flexBasis={8}/>
            <Layout>
              <Text fontSize='semiRegular' color='text.accent' fontWeight='normal' lineHeight='default'>
                {formatMessage({
                  id: 'file_page.editorial_licence',
                  defaultMessage: `${licenses[1].license}`
                })}
              </Text>
            </Layout>
            <Layout flexBasis={5}/>
            <Layout>
              <Tooltip text='text' anchor='BOTTOM_CENTER' trigger='hover' showArrow animate>
                <Layout>
                  <InformationIcon width='1.5rem' height='1.5rem'/>
                </Layout>
              </Tooltip>
            </Layout>
            <Layout flexGrow={1}/>
            <Layout>
              <Text fontSize='semiRegular' color='text.accent' fontWeight='semiBold' lineHeight='default'>
                {licenses[1].price}
              </Text>
            </Layout>
          </Row>
          <Layout flexShrink={0} flexBasis={16}/>
          <Row alignItems='center'>
            <Box width={24} height={24}>
              <Radio/>
            </Box>
            <Layout flexBasis={8}/>
            <Layout>
              <Text fontSize='semiRegular' color='text.accent' fontWeight='normal' lineHeight='default'>
                {formatMessage({
                  id: 'file_page.extended_licence',
                  defaultMessage: `${licenses[2].license}`
                })}
              </Text>
            </Layout>
            <Layout flexBasis={5}/>
            <Layout>
              <Tooltip text='text' anchor='BOTTOM_CENTER' trigger='hover' animate showArrow>
                <Layout>
                  <InformationIcon width='1.5rem' height='1.5rem'/>
                </Layout>
              </Tooltip>
            </Layout>
            <Layout flexGrow={1}/>
            <Layout>
              <Text fontSize='semiRegular' color='text.accent' fontWeight='semiBold' lineHeight='default'>
                {licenses[2].price}
              </Text>
            </Layout>
          </Row>
          <Layout flexShrink={0} flexBasis={24}/>
          <Button>
            <FormattedMessage id='file_page.add_to_cart' defaultMessage='Add to Cart'/>
          </Button>
          <Layout flexShrink={0} flexBasis={24}/>
          <Row>
            <Text fontSize='semiRegular' color='text.accent' fontWeight='normal' lineHeight='default'>
              <FormattedMessage id='file_page.question'
                                defaultMessage='Your project requires specific usage that is not reflected in the pricing above?'/>
            </Text>
          </Row>
          <Layout flexShrink={0} flexBasis={24}/>
        </Column>
      </Box>
    </Layout>
  )
}

export { PricesInfo }
