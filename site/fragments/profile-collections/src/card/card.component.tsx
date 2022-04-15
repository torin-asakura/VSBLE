import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { FolderCheckIcon }  from '@ui/icons'
import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { useHover }         from '@ui/utils'

import { CardProps }        from './card.interfaces'

const Card: FC<CardProps> = ({ imageSrc }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Box width={['100%', '100%', 272]} justifyContent={['center', 'center', 'flex-start']}>
      <Column fill>
        <NextLink path='/file'>
          <Box
            width='100%'
            // @ts-ignore
            cursor='pointer'
            position='relative'
            {...hoverProps}
          >
            <Condition match={hover}>
              <Box
                width='100%'
                position='absolute'
                justifyContent='flex-end'
                bottom='8px'
                right='8px'
                zIndex={1}
              >
                <Button variant='secondary'>
                  <FormattedMessage id='creator_page.make_cover' defaultMessage='Make Cover' />
                </Button>
                <Layout flexBasis={8} />
                <Button variant='purple' style={{ paddingLeft: '12px', paddingRight: '12px' }}>
                  <FolderCheckIcon fontSize='17px' />
                </Button>
              </Box>
            </Condition>
            <ImageBlock src={imageSrc} width='100%' height='100%' />
          </Box>
        </NextLink>
        <Layout flexShrink={0} flexBasis={16} />
      </Column>
    </Box>
  )
}

export { Card }
