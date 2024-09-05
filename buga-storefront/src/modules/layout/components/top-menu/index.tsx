'use client'
import { clx } from "@medusajs/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { usePathname } from "next/navigation";

const TopMenuItems = {
    Home: '/',
    Store: '/store',
    Cart: '/cart',
    Collection: '/collection',
};

export default function TopMenu() {
    const pathname = usePathname();
    return (
        <div className="hidden sm:block">
          <ul className="flex items-center gap-8">
            {Object.entries(TopMenuItems).map(([name, href]) => {
              return (
                <li key={name}>
                  <LocalizedClientLink
                    href={href}
                    className={clx("text-base font-medium hover:text-ui-fg-base hover:line-through",
                      pathname.endsWith(href) ? "text-ui-fg-base" : "text-ui-fg-subtle",
                    )}
                    data-testid={`${name.toLowerCase()}-link`}
                  >
                    {name}
                  </LocalizedClientLink>
                </li>
              )
            })}
          </ul>
        </div>
    )
}