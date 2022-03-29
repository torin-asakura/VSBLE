/* eslint-disable jsx-a11y/anchor-is-valid */

import { WithUser }         from '@atls/react-user'
import { WithoutUser }      from '@atls/react-user'

import React                from 'react'
import { useIntl }          from 'react-intl'

import { Avatar }           from '@ui/avatar'
import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { LoupeIcon }        from '@ui/icons'
import { BriefcaseIcon }    from '@ui/icons'
import { InboxIcon }        from '@ui/icons'
import { BookmarkIcon }     from '@ui/icons'
import { ShoppingCartIcon } from '@ui/icons'
import { UploadIcon }       from '@ui/icons'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Logo }             from '@ui/logo'

import messages             from './messages'
import { Link }             from './link'

export const Navigation = () => {
  const intl = useIntl()

  const user = {
    role: 'artbuyer',
  }

  return (
    <Box height={72} width='100%' justifyContent='center'>
      <Layout width={1440}>
        <Layout flexShrink={0} flexBasis={24} />
        <Column fill>
          <Layout flexBasis={24} />
          <Row alignItems='center'>
            <Layout>
              <Logo />
            </Layout>
            <Layout flexGrow={1} />
            <Layout>
              <Link
                icon={(hover) => <LoupeIcon color={hover ? 'black' : 'gray'} />}
                text={intl.formatMessage(messages.search)}
                path='#search'
              />
            </Layout>
            <Layout flexBasis={24} />
            <WithUser>
              <Layout>
                <Link
                  text={intl.formatMessage(messages.jobRequests)}
                  icon={(hover) => <BriefcaseIcon color={hover ? 'black' : 'gray'} />}
                  path='#job-requests'
                />
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Link
                  icon={(hover) => <InboxIcon color={hover ? 'black' : 'gray'} />}
                  text={intl.formatMessage(messages.imageRequests)}
                  path='#image-requests'
                />
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Link
                  icon={(hover) => <BookmarkIcon color={hover ? 'black' : 'gray'} />}
                  text={intl.formatMessage(messages.favourites)}
                  path='#favourites'
                />
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Link
                  icon={(hover) => <ShoppingCartIcon color={hover ? 'black' : 'gray'} />}
                  text={intl.formatMessage(messages.cart)}
                  path='#cart'
                />
              </Layout>
              <Layout flexBasis={24} />
              <Condition match={user.role === 'creator'}>
                <Layout>
                  <Button>
                    <UploadIcon color='white' />
                    {intl.formatMessage(messages.uploadImages)}
                  </Button>
                </Layout>
                <Layout flexBasis={24} />
              </Condition>
              <Layout>
                <Avatar />
              </Layout>
            </WithUser>
            <WithoutUser>
              <Layout>
                <Layout display={['none', 'none', 'flex']}>
                  <Button variant='secondary'>{intl.formatMessage(messages.logIn)}</Button>
                </Layout>
                <Layout display={['flex', 'flex', 'none']}>
                  <Button variant='secondary' size='small'>
                    {intl.formatMessage(messages.logIn)}
                  </Button>
                </Layout>
              </Layout>
              <Layout flexBasis={8} />
              <Layout>
                <Layout display={['none', 'none', 'flex']}>
                  <Button>{intl.formatMessage(messages.signUp)}</Button>
                </Layout>
                <Layout display={['flex', 'flex', 'none']}>
                  <Button size='small'>{intl.formatMessage(messages.signUp)}</Button>
                </Layout>
              </Layout>
            </WithoutUser>
          </Row>
          <Layout flexBasis={24} />
          <Row>
            <Divider weight={1} backgroundColor='background.gray' />
          </Row>
        </Column>
        <Layout flexShrink={0} flexBasis={24} />
      </Layout>
    </Box>
  )
}
