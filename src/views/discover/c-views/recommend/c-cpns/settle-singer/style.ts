import styled from "styled-components";

export const SettleSingerWrapper = styled.div`
padding:20px;

.artists {
    margin-top: 6px;
    .item {
        display: flex;
        margin-top: 14px;
        width: 210px;
        height: 62px;
        background: #fafafa;

        :hover {
            background: #f4f4f4;
        }
        img {
            float: left;
            height: 62px;
            width: 62px;
        }
        .info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justity-content: space-around;
            width: 133px;
            height: 60px;
            padding-left: 14px;
            padding-top: 8px;
            border: 1px solid #e9e9e9;
            border-left: none;


            .name {
                font-size: 14px;
                font-weight: 700;
            }

            .alias {
                font-size: 12px;
                margin-top: 8px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
                color: #666;
                width: 90%;
            }
        }

    }
}

.apply-to {
    display: block;
    border: 1px solid #c3c3c3;
    margin: 20px 14px;
    border-radius: 4px;
    color: #333;
    background-position: right -100px;
    width: 170px;
    font-weight: bold;
    height: 31px;
    text-align: center;
    line-height: 31px;
    text-decoration: none;
    font-weight: 700;
}


`