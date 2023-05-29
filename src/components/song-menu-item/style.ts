import styled from "styled-components";

export const SongMenuItemWrapper = styled.div`
width: 140px;
padding-left: 42px;
.top {
    position: relative;
    & > img {
        width: 140px;
        height: 140px;
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
            background-position: 0 -537px;
            color: #ccc;
            height: 27px;
        }
        .count {
            display: inline-block;
            margin: 9px 0px 9px 10px;
        }
        .handset {
            align-items: center;
            display: inline-block;
            width: 14px;
            height: 11px;
            background-position: 0 -24px;

        }

        .play {
            float:right;
            display: inline-block;
            width: 16px;
            height: 17px;
            background-position: 0 0;
        }
    }
}

.bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
}
`