import { useReactiveVar }   from '@apollo/client'

import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { sedcardVar }       from '@site/store'
import { archiveVar }       from '@site/store'
import { nftVar }           from '@site/store'

import { useMockedCards }   from '../data'

const Tabs: FC = () => {
  const { cards } = useMockedCards()

  const sedcard = useReactiveVar<boolean>(sedcardVar)
  const archive = useReactiveVar<boolean>(archiveVar)
  const nft = useReactiveVar<boolean>(nftVar)

  return (
    <Row justifyContent='center'>
      <Layout width={['95%', '100%', '100%']}>
        <Column fill>
          <Row justifyContent='center'>
            <Layout width={382} justifyContent='space-between'>
              <Layout>
                <Layout>
                  <Column>
                    <Button
                      size='ghost'
                      variant='ghost'
                      onClick={() => {
                        sedcardVar(true)
                        archiveVar(false)
                        nftVar(false)
                      }}
                    >
                      <Row>
                        <Text
                          fontSize='semiGiant'
                          color={sedcard ? 'text.accent' : 'text.gray'}
                          fontWeight='bold'
                          lineHeight='extra'
                        >
                          <FormattedMessage
                            id='creator-page.tab_sedcard'
                            defaultMessage='Sedcard'
                          />
                        </Text>
                      </Row>
                    </Button>
                    <Layout flexBasis={8} />
                    <Condition match={sedcard}>
                      <Divider weight={4} borderRadius={4} backgroundColor='background.black' />
                    </Condition>
                  </Column>
                </Layout>
                <Layout>
                  <Text
                    fontSize='small'
                    color={sedcard ? 'text.lightGray' : 'text.semiGray'}
                    fontWeight='normal'
                    lineHeight='extra'
                    verticalAlign='top'
                    paddingLeft='8px'
                  >
                    {cards.length}
                  </Text>
                </Layout>
              </Layout>
              <Layout>
                <Layout>
                  <Column>
                    <Button
                      size='ghost'
                      variant='ghost'
                      onClick={() => {
                        sedcardVar(false)
                        archiveVar(true)
                        nftVar(false)
                      }}
                    >
                      <Row>
                        <Text
                          fontSize='semiGiant'
                          color={archive ? 'text.accent' : 'text.gray'}
                          fontWeight='bold'
                          lineHeight='extra'
                        >
                          <FormattedMessage
                            id='creator-page.tab_archive'
                            defaultMessage='Archive'
                          />
                        </Text>
                      </Row>
                    </Button>
                    <Layout flexBasis={8} />
                    <Condition match={archive}>
                      <Divider weight={4} borderRadius={4} backgroundColor='background.black' />
                    </Condition>
                  </Column>
                </Layout>
                <Layout>
                  <Text
                    fontSize='small'
                    color={archive ? 'text.lightGray' : 'text.semiGray'}
                    fontWeight='normal'
                    lineHeight='extra'
                    verticalAlign='top'
                    paddingLeft='8px'
                  >
                    {cards.length}
                  </Text>
                </Layout>
              </Layout>
              <Layout>
                <Layout>
                  <Column>
                    <Button
                      size='ghost'
                      variant='ghost'
                      onClick={() => {
                        sedcardVar(false)
                        archiveVar(false)
                        nftVar(true)
                      }}
                    >
                      <Row>
                        <Text
                          fontSize='semiGiant'
                          color={nft ? 'text.accent' : 'text.gray'}
                          fontWeight='bold'
                          lineHeight='extra'
                        >
                          <FormattedMessage id='creator-page.tab_nft' defaultMessage='NFT' />
                        </Text>
                      </Row>
                    </Button>
                    <Layout flexBasis={8} />
                    <Condition match={nft}>
                      <Divider weight={4} borderRadius={4} backgroundColor='background.black' />
                    </Condition>
                  </Column>
                </Layout>
                <Layout>
                  <Text
                    fontSize='small'
                    color={nft ? 'text.lightGray' : 'text.semiGray'}
                    fontWeight='normal'
                    lineHeight='extra'
                    verticalAlign='top'
                    paddingLeft='8px'
                  >
                    0
                  </Text>
                </Layout>
              </Layout>
            </Layout>
          </Row>
        </Column>
      </Layout>
    </Row>
  )
}

export { Tabs }
