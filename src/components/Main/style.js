import styled from "styled-components"


export const MainBg = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    display: flex;
    max-width: 80%;
    max-height: 300px;
    background: white;
    box-shadow: 0px 1px 10px hsl(212, 23%, 69%);
    border-radius: 1rem;
    @media (max-width: 320px){
        width: 18rem;
    }
    @media (max-width: 1024px){
        max-width: 85%;
    }
    @media (max-width: 768px){
        max-width: 95%;
    }
    @media (max-width: 425px){
        flex-wrap: wrap;
        max-width: 85%;
        max-height: 750px;
        margin-top: 10rem;
    }
    .img-icon{
        img{
            max-width: 100%;
            max-height: 100%;
            border-bottom-left-radius: 1rem;
            @media (max-width: 425px){
                max-width: 100%;
                border-radius: 0px;
                border-top-left-radius: 1rem;
                border-top-right-radius: 1rem;
            }
        }
    }
    .information-profile{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        .container-profile{
            max-width: 700px;
            max-height: 350px;
            @media (max-width: 320px){
                width: 13rem;
            }
            @media (max-width: 768px){
                max-width: 350px;
            }
            @media (max-width: 425px){
                max-width: 300px;
                max-height: 350px;
                margin-bottom: 1rem;
            }
            h2{
                color: hsl(217, 19%, 35%);
                max-width: 350px;
                @media (max-width: 425px){
                    margin-top: 2rem;
            }
                @media (max-width: 320px){
                    font-size: 14px;
                }
            }
            #text-description{
                color:  hsl(214, 17%, 51%);
                max-width: 450px;
                margin-top: 1rem;
                @media (max-width: 320px){
                    font-size: 10px;
                    margin-top: 0.7rem;
                }
            }
        }
    }
    .profile-name-logo{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1.5rem;
        @media (max-width: 425px){
            margin-top: 1rem;
        }
        .name-avatar{
            display: flex;
            align-items: center;
            img{
                max-width: 50px;
                max-height:50px ;
                border-radius: 50%;
                @media (max-width: 320px){
                    max-width: 35px;
                    max-height: 35px;
                }
            }
            .name-flex{
                margin-left: 1rem;
                #name{
                    font-weight: 700;
                    color: hsl(217, 19%, 35%);
                }
                #date{
                    color: hsl(214, 17%, 51%);
                    opacity: 0.8;
                }
            }
        }
        .link-direct{
            transition: all 3s ease;
            svg{
                cursor: pointer;
                &:hover{
                     transform: scale(1.5);
                }
            }
        }
    }
`