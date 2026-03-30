import { Button } from "@/components/ui/button";
import { PageHeader } from "../_components/PageHeader";
import  Link  from "next/link";

export default function AdminProductsPage() {
    return (
    <>
    <div className="flex justify-between items-center gap-4 w-full">
    <PageHeader>Products</PageHeader>
    <Button asChild>
        <Link 
           href="/admin/products/new"
           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add Product
        </Link>
    </Button>
    </div>
    </>
)
}