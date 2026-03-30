import { Nav, NavLink } from "@/components/Nav"
import { Orders } from "./orders"

export const dynamic = "force-dynamic" //next not cash our admin pages, so we are ignoring every cashing problem, make admin page work faster 

export default function AdminLayout( {
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
   return <>
      <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
   </>
}
