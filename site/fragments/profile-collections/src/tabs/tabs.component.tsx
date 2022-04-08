import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Divider }          from '@ui/divider'
import { Text }             from '@ui/text'
import { Button }           from '@ui/button'

const Tabs: FC = () => (
  <Row>
    <Column fill>
      <Row justifyContent='center'>
        <Layout width={382} justifyContent='space-between'>
        <Layout>
          <Layout>
            <Column>
              <Button size='ghost' variant='ghost'>
                <Row>
                  <Text fontSize='semiGiant' color='text.accent' fontWeight='bold' lineHeight='extra'>
                    <FormattedMessage id='creator-page.tab_sedcard' defaultMessage='Sedcard'/>
                  </Text>
                </Row>
              </Button>
              <Layout flexBasis={8}/>
              <Divider weight={4} borderRadius={4} backgroundColor='background.black'/>
            </Column>
          </Layout>
          <Layout>
            <Text fontSize='small' color='text.gray' fontWeight='normal' lineHeight='extra' verticalAlign='top'>
              25
            </Text>
          </Layout>
        </Layout>
        <Layout>
          <Layout>
            <Column>
              <Button size='ghost' variant='ghost'>
                <Row>
                  <Text fontSize='semiGiant' color='text.gray' fontWeight='bold' lineHeight='extra'>
                    <FormattedMessage id='creator-page.tab_archive' defaultMessage='Archive'/>
                  </Text>
                </Row>
              </Button>
              <Layout flexBasis={8}/>
            </Column>
          </Layout>
          <Layout>
            <Text fontSize='small' color='text.gray' fontWeight='normal' lineHeight='extra' verticalAlign='top'>
              1234
            </Text>
          </Layout>
        </Layout>
        <Layout>
          <Layout>
            <Column>
              <Button size='ghost' variant='ghost'>
                <Row>
                  <Text fontSize='semiGiant' color='text.gray' fontWeight='bold' lineHeight='extra'>
                    <FormattedMessage id='creator-page.tab_nft' defaultMessage='NFT'/>
                  </Text>
                </Row>
              </Button>
              <Layout flexBasis={8}/>
            </Column>
          </Layout>
          <Layout>
            <Text fontSize='small' color='text.gray' fontWeight='normal' lineHeight='extra' verticalAlign='top'>
              0
            </Text>
          </Layout>
        </Layout>
        </Layout>
      </Row>
      <Layout flexBasis={24}/>
      <Layout justifyContent='center'>
        <Text fontSize='default' color='text.accent' fontWeight='normal' lineHeight='extra' textAlign='center'>
          <FormattedMessage id='creator_page.prompt' defaultMessage='You can choose images for Sedcard from Archive'/>
        </Text>
      </Layout>
    </Column>
  </Row>
)

export { Tabs }
