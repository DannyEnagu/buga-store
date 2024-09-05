import { Text } from "@medusajs/ui"

import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const BugaCTA = () => {
  return (
    <Text className="flex flex-col sm:flex-row gap-x-16 gap-2 txt-compact-small-plus text-ui-fg-subtle">
      <LocalizedClientLink
        className="hover:text-ui-fg-base flex gap-2"
        href="/terms"
        data-testid="footer-terms-link"
      >
        Terms of use
      </LocalizedClientLink>
      <LocalizedClientLink
        className="hover:text-ui-fg-base flex gap-2"
        href="/privacy"
        data-testid="footer-privacy-link"
      >
        Privacy policy
      </LocalizedClientLink>
      <LocalizedClientLink
        className="hover:text-ui-fg-base flex gap-2"
        href="/cookie"
        data-testid="footer-cookie-link"
      >
        Cookie Preference
      </LocalizedClientLink>
      {/* <a href="https://www.medusajs.com" target="_blank" rel="noreferrer">
        <Medusa fill="#9ca3af" className="fill-[#9ca3af]" />
      </a>
      
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <NextJs fill="#9ca3af" />
      </a> */}
    </Text>
  )
}

export default BugaCTA
