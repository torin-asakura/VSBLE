import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Button }           from '@ui/button'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { CloseIcon }        from '@ui/icons'
import { LikeIcon }         from '@ui/icons'
import { useHover }         from '@ui/utils'

const Header: FC = () => {
  const [hover, hoverProps] = useHover()

  return (
    <Box width='100%' height={44} justifyContent='center'>
      <Layout flexShrink={0} flexBasis={30}/>
      <Layout width={['100%', '100%', 1440]}>
        <Column fill>
          <Layout flexBasis={24}/>
          <Row alignItems='center'>
            <Layout>
              <Text fontSize='increased' color='text.accent' fontWeight='bold' lineHeight='extra'>
                <FormattedMessage id='file_page.file_info' defaultMessage='File info'/>
              </Text>
            </Layout>
            <Layout flexGrow={1}/>
            <Layout {...hoverProps}>
              <Button variant='secondary'>
                <LikeIcon color={hover ? 'purple' : 'black'}/>
                <FormattedMessage id='file_page.file_info' defaultMessage='Like'/>
              </Button>
            </Layout>
            <Layout flexBasis={32}/>
            <Layout>
              <NextLink path='/profile'>
                <CloseIcon/>
              </NextLink>
            </Layout>
          </Row>
        </Column>
        <Layout flexShrink={0} flexBasis={30}/>
      </Layout>
    </Box>
  )
}

export { Header }
