/* eslint-disable jsx-a11y/anchor-is-valid */

import { WithUser }         from '@atls/react-user'
import { WithoutUser }      from '@atls/react-user'

import React                from 'react'
import { useState }         from 'react'
import { FormattedMessage } from 'react-intl'
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
import { Text }             from '@ui/text'
import { NextLink }         from '@ui/link'
import { Logo }             from '@ui/logo'
import { Input }            from '@ui/input'
import { useHover }         from '@ui/utils'
import { searchVar }        from '@site/store'
import { searchValueVar }   from '@site/store'

import { useReactiveVar }   from '@apollo/client'

import { Link }             from './link'

export const Navigation = () => {
  const { formatMessage } = useIntl()

  const [searchHover, setSearchHover] = useHover()
  const [result, setResult] = useState<string>('')

  const search = useReactiveVar(searchVar)

  searchValueVar(result)

  const user = {
    role: 'artbuyer',
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      window.location.href='/search'
    }
  }

  const handleChange = (event) => {
    setResult(event)
  }

  return (
    <Box height={72} width='100%' justifyContent='center'>
      <Layout width={['100%', '100%', 1440]}>
        <Layout flexShrink={0} flexBasis={24} />
        <Column fill>
          <Layout flexBasis={24} />
          <Row alignItems='center'>
            <Layout>
              <Logo />
            </Layout>
            <Condition match={search}>
              <Layout display={['none', 'none', 'flex']}>
                <Layout flexBasis={47} />
                <Layout width={['100%', '100%', 655]} height='48px' alignItems='center'>
                  <Input
                    type='search'
                    placeholder={formatMessage({ id: 'navigation.search', defaultMessage: 'Search' })}
                    value={result}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    style={{ flexDirection: 'row-reverse' }}
                  />
                </Layout>
              </Layout>
            </Condition>
            <Layout flexGrow={1} />
            <Condition match={!search}>
              <Layout {...setSearchHover}>
                <Button size='ghost' variant='ghost' onClick={() => searchVar(true)}>
                  <LoupeIcon color={searchHover ? 'black' : 'gray'} />
                  <Text fontSize='semiRegular' color={searchHover ? 'black' : 'text.primary'}>
                    <FormattedMessage id='navigation.search' defaultMessage='Search' />
                  </Text>
                </Button>
              </Layout>
            </Condition>
            <Layout flexBasis={24} />
            <WithUser>
              <Layout>
                <Link
                  text={
                    <FormattedMessage id='navigation.job_requests' defaultMessage='Job requests' />
                  }
                  icon={(hover) => <BriefcaseIcon color={hover ? 'black' : 'gray'} />}
                  path='#job-requests'
                />
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Link
                  icon={(hover) => <InboxIcon color={hover ? 'black' : 'gray'} />}
                  text={
                    <FormattedMessage
                      id='navigation.image_requests'
                      defaultMessage='Image requests'
                    />
                  }
                  path='#image-requests'
                />
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Link
                  icon={(hover) => <BookmarkIcon color={hover ? 'black' : 'gray'} />}
                  text={<FormattedMessage id='navigation.favourites' defaultMessage='Favourites' />}
                  path='#favourites'
                />
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Link
                  icon={(hover) => <ShoppingCartIcon color={hover ? 'black' : 'gray'} />}
                  text={<FormattedMessage id='navigation.cart' defaultMessage='Cart' />}
                  path='#cart'
                />
              </Layout>
              <Layout flexBasis={24} flexShrink={0} />
              <Condition match={user.role === 'creator'}>
                <Layout>
                  <Button>
                    <UploadIcon color='white' />
                    <FormattedMessage
                      id='navigation.upload_images'
                      defaultMessage='Upload images'
                    />
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
                  <NextLink path='/profile/settings'>
                    <Button variant='secondary'>
                      <FormattedMessage id='navigation.log_in' defaultMessage='Log In' />
                    </Button>
                  </NextLink>
                </Layout>
                <Layout display={['flex', 'flex', 'none']}>
                  <NextLink path='/profile/settings'>
                    <Button variant='secondary' size='small'>
                      <FormattedMessage id='navigation.log_in' defaultMessage='Log In' />
                    </Button>
                  </NextLink>
                </Layout>
              </Layout>
              <Layout flexBasis={8} />
              <Layout>
                <Layout display={['none', 'none', 'flex']}>
                  <NextLink path='/profile/public-info'>
                    <Button>
                      <FormattedMessage id='navigation.sign_up' defaultMessage='Sign Up' />
                    </Button>
                  </NextLink>
                </Layout>
                <Layout display={['flex', 'flex', 'none']}>
                  <NextLink path='/profile/public-info'>
                    <Button size='small'>
                      <FormattedMessage id='navigation.sign_up' defaultMessage='Sign Up' />
                    </Button>
                  </NextLink>
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
