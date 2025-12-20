import styled from 'styled-components'
export const AlbumItemWrapp = styled.div`
  width: 118px;
  margin-left: 11px;
  .cover {
    position: relative;

    .cover_bg {
      position: absolute;
      inset: 0;
      display: inline-block;
      width: 118px;
      height: 100px;
      background-position: 0 -570px;
    }

    .bottom_bg {
      position: absolute;
      width: 110px;
      height: 10px;

      /* bottom: 0; */

      background-position: -260px 0;
    }
  }
  .info {
    margin-top: 10px;
    font-size: 13px;
    width: 110px;

    .name {
      ${(props) => (props.theme as any).mixin.textEllipsis};
    }

    .artist {
      color: #666;
      ${(props) => (props.theme as any).mixin.textEllipsis};
    }
  }
`
