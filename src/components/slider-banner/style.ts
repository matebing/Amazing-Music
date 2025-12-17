import styled from 'styled-components'
export const SliderBannerWrapper = styled.div`
  margin-top: 20px;

  > .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    padding: 0 5px;

    .arrow {
      position: relative;
      top: -15px;
      flex-shrink: 0;

      height: 17px;
      width: 17px;
      cursor: pointer;
    }

    .arrow_left {
      background-position: -260px -75px;

      &:hover {
        background-position: -280px -75px;
      }
    }
    .arrow_right {
      background-position: -300px -75px;

      &:hover {
        background-position: -320px -75px;
      }
    }

    .banner {
      flex: 1;
      overflow: hidden;

      .album-list {
        display: flex;
        justify-content: space-between;
        padding: 0 5px;
      }
    }
  }
`
