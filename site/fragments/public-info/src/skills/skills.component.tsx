import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Select }           from '@ui/select'
import { Text }             from '@ui/text'

const Skills: FC = () => {
  const [skillLevel, setSkillLevel] = useState<string>('')
  const [assets, setAssets] = useState<string>('')
  const [additionalServices, setAdditionalServices] = useState<string>('')
  const [additionalSkills, setAdditionalSkills] = useState<string>('')

  const { formatMessage } = useIntl()

  return (
    <Row id='skills'>
      <Column fill>
        <Row>
          <Text fontSize='semiGiant' color='text.accent' fontWeight='bold'>
            <FormattedMessage id='public_info.skills' defaultMessage='Skills' />
          </Text>
        </Row>
        <Layout flexBasis={24} />
        <Row>
          <Select
            label={formatMessage({ id: 'public_info.skill_level', defaultMessage: 'Skill Level' })}
            placeholder={formatMessage({
              id: 'public_info.select_skill_level',
              defaultMessage: 'Select Skill Level',
            })}
            items={['Option 1', 'Option 2']}
            value={skillLevel}
            onChange={setSkillLevel}
          />
        </Row>
        <Layout flexBasis={24} />
        <Row>
          <Select
            label={formatMessage({ id: 'public_info.assets', defaultMessage: 'Assets' })}
            placeholder={formatMessage({
              id: 'public_info.select_assets',
              defaultMessage: 'Select Assets',
            })}
            items={['Option 1', 'Option 2']}
            value={assets}
            onChange={setAssets}
            multiselect
            requestAddition
          />
        </Row>
        <Layout flexBasis={24} />
        <Row>
          <Select
            label={formatMessage({
              id: 'public_info.additional_services',
              defaultMessage: 'Additional Services',
            })}
            placeholder={formatMessage({
              id: 'public_info.select_additional_services',
              defaultMessage: 'Select Additional Services',
            })}
            items={['Option 1', 'Option 2']}
            value={additionalServices}
            onChange={setAdditionalServices}
          />
        </Row>
        <Layout flexBasis={24} />
        <Row>
          <Select
            label={formatMessage({
              id: 'public_info.additional_skills',
              defaultMessage: 'Additional Skills',
            })}
            placeholder={formatMessage({
              id: 'public_info.select_additional_skills',
              defaultMessage: 'Select Additional Skills',
            })}
            items={['Option 1', 'Option 2']}
            value={additionalSkills}
            onChange={setAdditionalSkills}
          />
        </Row>
        <Layout flexBasis={24} />
        <Layout>
          <Button>
            <FormattedMessage id='public_info.update_skills' defaultMessage='Update Skills' />
          </Button>
        </Layout>
      </Column>
    </Row>
  )
}

export { Skills }
