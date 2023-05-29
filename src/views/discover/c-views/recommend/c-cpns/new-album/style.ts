import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
margin-top: 20px;

> .content {

    height: 184px;
    padding-left: 16px;
    background: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;
    .arrow {
        width: 17px;
        height: 17px;
        top: 71px;
        cursor: pointer;
    }

    .arrow-left {
        background-position: -260px -75px;

        &:hover {
            background-position: -280px -75px;
        }
    }

    .arrow-right {
        background-position: -300px -75px;

        &:hover {
            background-position: -320px -75px;
        }
    }
    .banner {
        overflow: hidden;
        flex: 1;

        .album-list {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

}
`