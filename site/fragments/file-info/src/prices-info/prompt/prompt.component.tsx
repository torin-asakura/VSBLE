import React                from 'react'
import { FC }               from 'react'
import { Arrow }            from 'react-laag'
import { useIntl }          from 'react-intl'

import styled               from '@emotion/styled'

import { Column }           from '@ui/layout'
import {Layout}             from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'
import { InformationIcon }  from '@ui/icons'
import { Tooltip }          from '@ui/tooltip'

import { PromptProps }      from './prompt.interface'

const Container = styled.div({
  display: 'flex',
  width: 200,
  padding: '16px',
  color: '#fff',
  backgroundColor: 'rgba(60, 60, 60, 1)',
  borderRadius: '8px',
  zIndex: 1000,
})

const Prompt: FC<PromptProps> = ({ license, info, vatInfo }) => {
  const { formatMessage } = useIntl()

  return (
    <Layout>
      <Tooltip
        anchor='BOTTOM_CENTER'
        trigger='hover'
        container={
          <Layout>
            <Container>
              <Arrow
                backgroundColor='rgba(60, 60, 60, 1)'
                angle={30}
                size={20}/>
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
          </Layout>
        }
      >
        <Layout>
          <InformationIcon width='1.5rem' height='1.5rem'/>
        </Layout>
      </Tooltip>
    </Layout>
  )
}

export { Prompt }
