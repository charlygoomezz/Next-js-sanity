"use client"
import { usePathname, useRouter } from "next/navigation"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const locales = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
]

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const currentLocale = params.locale as string

  const handleChangeLocale = (locale: string) => {
    const segments = pathname.split("/")
    segments[1] = locale // Replace the locale segment
    router.push(segments.join("/"))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => handleChangeLocale(locale.code)}
            className={cn(currentLocale === locale.code && "font-semibold")}
          >
            {locale.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}