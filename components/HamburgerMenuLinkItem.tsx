import { ExternalLink } from "lucide-react"
import React from "react"

export type HamburgerMenuLinkItemProps = {
  href: string
}
export default function HamburgerMenuLinkItem({
  children,
  href
}: React.PropsWithChildren<HamburgerMenuLinkItemProps>) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-slate-800 dark:text-slate-200">
        <div className="flex items-center">
          <div className="text-left text-sm w-full">{children}</div>
          <ExternalLink />
        </div>
      </div>
    </a>
  )
}
