import React from 'react'
import { Avatar } from "@nextui-org/avatar";


type AvatarProps = {
    image: string
    className?: string
    alt: string
}

const Profile = ({ image, alt, className }: AvatarProps) => {
    return (
        <Avatar src={image} className={className} isBordered color='secondary' alt={alt} />
    )
}

export default Profile