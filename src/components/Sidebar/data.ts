import { share, calender, people, pad, note, heart, house, arrowLeft} from "../icons"


type menuType = {
    icon: string
    alt: string
}

export const sidebarMenu: menuType[] = [
    {icon: house, alt: "house icon"},
    {icon: people, alt: "people icon"},
    {icon: calender, alt: "calender icon"},
    {icon: share, alt: "share icon"},
    {icon: note, alt: "note icon"},
    {icon: pad, alt: "pad icon"},
    {icon: heart, alt: "heart icon"},
    {icon: arrowLeft, alt: "arrowLeft icon"},
]

