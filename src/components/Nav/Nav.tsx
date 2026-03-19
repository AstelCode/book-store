"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoBagOutline, IoCartOutline } from "react-icons/io5";
import { MdOutlineAdd } from "react-icons/md";
import { NavContainer } from "./NavContainer";
import { NavLink } from "./NavLink";
import { redirect } from "next/navigation";
import { PiStorefrontThin } from "react-icons/pi";
import { IoLibraryOutline } from "react-icons/io5";
import { NavUser } from "./NavUser";
import { useUser } from "@/context/UserContext";

export const Nav = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  if (!user) {
    redirect("/auth");
  }

  const onClickImage = () => {
    if (!user) {
      redirect("/auth");
    }
    redirect("/dashboard/user");
  };

  return (
    <NavContainer setIsOpen={setIsOpen} isOpen={isOpen}>
      <NavUser
        isOpen={isOpen}
        onClickImage={onClickImage}
        active={path.startsWith("/dashboard/user")}
        user={user}
      />
      <div className="grid grid-rows-[repeat(auto-fit,3.5rem)]">
        <NavLink
          icon={PiStorefrontThin}
          href={"/dashboard/store"}
          active={path.startsWith("/dashboard/store")}
          name={"Store"}
          isOpen={isOpen}
        />

        {!user?.admin && (
          <NavLink
            icon={IoCartOutline}
            href={"/dashboard/cart"}
            active={path.startsWith("/dashboard/cart")}
            name={"Cart"}
            isOpen={isOpen}
            badge={user.cart.length > 0}
            badgeValue={user.cart.length}
          />
        )}
        {user && !user.admin && (
          <NavLink
            icon={IoLibraryOutline}
            active={path.startsWith("/dashboard/library")}
            href="/dashboard/library"
            isOpen={isOpen}
            name="Library"
          />
        )}
        {user?.admin && (
          <NavLink
            active={path.startsWith("/dashboard/add-book")}
            icon={MdOutlineAdd}
            href="/dashboard/add-book"
            isOpen={isOpen}
            name="Add book"
          />
        )}
      </div>
    </NavContainer>
  );
};
