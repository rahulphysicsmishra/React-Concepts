import React from "react"

const Avtar = ({imageURL, altText}) => {
    return <img src={imageURL} alt={altText} style={{borderRadius: '50%', width: '100px'}} />;
}

const ProfileInfo = ({name, bio}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{bio}</p>
        </div>
    )
}

const ContactInfo = ({email, phone}) => {
    return (
        <div>
            <h2>Email : {email}</h2>
            <p>Phone: {phone}</p>
        </div>
    )
}

const ProfileCard = ({user}) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '300px' }}>
            <Avtar imageURL={user.imageURL} altText={user.name} />
            <ProfileInfo name={user.name} bio={user.bio} />
            <ContactInfo email={user.email} phone={user.phone} />
        </div>
    )
}

export default ProfileCard