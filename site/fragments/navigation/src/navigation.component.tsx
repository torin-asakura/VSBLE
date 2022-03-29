/* eslint-disable jsx-a11y/anchor-is-valid */

import { WithUser }         from '@atls/react-user'
import { WithoutUser }      from '@atls/react-user'

import React                from 'react'
import { useIntl }          from 'react-intl'

import { Avatar }           from '@ui/avatar'
import { Button }           from '@ui/button'
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
                icon={<LoupeIcon />}
                text={intl.formatMessage(messages.search)}
                path='#search'
              />
            </Layout>
            <Layout flexBasis={24} />
            <WithoutUser>
              <Layout>
                <Link
                  icon={<BriefcaseIcon />}
                  text={intl.formatMessage(messages.jobRequests)}
                  path='#job-requests'
                />
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Link
                  icon={<InboxIcon />}
                  text={intl.formatMessage(messages.imageRequests)}
                  path='#image-requests'
                />
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Link
                  icon={<BookmarkIcon />}
                  text={intl.formatMessage(messages.favourites)}
                  path='#favourites'
                />
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Link
                  icon={<ShoppingCartIcon />}
                  text={intl.formatMessage(messages.cart)}
                  path='#cart'
                />
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Button>
                  <UploadIcon color='white' />
                  {intl.formatMessage(messages.uploadImages)}
                </Button>
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Avatar />
              </Layout>
            </WithoutUser>
            <WithUser>
              <Layout>
                <Button variant='secondary'>{intl.formatMessage(messages.logIn)}</Button>
              </Layout>
              <Layout flexBasis={8} />
              <Layout>
                <Button>{intl.formatMessage(messages.signUp)}</Button>
              </Layout>
            </WithUser>
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
