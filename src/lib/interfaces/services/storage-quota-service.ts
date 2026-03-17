import { PlatformID } from '@digitaldefiance/ecies-lib';
import type { IQuotaCheckResult, IStorageUsage } from '../params/quota-results';

/**
 * Service interface for managing per-user storage quotas.
 *
 * Validates: Requirements 8.1, 8.2, 8.3, 8.4
 */
export interface IStorageQuotaService<TID extends PlatformID> {
  /** Check if an upload of given size would exceed quota */
  checkQuota(userId: TID, additionalBytes: number): Promise<IQuotaCheckResult>;
  /** Get current usage and limit */
  getUsage(userId: TID): Promise<IStorageUsage>;
  /** Set quota for a user (admin only) */
  setQuota(userId: TID, quotaBytes: number, adminId: TID): Promise<void>;
  /** Recalculate usage (e.g., after destruction) */
  recalculateUsage(userId: TID): Promise<IStorageUsage>;
}
