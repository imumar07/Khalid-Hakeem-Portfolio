import React from "react";
// import logo from "../../assets/Khalid Hakeem Logo.svg";
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
  const [itemSelected , setItemSelected] = React.useState("Home");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About Me",
    "Research & Publications",
    "Mother Hajrah Foundation",
    "Blogs",
    "Contact",
    "Appointments",
    
  ];
  const handleClick = (e) => {
    setItemSelected(e.target.innerText);
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className=" fixed text-color" maxWidth="full">
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
        {menuItems.slice(0, 6).map((item, index) => (
          <NavbarItem key={index} isActive={item === itemSelected}>
            <Link href="#" className="text-black hover:text-gray-600" onClick={handleClick}>
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Button content, aligned to the end */}
      <NavbarContent justify="end" className="hidden lg:flex">
        <NavbarItem>
          <Button as={Link} href="#" color="default" variant="shadow" radius="small" className="bg-black text-white">
            Appointment
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          (index===menuItems.length-1) ?
            (<NavbarMenuItem key={index} isActive={item === itemSelected}>
           <NavbarItem>
          <Button as={Link} href="#" color="default" variant="shadow" radius="small" className="bg-black text-white">
            Appointment
          </Button>
        </NavbarItem>
          </NavbarMenuItem>
          )
          :(
            <NavbarMenuItem key={index} isActive={item === itemSelected}>
            <Link href="#" className="text-black hover:text-gray-600" onClick={handleClick}>
              {item}
            </Link>
          </NavbarMenuItem>
        )))}
      </NavbarMenu>
    </Navbar>
  );
}
