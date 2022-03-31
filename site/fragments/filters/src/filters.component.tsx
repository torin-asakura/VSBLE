import { useReactiveVar }    from '@apollo/client'

import React                 from 'react'
import { FC }                from 'react'
import { FormattedMessage }  from 'react-intl'
import { useState }          from 'react'
import { useIntl }           from 'react-intl'

import { Location }          from '@site/store'
import { Followers }         from '@site/store'
import { Search }            from '@site/store'
import { SearchValue }       from '@site/store'
import { Button }            from '@ui/button'
import { Condition }         from '@ui/condition'
import { FilterIcon }        from '@ui/icons'
import { Input }             from '@ui/input'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Select }            from '@ui/select'
import { Switch }            from '@ui/switch'
import { Option }            from '@ui/switch'
import { Text }              from '@ui/text'
import { locationVar }       from '@site/store'
import { followersVar }      from '@site/store'
import { expertiseVar }      from '@site/store'
import { studioVar }         from '@site/store'
import { searchVar }         from '@site/store'
import { searchValueVar }    from '@site/store'
import { postproductionVar } from '@site/store'
import { videographyVar }    from '@site/store'

const Filters: FC = () => {
  const { formatMessage } = useIntl()
  const [filters, setFilters] = useState<boolean>(false)
  const [tags, setTags] = useState<Array<string>>([
    formatMessage({ id: 'filters.all', defaultMessage: 'All' }),
  ])
  const location = useReactiveVar<Location>(locationVar)
  const followers = useReactiveVar<Followers>(followersVar)
  const search = useReactiveVar<Search>(searchVar)
  const searchValue = useReactiveVar<SearchValue>(searchValueVar)

  const options = [
    {
      value: formatMessage({ id: 'filters.all', defaultMessage: 'All' }),
      mutuallyExclusive: true,
    },
    {
      value: formatMessage({
        id: 'filters.photographer',
        defaultMessage: 'Photographer',
      }),
      mutuallyExclusive: false,
    },
    {
      value: formatMessage({ id: 'filters.model', defaultMessage: 'Model' }),
      mutuallyExclusive: false,
    },
    {
      value: formatMessage({
        id: 'filters.make_up_artist',
        defaultMessage: 'MakeUp Artist',
      }),
      mutuallyExclusive: false,
    },
    {
      value: formatMessage({ id: 'filters.stylist', defaultMessage: 'Stylist' }),
      mutuallyExclusive: false,
    },
    {
      value: formatMessage({ id: 'filters.illustrator', defaultMessage: 'Illustrator' }),
      mutuallyExclusive: false,
    },
  ]

  return (
    <Row justifyContent='center'>
      <Layout width={['100%', '100%', 1136]}>
        <Layout flexBasis={24} />
        <Column fill>
          <Row id='search'>
            <Condition match={search} smooth>
              <Input
                size='giant'
                variant='ghost'
                value={searchValue}
                onChange={searchValueVar}
                placeholder={formatMessage({ id: 'filters.search', defaultMessage: 'Search' })}
                textAlign='center'
              />
            </Condition>
          </Row>
          <Layout flexBasis={56} />
          <Layout width='100%' flexDirection={['column', 'column', 'row']}>
            <Switch active={tags}>
              {options.map(({ value, mutuallyExclusive }) => (
                <>
                  <Option
                    mutuallyExclusive={mutuallyExclusive}
                    value={value}
                    onSelect={setTags}
                    onUpdate={(active, push) => {
                      if (mutuallyExclusive && active.length === options.length - 1) push()
                    }}
                  />
                  <Layout flexBasis={8} />
                </>
              ))}
            </Switch>
            <Layout flexGrow={1} />
            <Button variant='quaternary' active={filters} onClick={() => setFilters(!filters)}>
              <FilterIcon />
              <FormattedMessage id='filters.filter' defaultMessage='Filter' />
            </Button>
          </Layout>
          <Layout flexBasis={40} />
          <Row>
            <Condition match={filters} smooth>
              <Layout width='100%' flexDirection={['column', 'column', 'row']}>
                <Row>
                  <Input
                    label={formatMessage({ id: 'filters.location', defaultMessage: 'Location' })}
                    placeholder={formatMessage({ id: 'filters.where', defaultMessage: 'Where?' })}
                    value={location}
                    onChange={locationVar}
                  />
                </Row>
                <Layout flexShrink={0} flexBasis={16} />
                <Row alignItems='flex-end'>
                  <Input
                    label={formatMessage({ id: 'filters.followers', defaultMessage: 'Followers' })}
                    placeholder={formatMessage({ id: 'filters.min', defaultMessage: 'Min' })}
                    value={followers.min}
                    type='number'
                    onChange={(value) => followersVar({ ...followers, min: Number(value) })}
                  />
                  <Layout flexBasis={12} />
                  <Layout height={44} alignItems='center'>
                    <Text fontSize='semiRegular' fontWeight='semiBold'>
                      -
                    </Text>
                  </Layout>
                  <Layout flexBasis={12} />
                  <Input
                    placeholder={formatMessage({ id: 'filters.max', defaultMessage: 'Max' })}
                    type='number'
                    value={followers.max}
                    onChange={(value) => followersVar({ ...followers, max: Number(value) })}
                  />
                </Row>
                <Layout flexShrink={0} flexBasis={16} />
                <Row>
                  <Select
                    items={[
                      formatMessage({ id: 'filters.any', defaultMessage: 'Any' }),
                      formatMessage({ id: 'filters.professional', defaultMessage: 'Professional' }),
                      formatMessage({ id: 'filters.up_and_coming', defaultMessage: 'Up & Coming' }),
                    ]}
                    onChange={expertiseVar}
                    label={formatMessage({ id: 'filters.expertise', defaultMessage: 'Expertise' })}
                  />
                </Row>
                <Layout flexShrink={0} flexBasis={16} />
                <Row>
                  <Select
                    items={[
                      formatMessage({ id: 'filters.any', defaultMessage: 'Any' }),
                      formatMessage({ id: 'filters.professional', defaultMessage: 'Professional' }),
                      formatMessage({ id: 'filters.up_and_coming', defaultMessage: 'Up & Coming' }),
                    ]}
                    onChange={studioVar}
                    label={formatMessage({ id: 'filters.studio', defaultMessage: 'Studio' })}
                  />
                </Row>
              </Layout>
            </Condition>
          </Row>
          <Layout flexBasis={24} />
          <Row>
            <Condition match={filters} smooth>
              <Layout width='100%' flexDirection={['column', 'column', 'row']}>
                <Row>
                  <Select
                    items={[
                      formatMessage({ id: 'filters.any', defaultMessage: 'Any' }),
                      formatMessage({ id: 'filters.professional', defaultMessage: 'Professional' }),
                      formatMessage({ id: 'filters.up_and_coming', defaultMessage: 'Up & Coming' }),
                    ]}
                    onChange={postproductionVar}
                    label={formatMessage({
                      id: 'filters.postproduction',
                      defaultMessage: 'Postproduction',
                    })}
                  />
                </Row>
                <Layout flexShrink={0} flexBasis={16} />
                <Row>
                  <Select
                    items={[
                      formatMessage({ id: 'filters.any', defaultMessage: 'Any' }),
                      formatMessage({ id: 'filters.professional', defaultMessage: 'Professional' }),
                      formatMessage({ id: 'filters.up_and_coming', defaultMessage: 'Up & Coming' }),
                    ]}
                    onChange={videographyVar}
                    label={formatMessage({
                      id: 'filters.videography',
                      defaultMessage: 'Videography',
                    })}
                  />
                </Row>
                <Layout flexShrink={0} flexBasis={16} />
                <Row />
                <Layout flexShrink={0} flexBasis={16} />
                <Row justifyContent='flex-end' alignItems='flex-end'>
                  <Button>
                    <FormattedMessage id='filters.apply' defaultMessage='Apply' />
                  </Button>
                </Row>
              </Layout>
            </Condition>
          </Row>
        </Column>
        <Layout flexBasis={24} />
      </Layout>
    </Row>
  )
}
export { Filters }
