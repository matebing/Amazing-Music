import styled from 'styled-components'
export const SettleSingerWrapp = styled.div`
  padding: 20px;
  .settle-singer-herder {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;

    .title {
      font-size: 12px;
      color: #666666;
      font-weight: 700;
    }

    .more {
      font-size: 13px;
      color: #333;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .artists {
    margin: 10px 20px;

    .item {
      display: flex;
      align-items: center;
      margin-bottom: 12px;

      background-color: #fafafa;
      border: 1px solid #e9e9e9;
      cursor: pointer;

      img {
        width: 62px;
        height: 62px;
        object-fit: cover;
      }

      .info {
        flex: 1;
        padding: 0 10px;

        .name {
          padding: 9px 0;
          font-weight: 700;

          ${(props) => (props.theme as any).mixin.textEllipsis};
        }

        .alies {
          color: ${(props) => (props.theme as any).color.secondary};
          ${(props) => (props.theme as any).mixin.textEllipsis};
        }
      }
    }
  }
  .apply-for {
    margin-top: 12px;
    a {
      color: #333;
      font-weight: 700;
      text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      text-decoration: name;
    }
  }
`
