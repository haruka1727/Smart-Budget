import { Transaction } from "./Transactions";
import { Category } from "./Category";

// Transaction
// -- PlannedTransaction

export class PlannedTransaction extends Transaction {
  public isPlanned: boolean;
  public schedule: string | null = null; // Optional field for scheduling
  public isPaid: boolean = false; // Indicates if the planned transaction has been paid

  constructor(
    id: string,
    amount: number,
    date: Date,
    category: Category,
    description: string,
    isPlanned: boolean = true,
    schedule: string | null = null,
    isPaid: boolean = false
  ) {
    super(id, amount, date, category, description);
    this.isPlanned = isPlanned;
    this.schedule = schedule;
    this.isPaid = isPaid;
  }
}
