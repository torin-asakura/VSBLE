import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'

import { Button }           from '@ui/button'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Toggle }           from '@ui/toggle'

const Notification: FC = () => {
  const [jobRequests, setJobRequests] = useState<boolean>(false)
  const [imageRequests, setImageRequests] = useState<boolean>(false)

  return (
    <Row>
      <Column fill>
        <Row>
          <Text fontSize='semiGiant' lineHeight='semiLarge' color='text.accent' fontWeight='bold'>
            <FormattedMessage
              id='settings.notification_settings'
              defaultMessage='Notification Settings'
            />
          </Text>
        </Row>
        <Layout flexBasis={24} />
        <Row>
          <Layout>
            <Toggle checked={jobRequests} onChange={setJobRequests} />
          </Layout>
          <Layout flexBasis={10} />
          <Layout>
            <Text fontSize='semiRegular' color='text.accent'>
              <FormattedMessage id='settings.job_requests' defaultMessage='Job Requests' />
            </Text>
          </Layout>
        </Row>
        <Layout flexBasis={24} />
        <Row>
          <Layout>
            <Toggle checked={imageRequests} onChange={setImageRequests} />
          </Layout>
          <Layout flexBasis={10} />
          <Layout>
            <Text fontSize='semiRegular' color='text.accent'>
              <FormattedMessage id='settings.image_requests' defaultMessage='Image Requests' />
            </Text>
          </Layout>
        </Row>
        <Layout flexBasis={24} />
        <Layout>
          <Button>
            <FormattedMessage id='settings.confirm' defaultMessage='Confirm' />
          </Button>
        </Layout>
      </Column>
    </Row>
  )
}

export { Notification }
