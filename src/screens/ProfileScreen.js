import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import Package from '../Package'
import './ProfileScreen.css'
function ProfileScreen() {
    const user = useSelector(selectUser)
    return (
        <div className = 'profileScreen'>
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
                
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <span className = 'profileScreen__renewalDate'>Renewal date: 04/03/2021</span>
                        <Package name={'Standard'} quallity = {'1080p'} />
                        <Package name={'Basic'} quallity = {'480p'} />
                        <Package name={'Premium'} quallity = {'4K+HDR'} />
                        <button className = 'profileScreen__signOut' onClick = {
                            () => auth.signOut()
                        }>Sign Out</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
