import { BiHomeAlt2, BiUser, BiBriefcaseAlt, BiCog, BiGridAlt } from 'react-icons/bi'

export const links = [
    {
        to: '/',
        text: 'Inicio',
        icon: <BiHomeAlt2 />,
    },
    {
        to: '/about',
        text: 'Sobre nosotros',
        icon: <BiUser />,
    },
    {
        to: '/services',
        text: 'Servicios',
        icon: <BiCog />,
    },
    {
        to: '/blog',
        text: 'Blog',
        icon: <BiGridAlt />
    },
]

export const services = [
    {
        id: 1,
        to: "mental-health",
        imageName: "service-1.jpg",
        title: "Salud Mental"
    },
    {
        id: 2,
        to: "physical-health",
        imageName: "service-2.jpg",
        title: "Salud Física"
    },
    {
        id: 3,
        to: "nutritional-health",
        imageName: "service-3.jpg",
        title: "Salud Nutricional"
    },
]
