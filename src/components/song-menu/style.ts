import styled from 'styled-components'
export const SongMenuWrapper = styled.div`
  width: 140px;
  margin: 15px 0;
  cursor: pointer;

  .top {
    position: relative;

    > img {
      width: 140;
      height: 140;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: #ccc;
        background-position: 0 -537px;
        height: 27px;

        .count {
          display: flex;
          align-items: center;
          color: #cacaca;
          font-size: 12px;
          .headset {
            margin-right: 5px;
            display: inline-block;
            width: 14px;
            height: 11px;
            background-position: 0 -24px;
          }
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }
    }
  }

  .bottom {
    margin-top: 5px;
    font-size: 14px;
    color: #000;
  }
`
