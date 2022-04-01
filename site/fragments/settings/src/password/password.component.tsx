import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Input }            from '@ui/input'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'

const Password: FC = () => {
  const { formatMessage } = useIntl()

  const [currentPassword, setCurrentPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [repeatNewPassword, setRepeatNewPassword] = useState<string>('')

  return (
    <Row id='password'>
      <Column fill>
        <Row>
          <Text color='text.accent' fontSize='semiGiant' fontWeight='bold' lineHeight='semiLarge'>
            <FormattedMessage id='settings.password' defaultMessage='Password' />
          </Text>
        </Row>
        <Layout flexBasis={24} />
        <Row>
          <Input
            type='password'
            label={formatMessage({
              id: 'settings.current_password',
              defaultMessage: 'Current Password',
            })}
            value={currentPassword}
            onChange={setCurrentPassword}
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Input
            type='password'
            label={formatMessage({ id: 'settings.new_password', defaultMessage: 'New Password' })}
            value={newPassword}
            onChange={setNewPassword}
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Input
            type='password'
            label={formatMessage({
              id: 'settings.repeat_new_password',
              defaultMessage: 'Repeat New Password',
            })}
            value={repeatNewPassword}
            onChange={setRepeatNewPassword}
          />
        </Row>
        <Layout flexBasis={24} />
        <Layout>
          <Button>
            <FormattedMessage id='settings.save_changed' defaultMessage='Save Changes' />
          </Button>
        </Layout>
      </Column>
    </Row>
  )
}

export { Password }
