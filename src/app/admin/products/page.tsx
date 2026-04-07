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
           className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            Add Product
        </Link>
    </Button>
    </div>
    </>
)
}