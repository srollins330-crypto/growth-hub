import { Download, CreditCard } from "lucide-react";
import StudentLayout from "../components/StudentLayout";
import StatusBadge from "@/admin/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { payments } from "../data/mock";

const Payments = () => (
  <StudentLayout
    title="Payments"
    subtitle={`Next installment ₹${(payments.total - payments.paid - payments.discount).toLocaleString()} due ${payments.nextDate}`}
    actions={<Button size="sm"><CreditCard size={14} /> Pay now</Button>}
  >
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {[
        { l: "Total fee", v: payments.total },
        { l: "Registration", v: payments.registration },
        { l: "Scholarship", v: payments.scholarship },
        { l: "Discount", v: payments.discount },
        { l: "Paid", v: payments.paid },
        { l: "Pending", v: payments.pending },
      ].map((x) => (
        <div key={x.l} className="rounded-xl border border-border bg-card p-5">
          <div className="text-xs text-muted-foreground">{x.l}</div>
          <div className="mt-1 text-xl font-bold">₹{x.v.toLocaleString()}</div>
        </div>
      ))}
    </div>

    <div className="mt-6 rounded-xl border border-border bg-card p-5">
      <h3 className="text-sm font-semibold">Installment timeline</h3>
      <div className="mt-6 flex items-center justify-between gap-2 overflow-x-auto">
        {payments.installments.map((i, idx) => (
          <div key={i.label} className="flex flex-1 min-w-[110px] flex-col items-center">
            <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${i.paid ? "bg-emerald-500 text-white" : "bg-secondary text-muted-foreground"}`}>
              {i.paid ? "✓" : idx + 1}
            </div>
            <div className="mt-2 text-xs font-medium">{i.label}</div>
            <div className="text-[11px] text-muted-foreground">{i.date}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-6 rounded-xl border border-border bg-card">
      <div className="border-b border-border px-5 py-4">
        <h3 className="text-sm font-semibold">Payment history</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-xs text-muted-foreground">
            <tr className="border-b border-border">
              <th className="px-5 py-2 text-left font-medium">Receipt</th>
              <th className="px-5 py-2 text-left font-medium">Date</th>
              <th className="px-5 py-2 text-left font-medium">Amount</th>
              <th className="px-5 py-2 text-left font-medium">Mode</th>
              <th className="px-5 py-2 text-left font-medium">Status</th>
              <th className="px-5 py-2 text-right font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.history.map((p) => (
              <tr key={p.receipt} className="border-b border-border last:border-0 hover:bg-secondary/40">
                <td className="px-5 py-3 font-medium">{p.receipt}</td>
                <td className="px-5 py-3 text-muted-foreground">{p.date}</td>
                <td className="px-5 py-3 font-semibold">₹{p.amount.toLocaleString()}</td>
                <td className="px-5 py-3 text-muted-foreground">{p.mode}</td>
                <td className="px-5 py-3"><StatusBadge tone="success">{p.status}</StatusBadge></td>
                <td className="px-5 py-3 text-right">
                  <Button size="sm" variant="outline"><Download size={14} /> Receipt</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </StudentLayout>
);

export default Payments;
