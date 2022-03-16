import React from "react"
import * as S from "./style"
import ImageBg from "../../assets/drawers.jpg"
import Logo from "../../assets/avatar-michelle.jpg"

const Main = () => {
  return (
    <S.MainBg>
      <S.Container>
        <div className="img-icon">
          <img src={ImageBg} alt="Image ilustration" />
        </div>

        <div className="information-profile">
          <div className="container-profile">
            <h2>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in you home
            </h2>

            <p id="text-description">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete.
            </p>
            <div className="profile-name-logo">
              <div className="name-avatar">
                <img src={Logo} alt="logo-Michelle Appleton" />
                <div className="name-flex">
                  <p id="name">Michelle Appleton</p>
                  <p id="date">28 Jun 2020</p>
                </div>
              </div>
              <div className="link-direct">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                  <path
                    fill="#6E8098"
                    d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </S.Container>
    </S.MainBg>
  )
}
export default Main
