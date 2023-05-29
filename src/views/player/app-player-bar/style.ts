import styled from "styled-components";

export const PlayBarWrapper  = styled.div`
position: fixed;
z-index: 99;
left: 0;
right: 0;
bottom: 0;
height: 52px;
background-position: 0 0;
background-repeat: repeat;

.content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 52px;
}
`

interface  IProps{
  isPlaying: boolean
}

export const PlayControlWrapper = styled.div`
width: 137px;
padding-top: 6px;
align-items: center;
display: flex;

.btn {
    cursor: pointer;
    margin-right: 8px;
}

.pre {
    background-position: 0 -130px;
    width: 28px;
    height: 28px;
}

.play {
    background-position: 0 ${(props: IProps) => props.isPlaying? "-165px": "-204px"};
    width: 36px;
    height: 36px;
}

.next {
    background-position: -80px -130px;
    width: 28px;
    height: 28px;
}
`

export const PlayInfoWrapper = styled.div`
display: flex;
  width: 642px;
  align-items: center;
  margin-top: 5px;

  img{
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
        }
      }

      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
  
`


export const PlayOperatorWrapper = styled.div`
display: flex;
position: relative;
top: 5px;

.btn {
    width: 25px;
    height:25px;
}

.favor {
    background-position: -88px -163px;
}

.share {
    background-position: -114px -163px;
}

.right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    
    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: -66px -248px;
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }

`