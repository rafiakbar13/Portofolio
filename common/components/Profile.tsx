import React from 'react'
import { Avatar } from "@nextui-org/avatar";
import { StaticImageData } from 'next/image';


type AvatarProps = {
    image: string
    className?: string
}

const Profile = ({ image, className }: AvatarProps) => {
    return (
        <Avatar src={image} className={className} isBordered color='secondary' />
    )
}

export default Profile