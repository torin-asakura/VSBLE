import { Repeater }                 from '@ui/utils/src'

import React                        from 'react'
import { FC }                       from 'react'
import { FormattedMessage }         from 'react-intl'

import { Condition }                from '@ui/condition'
import { Row }                      from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Column }                   from '@ui/layout'
import { Text }                     from '@ui/text'

import { SaleStatement }            from './sale-statement'
import { useMockedSalesStatements } from '../data'

const SalesStatements: FC = () => {
  const { salesStatements } = useMockedSalesStatements()

  return (
    <Row>
      <Column fill>
        <Row>
          <Text color='text.accent' fontSize='semiGiant' fontWeight='bold' lineHeight='semiLarge'>
            <FormattedMessage id='settings.sales_statements' defaultMessage='Sales Statements' />
          </Text>
        </Row>
        <Layout flexBasis={8} />
        <Row>
          <Condition match={Object.keys(salesStatements).length === 0}>
            <Text fontSize='default' lineHeight='extra'>
              <FormattedMessage
                id='settings.you_dont_have_sales'
                defaultMessage="Sorry, you don't have sales yet"
              />
            </Text>
          </Condition>
          <Column fill>
            <Condition match={Object.keys(salesStatements).length !== 0}>
              <Repeater
                items={Object.entries(salesStatements)}
                onIteration={([year, statements]) => (
                  <>
                    <SaleStatement statements={statements} year={year} />
                    <Layout flexBasis={4} />
                  </>
                )}
              />
            </Condition>
          </Column>
        </Row>
      </Column>
    </Row>
  )
}

export { SalesStatements }
