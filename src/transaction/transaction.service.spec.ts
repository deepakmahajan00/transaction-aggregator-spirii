import { Test, TestingModule } from '@nestjs/testing';
import { TransactionService } from './transaction.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';

describe('TransactionService', () => {
  let service: TransactionService;

  const mockTransactionRepository = {
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionService,
        {
          provide: getRepositoryToken(Transaction),
          useValue: mockTransactionRepository,
        },
      ],
    }).compile();

    service = module.get<TransactionService>(TransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all transactions', async () => {
    const mockTransactions = [{ id: 1, userId: 1, amount: 100 }];
    mockTransactionRepository.find.mockReturnValueOnce(mockTransactions);

    const result = await service.getAllTransactions();

    expect(result).toEqual(mockTransactions);
  });
});