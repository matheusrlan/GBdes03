import React from "react";
import './profile.css'

const Profile = () => {
    return(
        <section className="profile">
            <div className="profile-background">
                <img src="https://avatars.githubusercontent.com/u/75798474?v=4" alt="perfil" className="photo"/>
                <h1 className="h1">Matheus Rocha Lã</h1>
                <h2 className="h2">Front-end Developer</h2>
            </div>
        </section>
    )
}

export default Profile