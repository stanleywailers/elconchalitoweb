import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { logEvent } from "firebase/analytics";

import { Logo } from "./images";

import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { analytics } from "@/firebaseConfig";

export const Navbar = () => {
  return (
    <HeroUINavbar className="bg-white" maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <img alt="logo" height={20} src={Logo} width={200} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "secondary" }),
                  " text-black data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="primary"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            href={siteConfig.links.whatsapp}
            title="WhatsApp"
            onClick={() => {
              logEvent(analytics, "whatsapp_click");
            }}
          >
            <WhatsAppIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.facebook}
            title="Facebook"
            onClick={() => {
              logEvent(analytics, "facebook_click");
            }}
          >
            <FacebookIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.instagram}
            title="Instagram"
            onClick={() => {
              logEvent(analytics, "instagram_click");
            }}
          >
            <InstagramIcon className="text-default-500" />
          </Link>

          {/*<ThemeSwitch />*/}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.whatsapp} title="WhatsApp">
          <WhatsAppIcon className="text-default-500" />
        </Link>
        <Link isExternal href={siteConfig.links.facebook} title="Facebook">
          <FacebookIcon className="text-default-500" />
        </Link>
        {/*<ThemeSwitch />
        <NavbarMenuToggle />*/}
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
