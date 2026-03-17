/**
 * @enum VaultLedgerEntryType
 * @description Types of ledger entries recorded for vault operations.
 * Every vault operation is recorded on the append-only blockchain ledger
 * before execution to ensure tamper-proof audit trails.
 */
export enum VaultLedgerEntryType {
  vault_created = 'vault_created',
  vault_read_requested = 'vault_read_requested',
  vault_destroyed = 'vault_destroyed',
  key_released = 'key_released',
}
