import styled from 'styled-components'
export const TopRankingItemWrapp = styled.div`
  //   flex: 1;
  width: 230px;
  &:last-child {
    width: 228px;
  }

  .header {
    display: flex;

    margin: 20px 0 0 20px;

    .image {
      position: relative;
      .cover {
        position: absolute;
        inset: 0;
        background-position: -145px -57px;
      }
    }

    .info {
      margin: 10px 0 0 10px;
      .name {
        font-weight: 700;
        font-size: 14px;
        color: #333;
      }
    }

    .btns {
      display: flex;
      align-items: center;

      margin-top: 10px;

      .icon {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin-right: 12px;
        cursor: pointer;
      }

      .play {
        background-position: -267px -205px;

        &:hover {
          background-position: -267px -235px;
        }
      }

      .favor {
        background-position: -300px -205px;
        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }

  .list {
    margin-top: 20px;
    padding: 0 10px 0 20px;

    .item {
      display: flex;
      align-items: center;
      height: 32px;

      cursor: pointer;

      .index {
        height: 20px;
        width: 30px;
        line-height: 20px;
        text-align: center;
        font-size: 16px;
      }

      //结构伪类：前三个，index增加颜色
      &:nth-child(-n + 3) {
        .index {
          color: ${(props) => (props.theme as any).color.primary};
        }
      }

      .name {
        flex: 1;
        font-size: 12px;
        ${(props) => (props.theme as any).mixin.textEllipsis};
      }

      .operate {
        display: none;
        align-items: center;
        justify-content: space-evenly;
        width: 82px;

        .icon {
          display: inline-block;
          width: 20px;
          height: 20px;
        }

        .play {
          background-position: -267px -268px;
        }

        .add {
          position: relative;
          top: 2px;
          left: 2px;
          background-position: 0 -700px;
        }

        .favor {
          background-position: -297px -268px;
        }
      }

      &:hover {
        .name {
          text-decoration: underline;
        }
        .operate {
          display: flex;
        }
      }
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 32px;
    padding-right: 30px;
    font-size: 12px;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`
