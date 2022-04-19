import React                 from 'react'
import { FC }                from 'react'
import { FormattedMessage }  from 'react-intl'
import { useIntl }           from 'react-intl'

import { Button }            from '@ui/button'
import { Condition }         from '@ui/condition'
import { DownloadIcon }      from '@ui/icons'
import { ImageBlock }        from '@ui/image'
import { Box }               from '@ui/layout'
import { Row }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Column }            from '@ui/layout'
import { Text }              from '@ui/text'
import { Repeater }          from '@ui/utils'
import { useHover }          from '@ui/utils'

import { PricesInfo }        from '../prices-info'
import { Slider }            from '../slider'
import { Tags }              from '../tags'
import { useMockedFileInfo } from '../data'

const FileDetails: FC = () => {
  const [hover, setHover] = useHover()

  const { formatMessage } = useIntl()
  const { images } = useMockedFileInfo()

  const paidPhoto = true

  return (
    <Box width='100%' justifyContent='center'>
      <Layout flexShrink={0} flexBasis={24} />
      <Layout width={['100%', '100%', 1440]}>
        <Row flexWrap={['wrap', 'wrap', 'nowrap']}>
          <Column width={['100%', '100%', 320]} height='auto'>
            <Row justifyContent='flex-start'>
              <Box
                width={['100%', '100%', 320]}
                backgroundColor='background.beige'
                borderRadius='normal'
                padding='8px 16px'
              >
                <Condition match={!paidPhoto}>
                  <Column>
                    <Repeater
                      items={formatMessage({
                        id: 'file_page.camera_info',
                        defaultMessage:
                          'Camera: Canon EOS 5D Mark III \n Aperture: f/10.0 \n ISO: 250 \n Orientation: Landscape',
                      }).split('\n')}
                      onIteration={(item) => (
                        <Row>
                          <Text
                            fontSize='semiRegular'
                            color='text.accent'
                            fontWeight='normal'
                            lineHeight='default'
                          >
                            {item}
                          </Text>
                        </Row>
                      )}
                    />
                  </Column>
                </Condition>
                <Condition match={paidPhoto}>
                  <Column>
                    <Row>
                      <Text
                        fontSize='semiRegular'
                        color='text.accent'
                        fontWeight='normal'
                        lineHeight='default'
                      >
                        <FormattedMessage
                          id='file_page.photo_orientation'
                          defaultMessage='Orientation: Landscape'
                        />
                      </Text>
                    </Row>
                  </Column>
                </Condition>
              </Box>
            </Row>
            <Condition match={!paidPhoto}>
              <Layout flexShrink={0} flexBasis={44} />
            </Condition>
            <Condition match={paidPhoto}>
              <Layout flexShrink={0} flexBasis={24} />
            </Condition>
            <Condition match={paidPhoto}>
              <PricesInfo />
            </Condition>
            <Layout>
              <Box width={['100%', '100%', 320]}>
                <Column fill>
                  <Button>
                    <FormattedMessage
                      id='file_page.ask_for_image_price'
                      defaultMessage='Ask for Image Price'
                    />
                  </Button>
                  <Layout flexShrink={0} flexBasis={8} />
                  <Button>
                    <FormattedMessage
                      id='file_page.send_your_job_request'
                      defaultMessage='Send your Job Request'
                    />
                  </Button>
                  <Layout flexShrink={0} flexBasis={16} />
                  <Button variant='secondary'>
                    <FormattedMessage
                      id='file_page.show_all_this_author'
                      defaultMessage='Show All by This Author'
                    />
                  </Button>
                  <Layout flexShrink={0} flexBasis={8} />
                  <Column height='auto' {...setHover}>
                    <Button variant='secondary'>
                      <DownloadIcon color={hover ? 'purple' : 'black'}/>
                      <FormattedMessage id='file_page.download_comp' defaultMessage='Download Comp' />
                    </Button>
                  </Column>
                </Column>
              </Box>
            </Layout>
            <Condition match={!paidPhoto}>
              <Layout flexShrink={0} flexBasis={[24, 24, 220]} />
            </Condition>
            <Condition match={paidPhoto}>
              <Layout flexShrink={0} flexBasis={[24, 24, 40]} />
            </Condition>
            <Layout>
              <Box width={320}>
                <Column>
                  <Repeater
                    items={formatMessage({
                      id: 'file_page.file_dimensions',
                      defaultMessage:
                        'File dimensions: Original file upon request \n 1800 px × 1200 px / 15.24 × 10.16 cm@300dpi \n ID: #18328 \n Release(s) on file: Possible',
                    }).split('\n')}
                    onIteration={(item) => (
                      <Row>
                        <Text
                          fontSize='semiRegular'
                          color='text.lightGray'
                          fontWeight='normal'
                          lineHeight='default'
                        >
                          {item}
                        </Text>
                      </Row>
                    )}
                  />
                </Column>
              </Box>
            </Layout>
            <Layout flexShrink={0} flexBasis={[44, 44, 0]} />
          </Column>
          <Layout flexShrink={0} flexBasis={[0, 0, 48]} />
          <Row justifyContent='center'>
            <Column>
              <Slider>
                {images.map(({ image }) => (
                  <ImageBlock src={image} width='100%' height='100%' />
                ))}
              </Slider>
              <Layout flexShrink={0} flexBasis={22} />
              <Layout>
                <Tags />
              </Layout>
            </Column>
          </Row>
        </Row>
      </Layout>
      <Layout flexShrink={0} flexBasis={24} />
    </Box>
  )
}

export { FileDetails }
