import React            from 'react'
import { FC }           from 'react'

import { Box }          from '@ui/layout'
import { Row }          from '@ui/layout'
import { Layout }       from '@ui/layout'
import { NextLink }     from '@ui/link'
import { Text }         from '@ui/text'
import { Repeater }     from '@ui/utils'
import { Hover }        from '@ui/utils'

import { AnchorsProps } from './anchors.interfaces'

const Anchors: FC<AnchorsProps> = ({ anchors }) => (
  <Box
    flexDirection='column'
    position='sticky'
    height={184}
    top={160}
    display={['none', 'none', 'flex']}
  >
    <Repeater
      items={anchors}
      onIteration={(item) => (
        <>
          <Row>
            <Hover>
              {(hover, hoverProps) => (
                <NextLink path={item.path} {...hoverProps}>
                  <Text
                    fontSize='increased'
                    lineHeight='semiLarge'
                    fontWeight='bold'
                    color={hover ? 'text.accent' : 'text.lightGray'}
                  >
                    {item.content}
                  </Text>
                </NextLink>
              )}
            </Hover>
          </Row>
          <Layout flexBasis={8} />
        </>
      )}
    />
  </Box>
)

export { Anchors }
