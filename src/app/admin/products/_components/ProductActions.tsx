"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
//import { DropdownMenu } from "radix-ui";
import { deleteProduct, toggleProductAvailability } from "../_actions/products";
import { useTransition } from "react"

export function ActiveToggleDropdownItem({
    id,
    isAvailabeForPurchase ,
} : { 
    id: string,
    isAvailabeForPurchase: boolean
}) {
    const [isPending, startTransition] = useTransition()
    return (
    <DropdownMenuItem 
        disabled={isPending}
        onClick={() => {
        startTransition(async () => {
            await toggleProductAvailability(id, 
            !isAvailabeForPurchase)
        })
    }}
  >
        {isAvailabeForPurchase ? "Deactivate" : "Activate"}
    </DropdownMenuItem>
    )
}

export function DeleteProductDropdownItem({
    id,
    disabled,
  }  : {
    id: string
    disabled: boolean
  }) {

    const [isPending, startTransition] = useTransition()

    return (
    <DropdownMenuItem 
    variant="destructive"
    disabled={disabled || isPending}
    onClick={() => {
        startTransition(async () => {
            await deleteProduct(id)
        })
    }}
  >
        Delete
    </DropdownMenuItem>
    )
}