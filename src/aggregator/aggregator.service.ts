import { Injectable } from '@nestjs/common';
import { TransactionDto } from '../transaction/transaction.dto';

@Injectable()
export class AggregatorService {
  aggregateTransactions(transactions: TransactionDto[]): any {
    // Implement logic to aggregate transactions by user ID
    // For simplicity, we'll just return the transactions as they are
    return transactions;
  }

  aggregatePayouts(transactions: TransactionDto[]): any {
    // Implement logic to aggregate payouts by user ID
    // For simplicity, we'll just return the transactions as they are
    return transactions;
  }
}