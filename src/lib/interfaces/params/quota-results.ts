/**
 * Result of a quota check.
 */
export interface IQuotaCheckResult {
  allowed: boolean;
  currentUsageBytes: number;
  quotaBytes: number;
  remainingBytes: number;
}

/**
 * Current storage usage summary.
 */
export interface IStorageUsage {
  usedBytes: number;
  quotaBytes: number;
  percentUsed: number;
}
