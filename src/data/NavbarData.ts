interface NavBarInterface {
  name: string;
  link: string;
}
const navbarLinks: NavBarInterface[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Our Team",
    link: "/board",
  },
  {
    name: "Client Work",
    link: "/work",
  },
  {
    name: "Alumni",
    link: "/alumni",
  },
];

export default navbarLinks;
