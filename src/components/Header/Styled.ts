import styled from 'styled-components'
import { Layout } from 'antd'

const { Header } = Layout

export const StyledHeader = styled(Header)`
  padding: 0 20px;
  height: 50px;
  line-height: 50px;

  .anticon {
    color: #fff;
  }

  h1 {
    color: #fff;
    opacity: 0.85;
    font-weight: 400;
    font-size: 15px;
    position: absolute;
    top: 0px;
    left: 45px;
  }
`
