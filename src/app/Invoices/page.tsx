"use client";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { SidebarInset } from "@/components/ui/ui-sidebar/sidebar";
import {
    Download,
    Printer,
    DollarSign,
} from "lucide-react";

const invoiceItems = [
    {
        id: 1,
        item: "Origin License",
        description: "Extended License",
        quantity: 1,
        unitCost: 999,
        total: 999,
    },
    {
        id: 2,
        item: "Custom Services",
        description: "Installation and Customization (per hour)",
        quantity: 20,
        unitCost: 150,
        total: 3000,
    },
    {
        id: 3,
        item: "Hosting",
        description: "1 year subscription",
        quantity: 1,
        unitCost: 499,
        total: 499,
    },
    {
        id: 4,
        item: "Platinum Support",
        description: "1 year subscription 24/7",
        quantity: 1,
        unitCost: 3999,
        total: 3999,
    },
];

const formatCurrency = (value: number) => {
    return `$${value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).replace(",", ".")}`;
};

export default function InvoicePage() {
    const subtotal = 8497;
    const discount = 1699.4;
    const vat = 679.76;
    const total = 7477.36;

    const handlePrint = () => {
        window.print();
    };

    const handleSave = () => {
        console.log("Saving invoice...");
    };

    const handlePayment = () => {
        console.log("Proceeding to payment...");
    };

    return (
        <main className="w-full">
            <SidebarInset>
                <Header />
                <div className="min-h-screen mx-4 md:mx-24 bg-[#f0f2f5] p-1.5 text-[#172b4d]">
                    <div className="mx-auto w-full rounded-md border border-[#d8dbe0] bg-white shadow-sm">

                        {/* ================= HEADER ================= */}
                        <div className="flex h-12 items-center justify-between border-b border-[#d8dbe0] bg-[#f8f9fa] px-4">

                            <div className="text-[15px]">
                                Invoice{" "}
                                <span className="font-bold">#90-98792</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className="flex h-8 items-center gap-1.5 rounded-md bg-[#6b8df0] px-3 text-[13px] text-[#111827] transition hover:bg-[#5c7ee0]"
                                >
                                    <Download size={15} strokeWidth={1.7} />
                                    Save
                                </button>

                                <button
                                    type="button"
                                    onClick={handlePrint}
                                    className="flex h-8 items-center gap-1.5 rounded-md bg-[#687284] px-3 text-[13px] text-white transition hover:bg-[#596272]"
                                >
                                    <Printer size={15} strokeWidth={1.7} />
                                    Print
                                </button>
                            </div>
                        </div>

                        {/* ================= CONTENT ================= */}
                        <div className="px-4 pb-3">

                            {/* ================= COMPANY DETAILS ================= */}
                            <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-3">

                                {/* FROM */}
                                <div>
                                    <h3 className="mb-4 text-[15px] font-medium">
                                        From:
                                    </h3>

                                    <div className="space-y-0.5 text-[15px] leading-5">
                                        <p className="font-bold">
                                            Your Great Company Inc.
                                        </p>
                                        <p>724 John Ave.</p>
                                        <p>Cupertino, CA 95014</p>
                                        <p>
                                            Email: email@your-great-company.com
                                        </p>
                                        <p>
                                            Phone: +1 123-456-7890
                                        </p>
                                    </div>
                                </div>

                                {/* TO */}
                                <div>
                                    <h3 className="mb-4 text-[15px] font-medium">
                                        To:
                                    </h3>

                                    <div className="space-y-0.5 text-[15px] leading-5">
                                        <p className="font-bold">
                                            Acme Inc.
                                        </p>
                                        <p>159 Manor Station Road</p>
                                        <p>San Diego, CA 92154</p>
                                        <p>Email: email@acme.com</p>
                                        <p>Phone: +1 123-456-7890</p>
                                    </div>
                                </div>

                                {/* DETAILS */}
                                <div>
                                    <h3 className="mb-4 text-[15px] font-medium">
                                        Details:
                                    </h3>

                                    <div className="space-y-0.5 text-[15px] leading-5">
                                        <p>
                                            Invoice{" "}
                                            <span className="font-bold">
                                                #90-98792
                                            </span>
                                        </p>

                                        <p>March 30, 2020</p>

                                        <p>VAT: EU9877281777</p>

                                        <p>
                                            Account Name: ACME
                                        </p>

                                        <p>
                                            <span className="font-bold">
                                                SWIFT code: 99 888 7777 6666 5555
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* ================= TABLE ================= */}
                            <div className="w-full overflow-x-auto">
                                <table className="w-full min-w-[900px] border-collapse text-[14px]">

                                    <thead>
                                        <tr className="h-9">
                                            <th className="w-[35px] px-4 text-left font-bold">
                                                #
                                            </th>

                                            <th className="w-[240px] px-3 text-left font-bold">
                                                Item
                                            </th>

                                            <th className="px-3 text-left font-bold">
                                                Description
                                            </th>

                                            <th className="w-[120px] px-3 text-left font-bold">
                                                Quantity
                                            </th>

                                            <th className="w-[140px] px-3 text-right font-bold">
                                                Unit Cost
                                            </th>

                                            <th className="w-[145px] px-2 text-right font-bold">
                                                Total
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {invoiceItems.map((item, index) => (
                                            <tr
                                                key={item.id}
                                                className={`h-[41px] border-b border-[#d8dbe0] ${index === 0 ? "bg-[#f0f1f3]" : ""
                                                    }`}
                                            >
                                                <td className="px-4 py-2">
                                                    {item.id}
                                                </td>

                                                <td className="px-3 py-2">
                                                    {item.item}
                                                </td>

                                                <td className="px-3 py-2">
                                                    {item.description}
                                                </td>

                                                <td className="px-3 py-2">
                                                    {item.quantity}
                                                </td>

                                                <td className="px-3 py-2 text-right">
                                                    {formatCurrency(item.unitCost)}
                                                </td>

                                                <td className="px-2 py-2 text-right">
                                                    {formatCurrency(item.total)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* ================= BOTTOM ================= */}
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_395px]">

                                {/* DESCRIPTION */}
                                <div className="max-w-[390px] pt-4 text-[15px] leading-[24px]">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi
                                        ut aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
                                    </p>
                                </div>

                                {/* TOTALS */}
                                <div className="pt-3">

                                    <div className="flex h-10 items-center justify-between border-b border-[#d8dbe0] px-2">
                                        <span className="font-bold text-[14px]">
                                            Subtotal
                                        </span>

                                        <span className="text-[14px]">
                                            {formatCurrency(subtotal)}
                                        </span>
                                    </div>

                                    <div className="flex h-10 items-center justify-between border-b border-[#d8dbe0] px-2">
                                        <span className="font-bold text-[14px]">
                                            Discount (20%)
                                        </span>

                                        <span className="text-[14px]">
                                            {formatCurrency(discount)}
                                        </span>
                                    </div>

                                    <div className="flex h-10 items-center justify-between border-b border-[#d8dbe0] px-2">
                                        <span className="font-bold text-[14px]">
                                            VAT (10%)
                                        </span>

                                        <span className="text-[14px]">
                                            {formatCurrency(vat)}
                                        </span>
                                    </div>

                                    <div className="flex h-10 items-center justify-between border-b border-[#d8dbe0] px-2">
                                        <span className="font-bold text-[14px]">
                                            Total
                                        </span>

                                        <span className="font-bold text-[14px]">
                                            {formatCurrency(total)}
                                        </span>
                                    </div>

                                    {/* PAYMENT BUTTON */}
                                    <div className="flex justify-start pt-4">
                                        <button
                                            type="button"
                                            onClick={handlePayment}
                                            className="flex h-[39px] items-center gap-2 rounded-md bg-[#4cae4c] px-4 text-[14px] text-[#111827] transition hover:bg-[#419641]"
                                        >
                                            <DollarSign
                                                size={15}
                                                strokeWidth={1.7}
                                            />

                                            Proceed to Payment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </SidebarInset>
        </main>
    );
}