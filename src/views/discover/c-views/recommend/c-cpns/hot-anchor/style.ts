import styled from "styled-components";

export const HotAnchorWrapper = styled.div`
padding: 20px;

.anchor-list {
    margin-top: 20px;

    .item {
        display: flex;
        margin-bottom: 10px;

        img {
            width: 40px;
            height: 40px;
            margin-right: 10px;
        }

        .info {
            width: 160px;

            .name {
                color: #000;
                line-height: 21px;
            }

            .position {
                line-height: 21px;
                color: #666;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
            }
        }
    }
}
`