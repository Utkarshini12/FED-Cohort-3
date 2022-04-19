import {FaCalendarAlt, FaFacebook, FaFolderOpen, FaHome, FaInstagram, FaLinkedin, FaTwitter, FaUserFriends} from "react-icons/fa";

export const links = [
    {
        id: 1,
        url: '/',
        text: 'home',
        icon: <FaHome />
    },
    {
        id: 2,
        url: '/team',
        text: 'team',
        icon: <FaUserFriends />
    },
    {
        id: 3,
        url: '/projects',
        text: 'projects',
        icon: <FaFolderOpen />
    },
    {
        id: 4,
        url: '/calander',
        text: 'calander',
        icon: <FaCalendarAlt />
    },
]

export const social = [
    {
        id: 1,
        url: "https://www.twitter.com",
        icon: <FaTwitter />
    }, 
    {
        id: 1,
        url: "https://www.facebook.com",
        icon: <FaFacebook />
    },
    {
        id: 1,
        url: "https://www.linkedln.com",
        icon: <FaLinkedin />
    },
    {
        id: 1,
        url: "https://www.instagram.com",
        icon: <FaInstagram />
    },

]