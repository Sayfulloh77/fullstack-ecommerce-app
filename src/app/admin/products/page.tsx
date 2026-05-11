import { Button } from "@/components/ui/button";
import { PageHeader } from "../_components/PageHeader";
import  Link  from "next/link";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

function ProductsTable() {
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
          
        </TableBody>
    </Table>
}
