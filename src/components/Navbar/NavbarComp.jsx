import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import "./index.css";

export default function NavbarComp() {
  const [itemSelected, setItemSelected] = React.useState("Home");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", route: "/" },
    { name: "About Me", route: "/about" },
    { name: "Research", route: "/research" },
    { name: "Mother Hajrah Foundation", route: "/foundation" },
    { name: "Blogs", route: "/blogs" },
    {name:"Career Guidance",route:"/career"},
    { name: "Contact", route: "/contact" },
    { name: "Appointments", route: "/appointments" },
  ];

  // Update itemSelected based on the current path
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentItem = menuItems.find(item => item.route === currentPath);
    if (currentItem) {
      setItemSelected(currentItem.name);
    }
  }, []);

  const handleClick = (name) => {
    setItemSelected(name);
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className="fixed text-color" maxWidth="full">
      {/* Logo content */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <p className="font-bold text-inherit">Dr. Khalid Hakeem</p>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
      </NavbarContent>

      {/* Main navigation links, centered */}
      <NavbarContent className="hidden lg:flex gap-3" justify="center">
        {menuItems.slice(0, 7).map((item, index) => (
          <NavbarItem key={index} isActive={item.name === itemSelected}>
            <Link
              href={item.route}
              className="text-black hover:text-gray-600"
              onClick={() => handleClick(item.name)}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Button content, aligned to the end */}
      <NavbarContent justify="end" className="hidden lg:flex">
        <NavbarItem>
          <Button as={Link} href="/appointments" color="default" variant="shadow" radius="small" className="bg-black text-white">
            Appointment
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          index === menuItems.length - 1 ? (
            <NavbarMenuItem key={index} isActive={item.name === itemSelected}>
              <NavbarItem>
                <Button as={Link} href="/appointments" color="default" variant="shadow" radius="small" className="bg-black text-white">
                  Appointment
                </Button>
              </NavbarItem>
            </NavbarMenuItem>
          ) : (
            <NavbarMenuItem key={index} isActive={item.name === itemSelected}>
              <Link
                href={item.route}
                className="text-black hover:text-gray-600"
                onClick={() => handleClick(item.name)}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          )
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
