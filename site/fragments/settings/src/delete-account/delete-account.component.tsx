import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Input }            from '@ui/input'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

const DeleteAccount: FC = () => {
  const { formatMessage } = useIntl()
  const [currentPassword, setCurrentPassword] = useState<string>('')

  return (
    <Row>
      <Column fill>
        <Row>
          <Text fontSize='semiGiant' fontWeight='bold' color='text.accent' lineHeight='semiLarge'>
            <FormattedMessage id='settings.delete_account' defaultMessage='Delete Account' />
          </Text>
        </Row>
        <Layout flexBasis={8} />
        <Row>
          <Text fontSize='default' lineHeight='medium'>
            <FormattedMessage
              id='settings.all_images_will_be_removed'
              defaultMessage='All images wil be removed from ongoing briefings, the showroom and our servers. This action can not be undone.'
            />
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
        <Layout flexBasis={24} />
        <Layout>
          <Button variant='danger'>
            <FormattedMessage
              id='settings.delete_account_permanently'
              defaultMessage='Delete Account Permanently'
            />
          </Button>
        </Layout>
      </Column>
    </Row>
  )
}

export { DeleteAccount }
