import React            from 'react'
import { FC }           from 'react'
import { useRef }       from 'react'

import { Button }       from '@ui/button'
import { Box }          from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Row }          from '@ui/layout'
import { Radio }        from '@ui/radio'
import { Text }         from '@ui/text'

import { Prompt }       from '../prompt'
import { LicenseProps } from './license.interfaces'

const License: FC<LicenseProps> = ({ license, price }) => {
  const radioRef = useRef(null)

  const toggleThis = () => {
    if (radioRef && radioRef.current) {
      ;(radioRef.current as any).click()
    }
  }

  return (
    <>
      <Row alignItems='center'>
        <Box width={24} height={24}>
          <Radio value={1} name='license' defaultChecked ref={radioRef} />
        </Box>
        <Layout flexBasis={8} />
        <Layout>
          <Button size='ghost' variant='ghost' onClick={toggleThis}>
            <Text
              fontSize='semiRegular'
              color='text.accent'
              fontWeight='normal'
              lineHeight='default'
            >
              {license}
            </Text>
          </Button>
        </Layout>
        <Layout flexBasis={5} />
        <Layout>
          <Prompt
            license='Online License'
            info='Unlimited, worldwide commercial usage for online media.'
            vatInfo='Value-added tax will be calculated at checkout based on your country and account type.'
          />
        </Layout>
        <Layout flexGrow={1} />
        <Layout>
          <Text
            fontSize='semiRegular'
            color='text.accent'
            fontWeight='semiBold'
            lineHeight='default'
          >
            {price}
          </Text>
        </Layout>
      </Row>
      <Layout flexShrink={0} flexBasis={16} />
    </>
  )
}
export { License }
