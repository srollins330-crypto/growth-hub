import { useState } from "react";
import { Download, Printer, Mail, CheckCircle2, Receipt } from "lucide-react";
import StudentLayout from "../components/StudentLayout";
import { Button } from "@/components/ui/button";
import { payments, student } from "../data/mock";

const FeeReceipt = () => {
  const [active, setActive] = useState(payments.history[0]);
  return (
    <StudentLayout
      title="Fee Receipts"
      subtitle="View, download and email GST-compliant receipts for every payment."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
        <div className="rounded-xl border border-border bg-card">
          <div className="border-b border-border px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            All Receipts
          </div>
          <ul className="divide-y divide-border">
            {payments.history.map((p) => {
              const isActive = p.receipt === active.receipt;
              return (
                <li key={p.receipt}>
                  <button
                    onClick={() => setActive(p)}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${isActive ? "bg-primary/5" : "hover:bg-secondary/60"}`}
                  >
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                      <Receipt size={15} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-semibold">{p.receipt}</div>
                      <div className="text-xs text-muted-foreground">{p.date} · {p.mode}</div>
                    </div>
                    <div className="text-sm font-semibold">₹{(p.amount / 1000).toFixed(0)}k</div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-6 py-4">
            <div>
              <div className="text-xs text-muted-foreground">Receipt</div>
              <div className="text-lg font-bold">{active.receipt}</div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline"><Mail size={14} /> Email</Button>
              <Button size="sm" variant="outline"><Printer size={14} /> Print</Button>
              <Button size="sm"><Download size={14} /> Download PDF</Button>
            </div>
          </div>

          <div className="p-6">
            <div className="rounded-2xl border border-border bg-gradient-to-b from-secondary/40 to-transparent p-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-bold">Slate Academy Pvt. Ltd.</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    2nd Floor, Design House, Bandra West<br />
                    Mumbai 400050 · GSTIN 27AABCS0000A1Z5
                  </div>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={13} /> Paid
                </div>
              </div>

              <div className="my-6 h-px bg-border" />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Billed to</div>
                  <div className="mt-2 text-sm font-semibold">{student.name}</div>
                  <div className="text-xs text-muted-foreground">{student.id} · {student.email}</div>
                  <div className="text-xs text-muted-foreground">{student.address}, {student.city}</div>
                </div>
                <div className="text-sm sm:text-right">
                  <div className="text-xs text-muted-foreground">Date of payment</div>
                  <div className="font-medium">{active.date}</div>
                  <div className="mt-2 text-xs text-muted-foreground">Payment mode</div>
                  <div className="font-medium">{active.mode}</div>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/60 text-xs text-muted-foreground">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium">Description</th>
                      <th className="px-4 py-2 text-right font-medium">HSN</th>
                      <th className="px-4 py-2 text-right font-medium">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3">{student.course} — Installment</td>
                      <td className="px-4 py-3 text-right text-muted-foreground">999293</td>
                      <td className="px-4 py-3 text-right font-medium">₹{Math.round(active.amount / 1.18).toLocaleString()}</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 text-muted-foreground" colSpan={2}>GST @ 18%</td>
                      <td className="px-4 py-3 text-right">₹{(active.amount - Math.round(active.amount / 1.18)).toLocaleString()}</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/40">
                      <td className="px-4 py-3 font-semibold" colSpan={2}>Total paid</td>
                      <td className="px-4 py-3 text-right text-lg font-bold">₹{active.amount.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex items-end justify-between text-xs text-muted-foreground">
                <div>Thank you for investing in your career.</div>
                <div className="text-right">
                  <div className="font-serif italic">Slate Finance Team</div>
                  <div>Authorised signatory</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default FeeReceipt;
