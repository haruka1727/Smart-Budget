import type { Category } from "./Category";

export class Transaction {
  public id: string;
  public amount: number;
  public date: Date;
  public category: string;
  public description: string;
  constructor(
    id: string,
    amount: number,
    date: Date,
    category: Category,
    description: string
  ) {
    this.id = id;
    this.amount = amount;
    this.date = date;
    this.category = category;
    this.description = description;
  }

  getFormattedDate(): string {
    return this.date.toLocaleDateString();
  }

  getFormattedAmount(): string {
    return `$${this.amount.toFixed(2)}`;
  }
}
