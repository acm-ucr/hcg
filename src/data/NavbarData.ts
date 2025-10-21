interface navBarInterface {
  name: string;
  link: string;
}
const navbarLinks: navBarInterface[] = [
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
