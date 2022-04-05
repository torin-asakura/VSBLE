import React                     from 'react'
import { FC }                    from 'react'
import { FormattedMessage }      from 'react-intl'

import { Button }                from '@ui/button'
import { Condition }             from '@ui/condition'
import { ImageBlock }            from '@ui/image'
import { Layout }                from '@ui/layout'
import { Box }                   from '@ui/layout'
import { Text }                  from '@ui/text'
import { useHover }              from '@ui/utils'

import { AvatarStandaloneProps } from './avatar.interfaces'
import { Container }             from './container'
import { mockAvatarImage }       from './images'

const AvatarStandalone: FC<AvatarStandaloneProps> = ({ height, width }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Button variant='ghost' size='ghost' {...hoverProps}>
      <Container width={width} height={height} showBorder>
        <ImageBlock width='100%' height='100%' src={mockAvatarImage} />
        <Condition match={hover}>
          <Box
            position='absolute'
            zIndex={100}
            bottom={0}
            width='100%'
            height='30%'
            backgroundColor='background.transparentBlack'
            justifyContent='center'
            alignItems='center'
            style={{ cursor: 'pointer' }}
          >
            <Layout>
              <Text color='text.white' fontSize='semiRegular'>
                <FormattedMessage id='avatar.edit' defaultMessage='Edit' />
              </Text>
            </Layout>
          </Box>
        </Condition>
      </Container>
    </Button>
  )
}

export { AvatarStandalone }
