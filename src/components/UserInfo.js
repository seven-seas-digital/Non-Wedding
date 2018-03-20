import React from 'react';
const profilePicSrc = "https://scontent-dfw5-1.cdninstagram.com/vp/73174e374a538dd2a9f3c8fca82262a0/5B49B012/t51.2885-15/e35/17077370_1851480581795022_3591556488771928064_n.jpg"

const UserInfo = (props) => {
  return (
    <div className="profile-wrapper">
      <img src={profilePicSrc} alt="" className="image--cover" />
      <h3>Valentina &amp; Rocco</h3>
    </div>

  );
}

export default UserInfo;