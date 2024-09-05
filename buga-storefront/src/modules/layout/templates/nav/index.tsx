import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { MagnifyingGlassMini, User } from "@medusajs/icons"
import TopMenu from "@modules/layout/components/top-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center gap-8 justify-between w-full h-full text-small-regular">
      <div className="flex items-center h-full">
        <LocalizedClientLink
          href="/"
          className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
          data-testid="nav-store-link"
        >
          Buga Store
        </LocalizedClientLink>
      </div>

      <TopMenu />

      <div className="flex items-center gap-x-2 h-full flex-1 basis-0 justify-end ml-auto">
        <LocalizedClientLink
          className="hidden small:block hover:text-ui-fg-base"
          href="/search"
          scroll={false}
          data-testid="nav-search-link"
        >
          <MagnifyingGlassMini />
        </LocalizedClientLink>
        <LocalizedClientLink
          className="hover:text-ui-fg-base"
          href="/account"
          data-testid="nav-account-link"
        >
          <User />
        </LocalizedClientLink>
        <Suspense
          fallback={
            <LocalizedClientLink
              className="hover:text-ui-fg-base flex gap-2"
              href="/cart"
              data-testid="nav-cart-link"
            >
              Cart (0)
            </LocalizedClientLink>
          }
        >
          <CartButton />
        </Suspense>
        <div className="small:hidden basis-0 h-full flex items-center">
          <div className="h-full">
            <SideMenu regions={regions} />
          </div>
        </div>
      </div>
    </nav>
  )
}
