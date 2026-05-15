import db from "@/db/db";
import { Button } from "@/components/ui/button";
import { PageHeader } from "../_components/PageHeader";
import  Link  from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, MoreVertical, XCircle } from "lucide-react";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ActiveToggleDropdownItem, DeleteProductDropdownItem } from "./_components/ProductActions";


async function getData() {
    await new Promise(res => setTimeout(res, 1000))
    return[]
}

export default async function AdminProductsPage() {
    const data = await getData()

    return (
    <>
    <div className="flex justify-between items-center gap-4 w-full">
    <PageHeader>Products</PageHeader>
    <Button asChild> 
        <Link 
           href="/admin/products/new"
           className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            Add Product
        </Link>
    </Button>
    </div>
    <ProductsTable/>
    </>
)
}

async function ProductsTable() {
    const products = await db.product.findMany({ 
        select: { 
            id: true ,
            name: true, 
            priceInCents: true, 
            isAvailableForPurchase: true,
            _count: { select: { orders: true }}
        },
        orderBy: { name: "asc" }
    })

    if (products.length === 0) return <p>No products found.</p>

    return <Table>
        <TableHeader>
            <TableRow>
               <TableHead className="w-0">
                 <span className="sr-only">Available For Purchase</span>
               </TableHead>
               <TableHead>Name</TableHead>
               <TableHead>Price</TableHead>
               <TableHead>Orders</TableHead>
               <TableHead className="w-0">
                 <span className="sr-only">Actions</span>
               </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
          {products.map(products => (
            <TableRow key= {products.id}>
                <TableCell>
                    {products.isAvailableForPurchase ? (
                    <>
                      <CheckCircle2 />
                      <span className="sr-only">Available</span>
                    </> 
                    ) : (
                    <>
                      <XCircle />
                      <span className="sr-only">Unavailable</span>
                    </> 
                   )}
                </TableCell>
                <TableCell>{products.name}</TableCell>
                <TableCell>{formatCurrency(products.priceInCents / 100)}</TableCell>
                <TableCell>{formatNumber(products._count.orders)}</TableCell>  
                <TableCell>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <MoreVertical/>
                            <span className="sr-only">Actions</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>

                            <DropdownMenuItem asChild>
                              <a download href={`/admin/products/${products.id}/download`}>
                                Download
                              </a>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                              <Link  href={`/admin/products/${products.id}/edit`}>
                                Edit
                              </Link>
                            </DropdownMenuItem>

                          <ActiveToggleDropdownItem
                            id={products.id} 
                            isAvailabeForPurchase={products.isAvailableForPurchase} />

                          <DeleteProductDropdownItem 
                            id={products.id} 
                            disabled={products._count.orders > 0} />
                        </DropdownMenuContent>
                       </DropdownMenu>

                </TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
}
