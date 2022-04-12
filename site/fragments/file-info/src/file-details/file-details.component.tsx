import React                  from 'react'
import { FC }                 from 'react'
import { FormattedMessage }   from 'react-intl'

import { Box }                from '@ui/layout'
import { Row }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Column }             from '@ui/layout'
import { Text }               from '@ui/text'
import { Button }             from '@ui/button'
import { ImageBlock }         from '@ui/image'
import { DownloadIcon }       from '@ui/icons'
import { ArrowLeftLongIcon }  from '@ui/icons'
import { ArrowRightLongIcon } from '@ui/icons'
import { useMockedFileInfo }  from '../data'

const FileDetails: FC = () => {
  const { images } = useMockedFileInfo()

  return (
    <Box width='100%' justifyContent='center'>
      <Layout flexShrink={0} flexBasis={30}/>
      <Layout width={['100%', '100%', 1440]}>
        <Row flexWrap={['wrap', 'wrap', 'nowrap']}>
          <Column width={['100%', '100%', 320]}>
            <Row justifyContent='center'>
              <Box width={['100%', '100%', 320]} backgroundColor='background.beige' borderRadius='normal'
                   padding='8px 16px'>
                <Column>
                  <Row>
                    <Text fontSize='semiRegular' color='text.accent' fontWeight='normal' lineHeight='extra'>
                      <FormattedMessage id='file_page.camera_info' defaultMessage='Camera: Canon EOS 5D Mark III'/>
                    </Text>
                  </Row>
                  <Layout flexShrink={0} flexBasis={4}/>
                  <Row>
                    <Text fontSize='semiRegular' color='text.accent' fontWeight='normal' lineHeight='extra'>
                      <FormattedMessage id='file_page.aperture_info' defaultMessage='Aperture: f/10.0'/>
                    </Text>
                  </Row>
                  <Layout flexShrink={0} flexBasis={4}/>
                  <Row>
                    <Text fontSize='semiRegular' color='text.accent' fontWeight='normal' lineHeight='extra'>
                      <FormattedMessage id='file_page.iso_info' defaultMessage='ISO: 250'/>
                    </Text>
                  </Row>
                  <Layout flexBasis={4}/>
                  <Row>
                    <Text fontSize='semiRegular' color='text.accent' fontWeight='normal' lineHeight='extra'>
                      <FormattedMessage id='file_page.orientation_info' defaultMessage='Orientation: Landscape'/>
                    </Text>
                  </Row>
                </Column>
              </Box>
            </Row>
            <Layout flexShrink={0} flexBasis={44}/>
            <Column>
              <Box width={['100%', '100%', 320]} height={208}>
                <Column fill>
                  <Button>
                    <FormattedMessage id='file_page.ask_for_image_price' defaultMessage='Ask for Image Price'/>
                  </Button>
                  <Layout flexShrink={0} flexBasis={8}/>
                  <Button>
                    <FormattedMessage id='file_page.send_your_job_request' defaultMessage='Send your Job Request'/>
                  </Button>
                  <Layout flexShrink={0} flexBasis={16}/>
                  <Button variant='secondary'>
                    <FormattedMessage id='file_page.show_all_this_author' defaultMessage='Show All by This Author'/>
                  </Button>
                  <Layout flexShrink={0} flexBasis={8}/>
                  <Button variant='secondary'>
                    <DownloadIcon/>
                    <FormattedMessage id='file_page.download_comp' defaultMessage='Download Comp'/>
                  </Button>
                </Column>
              </Box>
            </Column>
            <Layout flexShrink={0} flexBasis={[24, 24, 220]}/>
            <Column>
              <Box maxWidth={320}>
                <Row>
                  <Text fontSize='semiRegular' color='text.lightGray' fontWeight='normal' lineHeight='default'>
                    <FormattedMessage
                      id='file_page.file_dimensions'
                      defaultMessage='File dimensions: Original file upon request 1800 px × 1200 px / 15.24 × 10.16 cm@300dpi ID: #18328 Release(s) on file: Possible'
                    />
                  </Text>
                </Row>
              </Box>
            </Column>
          </Column>
          <Layout flexShrink={0} flexBasis={[0, 48, 48]}/>
          <Column fill>
            <Box width='100%'>
              <Row justifyContent='flex-start' alignItems='center'>
                <Box
                  width={40}
                  height={40}
                  backgroundColor='background.beige'
                  justifyContent='center'
                  alignItems='center'
                  borderRadius='full'
                  // @ts-ignore
                  cursor='pointer'
                >
                  <ArrowLeftLongIcon/>
                </Box>
              </Row>
              <Layout flexShrink={0} flexBasis={8}/>
              <Row justifyContent='center'>
                <Box width={['100%', '100%', 928]} height={[200, 200, 648]} backgroundColor='background.beige'
                     justifyContent='center'>
                  <Column fill>
                    <Box
                      width='100%'
                      // @ts-ignore
                      cursor='pointer'
                      position='relative'
                      backgroundColor='background.gray'
                    >
                      {images.map(({ image }) => (
                        <ImageBlock src={image} width='100%' height='100%'/>
                      ))}
                    </Box>
                    <Layout flexShrink={0} flexBasis={22}/>
                  </Column>
                </Box>
              </Row>
              <Row justifyContent='flex-end' alignItems='center'>
                <Box
                  width={40}
                  height={40}
                  backgroundColor='background.beige'
                  justifyContent='center'
                  alignItems='center'
                  borderRadius='full'
                  // @ts-ignore
                  cursor='pointer'
                >
                  <ArrowRightLongIcon/>
                </Box>
              </Row>
            </Box>
          </Column>
        </Row>
      </Layout>
      <Layout flexShrink={0} flexBasis={30}/>
    </Box>
  )
}

export { FileDetails }
