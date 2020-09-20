import React from "react";

const AvatarBadge = ({photoUrl, name}) => {

    return (
        <article className="avatar-card">
            <header>
                {
                    <img src={photoUrl === undefined ? "https://icon-library.com/images/avatar-folder-icon/avatar-folder-icon-2.jpg" : photoUrl} alt="character"/>
                }
            </header>
            <footer>
                {name}
              </footer>
        </article>
    )

}

export default AvatarBadge;