import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Checkbox }         from '@ui/checkbox'
import { Input }            from '@ui/input'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { useMockedUser }    from '../data'

const BasicInformation: FC = () => {
  const { user } = useMockedUser()
  const { formatMessage } = useIntl()

  const [email, setEmail] = useState<string>(user.email)
  const [phone, setPhone] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [receiveNewsletter, setReceiveNewsletter] = useState<boolean>(user.receivesNewsletter)

  return (
    <Row id='basic-information'>
      <Column fill>
        <Row>
          <Text fontSize='semiGiant' fontWeight='bold' lineHeight='semiLarge' color='text.accent'>
            <FormattedMessage id='settings.basic_information' defaultMessage='Basic Information' />
          </Text>
        </Row>
        <Layout flexBasis={8} />
        <Row>
          <Text fontSize='default' lineHeight='medium'>
            <FormattedMessage
              id='settings.your_email_used_for'
              defaultMessage='Your e-mail is used for all notifications concerning purchase request. It is also the address where the password reset e-mail is sent if you forget your password.'
            />
          </Text>
        </Row>
        <Layout flexBasis={24} />
        <Row>
          <Input
            label='E-mail'
            placeholder={user.email}
            value={email}
            onChange={setEmail}
            disabled
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Input
            label={formatMessage({ id: 'settings.phone', defaultMessage: 'Phone' })}
            placeholder={user.phone}
            value={phone}
            onChange={setPhone}
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Input
            label={formatMessage({ id: 'settings.username', defaultMessage: 'Username' })}
            placeholder={user.username}
            value={username}
            onChange={setUsername}
          />
        </Row>
        <Layout flexBasis={16} />
        <Layout>
          <Checkbox checked={receiveNewsletter} onCheck={setReceiveNewsletter}>
            <FormattedMessage
              id='settings.receive_newsletter'
              defaultMessage='Receive newsletter'
            />
          </Checkbox>
        </Layout>
        <Layout flexBasis={24} />
        <Layout>
          <Button>
            <FormattedMessage
              id='settings.update_information'
              defaultMessage='Update Information'
            />
          </Button>
        </Layout>
      </Column>
    </Row>
  )
}

export { BasicInformation }
