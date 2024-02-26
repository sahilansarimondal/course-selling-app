"use client";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className=" flex   justify-between items-center ">
      <div>
        <img src="images/img_logo.svg" alt="Logo" width={"173px"} />
      </div>
      <div className="flex gap-2">
        <div className="courses">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href={"/courses"}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Courses
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="pricing">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href={"/pricing"}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="demo1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>demo1</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href={"/"}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      demo1
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="demo2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Demo2</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href={"/"}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Demo2
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div className="flex w-[173px] justify-center gap-1">
        <button>Profile</button>
        <img src="images/img_user.svg" alt="Profile" />
      </div>
    </div>
  );
}
