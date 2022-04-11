import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Row }              from '@ui/layout'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Divider }          from '@ui/divider'
import { Link }             from '@ui/link'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

const Nft: FC = () => (
  <Row justifyContent='center'>
    <Layout width={['100%', '100%', 1136]}>
      <Layout flexBasis={[20, 20, 0]} />
      <Column fill>
        <Box backgroundColor='background.beige' borderRadius='normal'>
          <Column fill>
            <Layout flexBasis={40} />
            <Row justifyContent='center'>
              <Text fontSize='semiGiant' color='text.accent' fontWeight='bold' lineHeight='extra' textAlign='center'>
                <FormattedMessage id="creator_page.nft_title" defaultMessage="Display your NFTs on your profile"/>
              </Text>
            </Row>
            <Layout flexBasis={14} />
            <Row justifyContent='center'>
              <Text fontSize='default' color='text.accent' fontWeight='normal' lineHeight='extra' textAlign='center'>
                <FormattedMessage id="creator_page.nft_description" defaultMessage="Connect your wallet with your VSBLE.match account, then add your NFTs to your profile."/>
              </Text>
            </Row>
            <Layout flexBasis={32} />
            <Row justifyContent='center'>
              <Box border='thinBlack' borderRadius='full' padding='8px 16px'>
                <Text fontSize='increased' color='text.accent' fontWeight='bold' lineHeight='extra'>1</Text>
              </Box>
            </Row>
            <Layout flexBasis={16} />
            <Row justifyContent='center'>
              <Link href='/'>
                <Text fontSize='default' color='text.purple' fontWeight='semiBold' lineHeight='extra' textAlign='center'>
                  <FormattedMessage id='creator_page.nft_first_step_link' defaultMessage='Add your wallet'/>
                </Text>
                <Divider weight={1} backgroundColor='background.purple'/>
              </Link>
              <Space/>
              <Text fontSize='default' color='text.accent' fontWeight='normal' lineHeight='extra' textAlign='center'>
                <FormattedMessage id="creator_page.nft_first_step" defaultMessage="to your VSBLE.match Account"/>
              </Text>
            </Row>
            <Layout flexBasis={32} />
            <Row justifyContent='center'>
              <Box border='thinBlack' borderRadius='full' padding='8px 14px'>
                <Text fontSize='increased' color='text.accent' fontWeight='bold' lineHeight='extra'>2</Text>
              </Box>
            </Row>
            <Layout flexBasis={16} />
            <Row justifyContent='center'>
              <Text fontSize='default' color='text.accent' fontWeight='normal' lineHeight='extra' textAlign='center'>
                <FormattedMessage id="creator_page.nft_second_step" defaultMessage="Display your NFTs on your profile"/>
              </Text>
            </Row>
            <Layout flexBasis={40} />
          </Column>
        </Box>
        <Layout flexBasis={24} />
      </Column>
      <Layout flexBasis={[20, 20, 0]} />
    </Layout>
  </Row>
)

export { Nft }
