export class TransactionDto {
    userId: string;
    amount: number;
    type: 'balanced' | 'earned' | 'spent' | 'payout' | 'paidOut';
  }