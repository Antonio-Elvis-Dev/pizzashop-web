import { Building, ChevronDown, LogOut } from 'lucide-react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex select-none items-center gap-2" variant="outline">
          Pizza Shop
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="flex flex-col">
          <span>Antônio Elvis</span>
          <span className="text-xs font-normal text-muted-foreground">
            elvis@teste.com
          </span>
        </DropdownMenuLabel>

        <DropdownMenuItem>
          <Building className=" mr-2 h-4 w-4" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className="text-rose-500 dark:text-rose-400" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
