import React                from 'react'
import { FC }               from 'react'
import { Arrow }            from 'react-laag'
import { useIntl }          from 'react-intl'

import styled               from '@emotion/styled'

import { Column }           from '@ui/layout'
import {Layout}             from '@ui/layout'
import { Row }              from '@ui/layout'
import { Box }              from '@ui/layout'
import { Text }             from '@ui/text'
import { InformationIcon }  from '@ui/icons'
import { useHover }         from '@ui/utils'

import { PromptProps }      from './prompt.interface'
import { useTooltip }       from './use-tooltip.hook'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: 200,
  padding: '16px',
  color: '#fff',
  backgroundColor: 'rgba(60, 60, 60, 1)',
  borderRadius: '8px',
  zIndex: 1000,
})

const ArrowContainer = styled.div({
  transform: 'rotate(180deg)',
  marginRight: '15px'
})

const Prompt: FC<PromptProps> = ({ license, info, vatInfo }) => {
  const { formatMessage } = useIntl()
  const [hover, hoverProps] = useHover()
  const { layerProps, triggerProps, render } = useTooltip()

  return (
    <Box
      // @ts-ignore
      cursor='pointer'
      {...hoverProps}
      {...triggerProps}
    >
      {render(
        <Column height='auto' {...layerProps}>
          <Column justifyContent='center' alignItems='center'>
            <ArrowContainer>
            <Arrow
              backgroundColor='rgba(60, 60, 60, 1)'
              angle={35}
              size={15}
            />
              </ArrowContainer>
          </Column>
          <Container>
            <Column>
              <Row>
                <Text color='text.white' fontSize='semiRegular' fontWeight='semiBold' lineHeight='default'>
                  {formatMessage({id: 'file_page.license', defaultMessage: `${license}`})}
                </Text>
              </Row>
              <Layout flexBasis={8}/>
              <Row>
                <Text color='text.white' fontSize='semiRegular' lineHeight='default'>
                  {formatMessage({
                    id: 'file_page.info_license',
                    defaultMessage: `${info}`
                  })}
                </Text>
              </Row>
              <Layout flexBasis={24}/>
              <Row>
                <Text color='text.white' fontSize='semiRegular' fontWeight='semiBold' lineHeight='default'>
                  {formatMessage({id: 'file_page.VAT', defaultMessage: `VAT`})}
                </Text>
              </Row>
              <Layout flexBasis={8}/>
              <Row>
                <Text color='text.white' fontSize='semiRegular' lineHeight='default'>
                  {formatMessage({
                    id: 'file_page.info_VAT',
                    defaultMessage: `${vatInfo}`
                  })}
                </Text>
              </Row>
            </Column>
          </Container>
        </Column>
      )}
      <Layout>
        <InformationIcon color={hover ? 'black' : 'lightGray'} width='1.5rem' height='1.5rem'/>
      </Layout>
    </Box>
  )
}

export { Prompt }