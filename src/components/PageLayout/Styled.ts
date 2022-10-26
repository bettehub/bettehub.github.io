import styled from 'styled-components'
import { Layout, Breadcrumb } from 'antd'

const { Header, Content } = Layout

export const StyledPageLayout = styled(Layout)`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`

export const StyledHeader = styled(Header)`
  padding: 0 20px;
  h1 {
    color: #fff;
    opacity: 0.85;
    font-weight: 400;
    font-size: 15px;
    padding-left: 20px;
  }
`

export const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 10px 20px;
`

export const StyledContent = styled(Content)`
  padding: 0 20px;
`
