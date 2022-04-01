import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Input }            from '@ui/input'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Select }           from '@ui/select'
import { Text }             from '@ui/text'
import { Repeater }         from '@ui/utils'

const Marketplace: FC = () => {
  const { formatMessage } = useIntl()

  const [firstName, setFirstName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [, setCountry] = useState<string>('')
  const [streetLine1, setStreetLine1] = useState<string>('')
  const [streetLine2, setStreetLine2] = useState<string>('')
  const [zip, setZip] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [company, setCompany] = useState<string>('')

  return (
    <Row id='marketplace'>
      <Column fill>
        <Row>
          <Text fontSize='semiGiant' color='text.accent' lineHeight='semiLarge' fontWeight='bold'>
            <FormattedMessage id='settings.marketplace' defaultMessage='Marketplace' />
          </Text>
        </Row>
        <Layout flexBasis={8} />
        <Row>
          <Column fill>
            <Repeater
              items={formatMessage({
                id: 'settings.selling_with_vsble_space',
                defaultMessage:
                  'Selling with VSBLE.space pricing model. If you offer any image with VSBLE.space Pricing model for immediate purchase you must provide full details of your invoice address. This is necessary so we can issue proper sales statemetns for your accounting.\nAll other image offered on request can not be purchased online. The buyer will contact you for pricing.\nTo sell images online the below information must be filled out.',
              }).split('\n')}
              onIteration={(item, index) => (
                <>
                  <Condition match={index !== 0}>
                    <Layout flexBasis={16} />
                  </Condition>
                  <Row>
                    <Text fontSize='default' lineHeight='medium'>
                      {item}
                    </Text>
                  </Row>
                </>
              )}
            />
          </Column>
        </Row>
        <Layout flexBasis={24} />
        <Row>
          <Layout width={['100%', '100%', 272]}>
            <Input
              label={formatMessage({ id: 'settings.first_name', defaultMessage: 'First Name' })}
              value={firstName}
              onChange={setFirstName}
            />
          </Layout>
          <Layout flexBasis={16} />
          <Layout width={['100%', '100%', 272]}>
            <Input
              label={formatMessage({ id: 'settings.surname', defaultMessage: 'Surname' })}
              value={surname}
              onChange={setSurname}
            />
          </Layout>
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Text fontSize='default' lineHeight='medium' fontWeight='semiBold' color='text.accent'>
            <FormattedMessage id='settings.billing_address' defaultMessage='Billing Address' />
          </Text>
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Select
            label={formatMessage({ id: 'settings.country', defaultMessage: 'Country' })}
            items={['One', 'Two']}
            onChange={setCountry}
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Input
            label={`${formatMessage({
              id: 'settings.street_line',
              defaultMessage: 'Street Line',
            })} 1`}
            value={streetLine1}
            onChange={setStreetLine1}
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Input
            label={`${formatMessage({
              id: 'settings.street_line',
              defaultMessage: 'Street Line',
            })} 2`}
            value={streetLine2}
            onChange={setStreetLine2}
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Layout width={['100%', '100%', 272]}>
            <Input
              label={formatMessage({ id: 'settings.zip', defaultMessage: 'Zip' })}
              value={zip}
              onChange={setZip}
            />
          </Layout>
          <Layout flexBasis={16} />
          <Layout width={['100%', '100%', 272]}>
            <Input
              label={formatMessage({ id: 'settings.city', defaultMessage: 'City' })}
              value={city}
              onChange={setCity}
            />
          </Layout>
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Input
            label={formatMessage({ id: 'settings.company', defaultMessage: 'Company' })}
            value={company}
            onChange={setCompany}
          />
        </Row>
        <Layout flexBasis={24} />
        <Layout>
          <Button>
            <FormattedMessage id='settings.save_changes' defaultMessage='Save Changes' />
          </Button>
        </Layout>
      </Column>
    </Row>
  )
}

export { Marketplace }
