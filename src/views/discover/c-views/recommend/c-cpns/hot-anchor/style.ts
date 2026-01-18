import styled from 'styled-components'
export const HotAnchorWrapp = styled.div`
  padding: 20px;
  .hot-anchor-herder {
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
  }
  .anchors {
    margin: 20px;

    .item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      cursor: pointer;

      &:hover {
        .info .name {
          text-decoration: underline;
        }
      }

      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
      }

      .info {
        flex: 1 0 auto;
        width: 0;
        padding-left: 8px;

        .name {
          padding: 0 0 7px 0;
          color: #000;
          ${(props) => (props.theme as any).mixin.textEllipsis};
        }

        .position {
          font-size: 12px;
          color: ${(props) => (props.theme as any).color.secondary};
          ${(props) => (props.theme as any).mixin.textEllipsis};
        }
      }
    }
  }
`
