import React                  from 'react'
import { FC }                 from 'react'
import { FormattedMessage }   from 'react-intl'
import { useState }           from 'react'

import { Button }             from '@ui/button'
import { Condition }          from '@ui/condition'
import { ArrowDownIcon }      from '@ui/icons'
import { ArrowUpIcon }        from '@ui/icons'
import { Box }                from '@ui/layout'
import { Row }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Column }             from '@ui/layout'
import { NextLink }           from '@ui/link'
import { Text }               from '@ui/text'
import { Currency }           from '@ui/text'
import { Space }              from '@ui/text'
import { Repeater }           from '@ui/utils'

import { SaleStatementProps } from './sale-statement.interfaces'

const SaleStatement: FC<SaleStatementProps> = ({ statements, year }) => {
  const [open, setOpen] = useState<boolean>(false)

  const calcedHeight = 56 + 40 * statements.length

  return (
    <Row>
      <Button variant='ghost' size='ghost' onClick={() => setOpen(!open)} fill>
        <Box
          backgroundColor='background.beige'
          borderRadius='medium'
          width='100%'
          height={open ? calcedHeight : 56}
          overflow='hidden'
          style={{ transition: '0.3s' }}
          paddingRight={16}
        >
          <Column fill>
            <Row flexShrink={0} height={56} alignItems='center'>
              <Layout width={44} justifyContent='center'>
                <Condition match={!open}>
                  <ArrowDownIcon />
                </Condition>
                <Condition match={open}>
                  <ArrowUpIcon />
                </Condition>
              </Layout>
              <Layout>
                <Text fontSize='semiRegular' fontWeight='semiBold'>
                  {year}
                </Text>
              </Layout>
              <Layout flexGrow={1} />
              <Layout>
                <Text color='text.semiBlack' fontSize='semiRegular'>
                  {statements.length}
                  <Space />
                  <FormattedMessage id='settings.sales' defaultMessage='sales' />
                </Text>
              </Layout>
            </Row>
            <Repeater
              items={statements}
              onIteration={(item) => (
                <>
                  <Layout flexBasis={16} flexShrink={0} />
                  <Row>
                    <Layout flexBasis={44} />
                    <Layout>
                      <Text
                        fontWeight='semiBold'
                        fontSize={['small', 'small', 'semiRegular']}
                        whiteSpace='nowrap'
                      >
                        {item.date}
                      </Text>
                    </Layout>
                    <Layout flexBasis={[20, 20, 0]} flexGrow={[0, 0, 1]} />
                    <Layout>
                      <Currency
                        fontWeight='semiBold'
                        fontSize={['small', 'small', 'semiRegular']}
                        whiteSpace='nowrap'
                        currency='EUR'
                        keepZeros
                        currencySignPlacement='prefix'
                        amount={item.amount}
                      />
                    </Layout>
                    <Layout flexBasis={[20, 20, 56]} flexShrink={[1, 1, 0]} />
                    <Layout>
                      <NextLink path='/profile/settings'>
                        <Text color='text.purple' fontSize={['small', 'small', 'semiRegular']}>
                          <FormattedMessage
                            id='settings.download_invoice'
                            defaultMessage='Download Invoice'
                          />
                        </Text>
                      </NextLink>
                    </Layout>
                  </Row>
                </>
              )}
            />
          </Column>
        </Box>
      </Button>
    </Row>
  )
}

export { SaleStatement }
