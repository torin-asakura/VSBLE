import React                     from 'react'
import { FC }                    from 'react'
import { FormattedMessage }      from 'react-intl'
import { useIntl }               from 'react-intl'

import { Button }                from '@ui/button'
import { Condition }             from '@ui/condition'
import { Divider }               from '@ui/divider'
import { FacebookIcon }          from '@ui/icons'
import { InstagramIcon }         from '@ui/icons'
import { FacebookInvertedIcon }  from '@ui/icons'
import { TwitterIcon }           from '@ui/icons'
import { TwitterInvertedIcon }   from '@ui/icons'
import { InstagramInvertedIcon } from '@ui/icons'
import { Input }                 from '@ui/input'
import { Layout }                from '@ui/layout'
import { Column }                from '@ui/layout'
import { Row }                   from '@ui/layout'
import { NextLink }              from '@ui/link'
import { Link }                  from '@ui/link'
import { Logo }                  from '@ui/logo'
import { Text }                  from '@ui/text'

import { Social }                from './social'

const Footer: FC = () => {
  const { formatMessage } = useIntl()

  return (
    <Row justifyContent='center'>
      <Layout width={['100%', '100%', 1392]}>
        <Layout flexBasis={24} />
        <Column fill>
          <Row>
            <Divider weight={1} backgroundColor='background.black' />
          </Row>
          <Layout flexBasis={36} />
          <Layout
            width='100%'
            flexDirection={['column', 'column', 'row']}
            alignItems={['center', 'center', 'flex-start']}
          >
            <Column>
              <Layout>
                <Logo />
              </Layout>
              <Layout flexBasis={21} />
              <Layout>
                <Text fontSize='small'>
                  <FormattedMessage
                    id='footer.copyright'
                    defaultMessage='Copyright © Vsble.space'
                  />
                </Text>
              </Layout>
              <Layout flexBasis={4} />
              <Layout>
                <Text fontSize='small'>
                  <FormattedMessage
                    id='footer.all_rights_reserved'
                    defaultMessage='All rights reserved'
                  />
                </Text>
              </Layout>
            </Column>
            <Layout flexGrow={1} />
            <Column>
              <Row>
                <NextLink path='/imprint'>
                  <FormattedMessage id='footer.imprint' defaultMessage='Imprint' />
                </NextLink>
              </Row>
              <Layout flexBasis={8} />
              <Row>
                <NextLink path='/terms'>
                  <FormattedMessage id='footer.terms' defaultMessage='Terms' />
                </NextLink>
              </Row>
              <Layout flexBasis={8} />
              <Row>
                <NextLink path='/privacy'>
                  <FormattedMessage id='footer.privacy' defaultMessage='Privacy' />
                </NextLink>
              </Row>
              <Layout flexBasis={8} />
              <Row>
                <NextLink path='/cookie-policy'>
                  <FormattedMessage id='footer.cookie_policy' defaultMessage='Cookie policy' />
                </NextLink>
              </Row>
            </Column>
            <Layout flexBasis={63} />
            <Column>
              <Row>
                <NextLink path='/brands-access'>
                  <FormattedMessage id='footer.brands_access' defaultMessage='Brands access' />
                </NextLink>
              </Row>
              <Layout flexBasis={8} />
              <Row>
                <NextLink path='/creator-access'>
                  <FormattedMessage id='footer.creator_access' defaultMessage='Creator access' />
                </NextLink>
              </Row>
            </Column>
            <Layout flexBasis={115} />
            <Column>
              <Row>
                <Text color='text.accent' fontSize='semiRegular'>
                  <FormattedMessage id='footer.contact' defaultMessage='Contact' />
                </Text>
              </Row>
              <Layout flexBasis={16} />
              <Row>
                <Link href='mailto:support@artbrief.com'>
                  <Text color='text.purple' fontSize='semiRegular'>
                    support@artbrief.com
                  </Text>
                </Link>
              </Row>
              <Layout flexBasis={24} />
              <Row>
                <Layout>
                  <Social
                    icon={(hover) => (
                      <>
                        <Condition match={hover}>
                          <FacebookInvertedIcon width={32} height={32} />
                        </Condition>
                        <Condition match={!hover}>
                          <FacebookIcon width={32} height={32} />
                        </Condition>
                      </>
                    )}
                    url='/'
                  />
                </Layout>
                <Layout flexBasis={8} />
                <Layout>
                  <Social
                    icon={(hover) => (
                      <>
                        <Condition match={hover}>
                          <TwitterInvertedIcon width={32} height={32} />
                        </Condition>
                        <Condition match={!hover}>
                          <TwitterIcon width={32} height={32} />
                        </Condition>
                      </>
                    )}
                    url='/'
                  />
                </Layout>
                <Layout flexBasis={8} />
                <Layout>
                  <Social
                    icon={(hover) => (
                      <>
                        <Condition match={hover}>
                          <InstagramInvertedIcon width={32} height={32} />
                        </Condition>
                        <Condition match={!hover}>
                          <InstagramIcon width={32} height={32} />
                        </Condition>
                      </>
                    )}
                    url='/'
                  />
                </Layout>
              </Row>
            </Column>
            <Layout flexBasis={127} />
            <Column>
              <Row alignItems='flex-end'>
                <Layout>
                  <Input
                    placeholder='E-mail'
                    label={formatMessage({
                      id: 'footer.lets_be_in_touch',
                      defaultMessage: 'Let’s be in touch',
                    })}
                  />
                </Layout>
                <Layout flexBasis={8} />
                <Layout flexShrink={0}>
                  <Button>
                    <FormattedMessage id='footer.send' defaultMessage='Send' />
                  </Button>
                </Layout>
              </Row>
            </Column>
          </Layout>
          <Layout flexBasis={67} />
        </Column>
        <Layout flexBasis={24} />
      </Layout>
    </Row>
  )
}

export { Footer }
