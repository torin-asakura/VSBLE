import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { CloseIcon }        from '@ui/icons'
import { LikeIcon }         from '@ui/icons'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

const Header: FC = () => {
  const [likeHover, setLikeHover] = useHover()
  const [closeHover, setCloseHover] = useHover()

  return (
    <Box width='100%' height={44} justifyContent='center'>
      <Layout flexShrink={0} flexBasis={24} />
      <Layout width={['100%', '100%', 1440]}>
        <Column fill>
          <Layout flexBasis={24} />
          <Row alignItems='center'>
            <Layout>
              <Text fontSize='increased' color='text.accent' fontWeight='bold' lineHeight='extra'>
                <FormattedMessage id='file_page.file_info' defaultMessage='File info' />
              </Text>
            </Layout>
            <Layout flexGrow={1} />
            <Layout {...setLikeHover}>
              <Button variant='secondary'>
                <LikeIcon color={likeHover ? 'purple' : 'black'} />
                <FormattedMessage id='file_page.file_info' defaultMessage='Like' />
              </Button>
            </Layout>
            <Layout flexBasis={32} />
            <Layout {...setCloseHover}>
              <NextLink path='/profile'>
                <CloseIcon color={closeHover ? 'purple' : 'black'} />
              </NextLink>
            </Layout>
          </Row>
        </Column>
        <Layout flexShrink={0} flexBasis={30} />
      </Layout>
    </Box>
  )
}

export { Header }
