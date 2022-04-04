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

const SocialLinks: FC = () => {
  const [facebook, setFacebook] = useState<string>('')
  const [instagram, setInstagram] = useState<string>('')
  const [twitter, setTwitter] = useState<string>('')
  const [linkedIn, setLinkedIn] = useState<string>('')
  const [vimeo, setVimeo] = useState<string>('')

  const { formatMessage } = useIntl()

  return (
    <Row id='social-links'>
      <Column fill>
        <Row>
          <Text fontSize='semiGiant' color='text.accent' fontWeight='bold'>
            <FormattedMessage id='public_info.social_links' defaultMessage='Social Links' />
          </Text>
        </Row>
        <Layout flexBasis={24} />
        <Row>
          <Input
            label={formatMessage({ id: 'public_info.facebook', defaultMessage: 'Facebook' })}
            placeholder={formatMessage({
              id: 'public_info.account_link',
              defaultMessage: 'Account Link',
            })}
            value={facebook}
            onChange={setFacebook}
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Input
            label={formatMessage({ id: 'public_info.instagram', defaultMessage: 'Instagram' })}
            placeholder={formatMessage({
              id: 'public_info.account_link',
              defaultMessage: 'Account Link',
            })}
            value={instagram}
            onChange={setInstagram}
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Input
            label={formatMessage({ id: 'public_info.twitter', defaultMessage: 'Twitter' })}
            placeholder={formatMessage({
              id: 'public_info.account_link',
              defaultMessage: 'Account Link',
            })}
            value={twitter}
            onChange={setTwitter}
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Input
            label={formatMessage({ id: 'public_info.linked_in', defaultMessage: 'Linked In' })}
            placeholder={formatMessage({
              id: 'public_info.account_link',
              defaultMessage: 'Account Link',
            })}
            value={linkedIn}
            onChange={setLinkedIn}
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Input
            label={formatMessage({ id: 'public_info.vimeo', defaultMessage: 'Vimeo' })}
            placeholder={formatMessage({
              id: 'public_info.account_link',
              defaultMessage: 'Account Link',
            })}
            value={vimeo}
            onChange={setVimeo}
          />
        </Row>
        <Layout flexBasis={16} />
        <Layout>
          <Button>
            <FormattedMessage
              id='public_info.update_social_profiles'
              defaultMessage='Update Social Profiles'
            />
          </Button>
        </Layout>
      </Column>
    </Row>
  )
}

export { SocialLinks }
