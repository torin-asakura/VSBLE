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
import { Select }           from '@ui/select'
import { Text }             from '@ui/text'

const AboutMe: FC = () => {
  const [name, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [website, setWebsite] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [town, setTown] = useState<string>('')
  const [shortDescription, setShortDescription] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const { formatMessage } = useIntl()

  return (
    <Row id='about-me'>
      <Column fill>
        <Row>
          <Text fontSize='semiGiant' color='text.accent' fontWeight='bold'>
            <FormattedMessage id='public_info.about_me' defaultMessage='About Me' />
          </Text>
        </Row>
        <Layout flexBasis={24} />
        <Row>
          <Input
            label={formatMessage({ id: 'public_info.name', defaultMessage: 'Name' })}
            value={name}
            onChange={setName}
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Input
            label={formatMessage({ id: 'public_info.surname', defaultMessage: 'Surname' })}
            value={surname}
            onChange={setSurname}
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Select
            items={['Photographer', 'Artbuyer']}
            value={role}
            onChange={setRole}
            label={formatMessage({ id: 'public_info.role', defaultMessage: 'Role' })}
            placeholder={formatMessage({
              id: 'public_info.select_your_role',
              defaultMessage: 'Select your role',
            })}
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Input
            placeholder={formatMessage({ id: 'public_info.link', defaultMessage: 'Link' })}
            label={formatMessage({ id: 'public_info.website', defaultMessage: 'Website' })}
            hint={formatMessage({
              id: 'public_info.your_homepage_blog_or_company_site',
              defaultMessage: 'Your home page, blog, or company site.',
            })}
            value={website}
            onChange={setWebsite}
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Layout width={['100%', '100%', 276]}>
            <Select
              items={['USA', 'Russia']}
              label={formatMessage({ id: 'public_info.home_base', defaultMessage: 'Home Base' })}
              placeholder={formatMessage({
                id: 'public_info.select_country',
                defaultMessage: 'Select Country',
              })}
              value={country}
              onChange={setCountry}
            />
          </Layout>
          <Layout flexBasis={8} />
          <Layout width={['100%', '100%', 276]}>
            <Column fill>
              <Layout flexBasis={14} />
              <Input
                placeholder={formatMessage({ id: 'public_info.town', defaultMessage: 'Town' })}
                value={town}
                onChange={setTown}
              />
            </Column>
          </Layout>
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Input
            placeholder={formatMessage({
              id: 'public_info.short_description_title_ex',
              defaultMessage: 'Ex. Aspring Fashion Photographer',
            })}
            label={formatMessage({
              id: 'public_info.short_description_title',
              defaultMessage: 'Short Description / Title',
            })}
            value={shortDescription}
            onChange={setShortDescription}
            maxLength={100}
          />
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Input
            hint={formatMessage({
              id: 'public_info.brief_description_for_your_profile',
              defaultMessage: 'Brief description for your profiles-page. URLs are hyperlinked.',
            })}
            label={formatMessage({
              id: 'public_info.description_about_me',
              defaultMessage: 'Description / About me',
            })}
            placeholder={formatMessage({
              id: 'public_info.description_about_me_ex',
              defaultMessage: 'Ex.  I am based in … working since… ',
            })}
            value={description}
            onChange={setDescription}
            maxLength={500}
            textarea
          />
        </Row>
        <Layout flexBasis={24} />
        <Layout>
          <Button>
            <FormattedMessage
              id='public_info.update_information'
              defaultMessage='Update Information'
            />
          </Button>
        </Layout>
      </Column>
    </Row>
  )
}

export { AboutMe }
