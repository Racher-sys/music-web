import styled from "styled-components";

export const AreaHeaderWrapper = styled.div`
height: 33px;
padding: 0 10px 0px 34px;
border-bottom: 2px solid #C10D0C;
background-position: -225px -156px;

display: flex;
justify-content:space-between;
align-items: center;
.left {
    display: flex;
    align-items: center;
    .title {
        font-size: 20px;
        font-weight: normal;
        line-height: 28px;
        font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
        margin-right: 20px;
    }
    .keywords {
        display: flex;
        align-items: center;
        .item {
            position: relative;

            .link {
                color: #666;
                &:hover {
                  cursor: pointer;
                  text-decoration: underline;
                }
              }
            
            .divider {
                margin: 0 15px;
                color: #ccc;
            }

            &:last-child {
                .divider {
                    display: none;
                }
            }
        }
    }
}
.right {
    display: flex;
    align-items: center;
    .more {
        color: #666;
        &:hover {
            text-decoration: underline;
            color: #333;
        }
    }
    .icon {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        background-position: 0 -240px;
      }
}
`