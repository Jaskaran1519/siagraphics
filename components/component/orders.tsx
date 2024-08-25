
"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Pagination } from "@/components/ui/pagination";

export function orders() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ key: "id", order: "asc" });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const orders = useMemo(() => {
    return [
      {
        id: "OD001",
        quantity: 2,
        discount: 10,
        amount: 150.0,
        status: "Delivered",
      },
      {
        id: "OD002",
        quantity: 1,
        discount: 0,
        amount: 99.99,
        status: "Pending",
      },
      {
        id: "OD003",
        quantity: 3,
        discount: 5,
        amount: 249.99,
        status: "Cancelled",
      },
      {
        id: "OD004",
        quantity: 4,
        discount: 15,
        amount: 399.99,
        status: "Delivered",
      },
      {
        id: "OD005",
        quantity: 1,
        discount: 0,
        amount: 79.99,
        status: "Pending",
      },
      {
        id: "OD006",
        quantity: 2,
        discount: 10,
        amount: 150.0,
        status: "Delivered",
      },
      {
        id: "OD007",
        quantity: 1,
        discount: 0,
        amount: 99.99,
        status: "Pending",
      },
      {
        id: "OD008",
        quantity: 3,
        discount: 5,
        amount: 249.99,
        status: "Cancelled",
      },
      {
        id: "OD009",
        quantity: 4,
        discount: 15,
        amount: 399.99,
        status: "Delivered",
      },
      {
        id: "OD010",
        quantity: 1,
        discount: 0,
        amount: 79.99,
        status: "Pending",
      },
    ]
      .filter((order) => {
        const searchValue = search.toLowerCase();
        return (
          order.id.toLowerCase().includes(searchValue) ||
          order.status.toLowerCase().includes(searchValue)
        );
      })
      .sort((a:any, b:any) => {
        if (sort.order === "asc") {
          return a[sort.key] > b[sort.key] ? 1 : -1;
        } else {
          return a[sort.key] < b[sort.key] ? 1 : -1;
        }
      })
      .slice((page - 1) * pageSize, page * pageSize);
  }, [search, sort, page, pageSize]);
  const handleSearch = (e:any) => setSearch(e.target.value);
  const handleSort = (key:any) => {
    if (sort.key === key) {
      setSort({ key, order: sort.order === "asc" ? "desc" : "asc" });
    } else {
      setSort({ key, order: "asc" });
    }
  };
  const handlePageChange = (page:any) => setPage(page);
  const handlePageSizeChange = (size:any) => setPageSize(size);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Search orders..."
            className="bg-white dark:bg-gray-950"
            value={search}
            onChange={handleSearch}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="shrink-0">
                <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                Sort by
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]" align="end">
              <DropdownMenuRadioGroup
                value={sort.key}
                onValueChange={handleSort}
              >
                <DropdownMenuRadioItem value="id">
                  Order ID
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="quantity">
                  Quantity
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="discount">
                  Discount
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="amount">
                  Amount
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="status">
                  Status
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="border rounded-lg w-full">
        <div className="relative w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleSort("id")}
                  >
                    Order ID
                    {sort.key === "id" && (
                      <span className="ml-1">
                        {sort.order === "asc" ? "\u2191" : "\u2193"}
                      </span>
                    )}
                  </div>
                </TableHead>
                <TableHead className="w-[100px]">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleSort("quantity")}
                  >
                    Quantity
                    {sort.key === "quantity" && (
                      <span className="ml-1">
                        {sort.order === "asc" ? "\u2191" : "\u2193"}
                      </span>
                    )}
                  </div>
                </TableHead>
                <TableHead className="w-[100px]">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleSort("discount")}
                  >
                    Discount
                    {sort.key === "discount" && (
                      <span className="ml-1">
                        {sort.order === "asc" ? "\u2191" : "\u2193"}
                      </span>
                    )}
                  </div>
                </TableHead>
                <TableHead className="w-[100px] text-right">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleSort("amount")}
                  >
                    Amount
                    {sort.key === "amount" && (
                      <span className="ml-1">
                        {sort.order === "asc" ? "\u2191" : "\u2193"}
                      </span>
                    )}
                  </div>
                </TableHead>
                <TableHead className="w-[100px]">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleSort("status")}
                  >
                    Status
                    {sort.key === "status" && (
                      <span className="ml-1">
                        {sort.order === "asc" ? "\u2191" : "\u2193"}
                      </span>
                    )}
                  </div>
                </TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>{order.discount}%</TableCell>
                  <TableCell className="text-right">
                    ${order.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === "Delivered"
                          ? "secondary"
                          : order.status === "Pending"
                          ? "outline"
                          : "destructive"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon">
                        <EyeIcon className="w-4 h-4" />
                        <span className="sr-only">View</span>
                      </Button>
                      <Button variant="outline" size="icon">
                        <FilePenIcon className="w-4 h-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="outline" size="icon">
                        <TrashIcon className="w-4 h-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      {/* <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <Select
            defaultValue={pageSize}
            onValueChange={handlePageSizeChange}
            className="w-16"
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={10}>10</SelectItem>
              <SelectItem value={20}>20</SelectItem>
              <SelectItem value={50}>50</SelectItem>
            </SelectContent>
          </Select>
          <span>entries</span>
        </div>
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(orders.length / pageSize)}
          onPageChange={handlePageChange}
        />
      </div> */}
    </div>
  );
}

export default orders;

function ArrowUpDownIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}

function EyeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function FilePenIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function TrashIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
