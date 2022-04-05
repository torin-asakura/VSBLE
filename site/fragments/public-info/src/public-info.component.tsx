import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { AvatarStandalone } from '@ui/avatar'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { AboutMe }          from './about-me'
import { Anchors }          from './anchors'
import { Skills }           from './skills'
import { SocialLinks }      from './social-links'

const PublicInfo: FC = () => (
  <Row justifyContent='center'>
    <Layout flexBasis={24} />
    <Layout width={['100%', '100%', 1392]}>
      <Column fill>
        <Row justifyContent='center'>
          <Text fontSize='colossal' color='text.accent' fontWeight='bold' lineHeight='extra'>
            <FormattedMessage id='settings.settings' defaultMessage='Settings' />
          </Text>
        </Row>
        <Layout flexBasis={40} />
        <Row>
          <Anchors
            anchors={[
              {
                path: '#about-me',
                content: <FormattedMessage id='public_info.about_me' defaultMessage='About Me' />,
              },
              {
                path: '#social-links',
                content: (
                  <FormattedMessage id='public_info.social_links' defaultMessage='Social Links' />
                ),
              },
              {
                path: '#skills',
                content: <FormattedMessage id='public_info.skills' defaultMessage='Skills' />,
              },
            ]}
          />
          <Layout flexBasis={[0, 0, 305]} />
          <Column flexGrow={1} maxWidth={560}>
            <Row justifyContent='center'>
              <AvatarStandalone width={120} height={120} />
            </Row>
            <Layout flexBasis={48} />
            <AboutMe />
            <Layout flexBasis={48} />
            <SocialLinks />
            <Layout flexBasis={48} />
            <Skills />
            <Layout flexBasis={48} />
          </Column>
          <Column flexGrow={1} flexShrink={0} />
        </Row>
      </Column>
    </Layout>
    <Layout flexBasis={24} />
  </Row>
)

export { PublicInfo }
