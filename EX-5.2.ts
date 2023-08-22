type TransactionType = "deposit" | "withdrawal";

interface Transaction {
  type: TransactionType;
  amount: number;
}
interface calculateBalanceType {
  (transactions: Transaction[]): number;
}

const calculateBalance: calculateBalanceType = (transactions) => {
  let balance = 0;
  for (const transaction of transactions) {
    if (transaction.type === "deposit") {
      balance += transaction.amount;
    } else if (transaction.type === "withdrawal") {
      balance -= transaction.amount;
    }
  }
  return balance;
};

const transactions: Transaction[] = [
  { type: "deposit", amount: 100 },
  { type: "withdrawal", amount: 50 },
  { type: "deposit", amount: 200 },
  { type: "withdrawal", amount: 30 },
];

console.log(calculateBalance(transactions));
