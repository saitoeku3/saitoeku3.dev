import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../BackgroundImage'

const Wrapper = styled.div`
  width: 310px;
`

const Img = styled(BackgroundImage)`
  width: 100%;
  height: 190px;
  background-color: #fff;
  margin-bottom: 12px;
`

const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-weight: bold;
  margin: auto auto 12px;
`

const Description = styled.p`
  width: 100%;
  line-height: 30px;
  margin: 0;
`

type Props = {
  name: string
  imageUrl: string
  description: string
}

const WorkItem: React.FC<Props> = ({ name, imageUrl, description }) => (
  <Wrapper>
    <Name>{name}</Name>
    <Img src={imageUrl} alt={name} />
    <Description>{description}</Description>
  </Wrapper>
)

export default WorkItem
