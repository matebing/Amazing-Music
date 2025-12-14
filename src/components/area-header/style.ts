import styled from 'styled-components'
export const AreaHeaderWrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid ${(props) => (props.theme as any).color.primary};
  padding: 0 10px 4px 34px;
  background-position: -225px -156px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      margin-right: 20px;
      cursor: pointer;
    }

    .keywords {
      display: flex;
      align-items: center;

      .item {
        position: relative;
        top: 2px;

        .text {
          padding: 0 15px;
          font-size: 13px;

          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }

        .divider {
          margin: 0 15px;
          color: #ccc;
        }
        &:last-child {
          .divider {
            display: none;
          }
        }
      }
    }
  }

  .right {
    display: flex;
    text-align: center;
    cursor: pointer;

    .more {
      color: #333;
      &:hover {
        text-decoration: underline;
      }
    }

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`
