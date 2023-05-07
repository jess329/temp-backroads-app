import tour1 from "./images/tour-1.jpeg"
import tour2 from "./images/tour-2.jpeg"
import tour3 from "./images/tour-3.jpeg"
import tour4 from "./images/tour-4.jpeg"
import tour5 from "./images/tour-5.jpeg"
import tour6 from "./images/tour-6.jpeg"


export const pageLinks = [
    {id: 1, href: "#home", text: "home", class: "nav-link"},
    {id: 2, href: "#about", text: "about", class: "nav-link"},
    {id: 3, href: "#services", text: "services", class: "nav-link"},
    {id: 4, href: "#tours", text: "tours", class: "nav-link"},
    {id: 4, href: "#contact", text: "contact", class: "nav-link"}
]
export const socialLinks = [
    {id: 1, href: "https://www.facebook.com", classLink: "nav-icon", classIcon: "fab fa-facebook"},
    {id: 2, href: "https://www.twitter.com", classLink: "nav-icon", classIcon: "fab fa-twitter"},
    {id: 3, href: "https://www.squarespace.com", classLink: "nav-icon", classIcon: "fab fa-squarespace"},
]
export const servicesData = [
    {id: 1, icon: "fas fa-wallet fa-fw",title: "saving money", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia"},
    {id: 2, icon: "fas fa-tree fa-fw",title: "amazing comfort", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia"},
    {id: 3, icon: "fas fa-socks fa-fw",title: "endless hiking", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia"}
]
export const toursData = [
    {id: 1, img: tour1, title: "Tibet Adventure", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia", 
    date: "august 26th, 2020", where: "china", days: "6 days", price: "from $2100"},
    {id: 2, img: tour2, title: "best of java", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia", 
    date: "october 1th, 2020", where: "indonesia", days: "11 days", price: "from $1400"},
    {id: 3, img: tour3, title: "explore hong kong", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia", 
    date: "september 15th, 2020", where: "hong kong", days: "8 days", price: "from $5000"},
    {id: 4, img: tour4, title: "explore hong kong", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia", 
    date: "september 15th, 2020", where: "hong kong", days: "8 days", price: "from $5000"},
    {id: 5, img: tour5, title: "explore hong kong", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia", 
    date: "september 15th, 2020", where: "hong kong", days: "8 days", price: "from $5000"},
    {id: 6, img: tour6, title: "explore hong kong", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia", 
    date: "september 15th, 2020", where: "hong kong", days: "8 days", price: "from $5000"}
]