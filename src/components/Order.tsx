import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Product = {
    id: number;
    name: string;
    color: string;
};

export function Orders() {
  const products: Product[] = [
  { id: 1, name: "Apple", color: "bg-blue-500" },
  { id: 2, name: "qora zamish", color: "bg-red-500" },
  { id: 3, name: "Banana", color: "bg-green-500" },
  { id: 4, name: "Car", color: "bg-yellow-500" },
  { id: 5, name: "House", color: "bg-black" },
  { id: 6, name: "Animal", color: "bg-pink-500" },
  { id: 7, name: "Sky", color: "bg-indigo-500" },
  { id: 8, name: "Tree", color: "bg-emerald-500" },
  { id: 9, name: "Sun", color: "bg-orange-500" },

];
    

  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((item) => (
       <div key={item.id} className="p-2 rounded shadow bg-white">
      
       <img
         src={`https://picsum.photos/300/200?random=${item.id}`}
         className="w-full h-40 object-cover rounded"
       />

       <div className={`${item.color} h-10 mt-2 rounded`} />

       <p className="mt-2 font-bold">{item.name}</p>
    </div>
  ))}
</div>
  );
}
