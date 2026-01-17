import styled from 'styled-components'
export const UserLoginWrapp = styled.div`
  position: relative;
  height: 125px;
  background-position: 0 0;

  .desc {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
    font-size: 12px;
  }

  .btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    padding: 10px;
    color: #fff;
    width: 80px;
    font-size: 13px;
    background-position: 0 -195px;
    text-align: center;
    text-shadow: 0 1px 0 #8a060b;
    cursor: pointer;

    &:hover {
      background-position: -110px -195px;
    }
  }
`
