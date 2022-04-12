import React                     from 'react'
import { FC }                    from 'react'
import { FormattedMessage }      from 'react-intl'

import { Row }                   from '@ui/layout'
import { Column }                from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Divider }               from '@ui/divider'
import { Button }                from '@ui/button'
import { Text }                  from '@ui/text'
import { Link }                  from '@ui/link'
import { AvatarStandalone }      from '@ui/avatar'
import { Condition }             from '@ui/condition'
import { FacebookIcon }          from '@ui/icons'
import { FacebookInvertedIcon }  from '@ui/icons'
import { InstagramIcon }         from '@ui/icons'
import { InstagramInvertedIcon } from '@ui/icons'
import { TwitterIcon }           from '@ui/icons'
import { TwitterInvertedIcon }   from '@ui/icons'
import { VimeoIcon }             from '@ui/icons'
import { VimeoInvertedIcon }     from '@ui/icons'
import { LinkedinIcon }          from '@ui/icons'
import { LinkedinInvertedIcon }  from '@ui/icons'

import { Social }                from '../social'
import { useMockedUser }         from '../data'

const UserDetails: FC = () => {
  const { user } = useMockedUser()

  return (
    <Row>
      <Column fill>
        <Row justifyContent='center'>
          <AvatarStandalone width={120} height={120} />
        </Row>
        <Layout flexBasis={16} />
        <Row justifyContent='center'>
          <Text fontSize='colossal' color='text.accent' fontWeight='bold' lineHeight='extra' textAlign='center'>
            <FormattedMessage id='creator_page.name_surname' defaultMessage='Annija Abzalone' />
          </Text>
        </Row>
        <Layout flexBasis={4} />
        <Row justifyContent='center'>
          <Text fontSize='default' color='text.accent' fontWeight='normal' lineHeight='default'>
            <FormattedMessage id='creator_page.residence' defaultMessage='Cēsis, Cēsu pilsēta, Latvia' />
          </Text>
        </Row>
        <Layout flexBasis={15} />
        <Row justifyContent='center'>
          <Text fontSize='default' color='text.accent' fontWeight='normal' lineHeight='default'>
            <FormattedMessage id='creator_page.job_hobby' defaultMessage='Conceptual & Advertising | Food & Still Life' />
          </Text>
        </Row>
        <Layout flexBasis={8} />
        <Row justifyContent='center'>
          <Link href={`https://${user.site}`} target='_blank'>
            <Text color='text.purple' fontSize='default' lineHeight='default'>
              {user.site}
            </Text>
            <Divider weight={1} backgroundColor='background.purple' />
          </Link>
        </Row>
        <Layout flexBasis={24} />
        <Row justifyContent='center'>
          <Layout>
            <Social
              icon={(hover) => (
                <>
                  <Condition match={hover}>
                    <FacebookInvertedIcon width={32} height={32} />
                  </Condition>
                  <Condition match={!hover}>
                    <FacebookIcon width={32} height={32} />
                  </Condition>
                </>
              )}
              url='/'
           />
          </Layout>
          <Layout flexBasis={8} />
          <Layout>
            <Social
              icon={(hover) => (
                <>
                  <Condition match={hover}>
                    <InstagramInvertedIcon width={32} height={32} />
                  </Condition>
                  <Condition match={!hover}>
                    <InstagramIcon width={32} height={32} />
                  </Condition>
                </>
              )}
              url='/'
            />
          </Layout>
          <Layout flexBasis={8} />
          <Layout>
            <Social
              icon={(hover) => (
                <>
                  <Condition match={hover}>
                    <TwitterInvertedIcon width={32} height={32} />
                  </Condition>
                  <Condition match={!hover}>
                    <TwitterIcon width={32} height={32} />
                  </Condition>
                </>
              )}
              url='/'
            />
          </Layout>
          <Layout flexBasis={8} />
          <Layout>
            <Social
              icon={(hover) => (
                <>
                  <Condition match={hover}>
                    <LinkedinInvertedIcon width={32} height={32} />
                  </Condition>
                  <Condition match={!hover}>
                    <LinkedinIcon width={32} height={32} />
                  </Condition>
                </>
              )}
              url='/'
            />
          </Layout>
          <Layout flexBasis={8} />
          <Layout>
            <Social
              icon={(hover) => (
                <>
                  <Condition match={hover}>
                    <VimeoInvertedIcon width={32} height={32} />
                  </Condition>
                  <Condition match={!hover}>
                    <VimeoIcon width={32} height={32} />
                  </Condition>
                </>
              )}
              url='/'
            />
          </Layout>
        </Row>
        <Layout flexBasis={24} />
        <Row justifyContent='center'>
          <Button variant='secondary'>
            <FormattedMessage id='creator_page.edit_profile' defaultMessage='Edit Profile' />
          </Button>
        </Row>
        <Layout flexBasis={24} />
        <Row justifyContent='center'>
          <Layout maxWidth={752}>
            <Layout flexBasis={[90, 0, 0]} />
            <Text fontSize='default' color='text.accent' fontWeight='normal' lineHeight='extra' textAlign='center'>
              <FormattedMessage id='creator_page.description' defaultMessage='Creative individual with high quality standarts and great passion for showing things in beautiful way. Provide outstanding service and support. Tend to look on things from  many perspectives, to revial all benefits.' />
            </Text>
            <Layout flexBasis={[90, 0, 0]} />
          </Layout>
        </Row>
      </Column>
    </Row>
 )
}

export { UserDetails }
