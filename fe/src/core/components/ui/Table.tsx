import * as React from "react";
import { cn } from "../../lib/tw";
import { cva, type VariantProps } from "class-variance-authority";

// 1. Root Table Component (Có bọc div để scroll ngang trên mobile)
const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto rounded-xl shadow-sm">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm text-left text-black", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

// 2. Table Header
const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("bg-blue-200 text-black", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

// 3. Table Body
const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

// Tích hợp CVA cho TableRow giống cách bạn làm với component A
const tableRowVariants = cva(
  "border-b transition-colors data-[state=selected]:bg-gray-100",
  {
    variants: {
      variant: {
        default: "hover:bg-gray-50/50",
        striped: "even:bg-blue-100/50 hover:bg-gray-200",
        ghost: "border-none hover:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    VariantProps<typeof tableRowVariants> {}

// 4. Table Row
const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, variant, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(tableRowVariants({ variant, className }))}
      {...props}
    />
  )
);
TableRow.displayName = "TableRow";

// 5. Table Head (Cột tiêu đề - Thường in đậm)
const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium  [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

// 6. Table Cell (Ô nội dung)
const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };