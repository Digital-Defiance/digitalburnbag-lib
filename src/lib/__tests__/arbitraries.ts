import fc from 'fast-check';
import { VaultLedgerEntryType } from '../enumerations/vault-ledger-entry-type';
import { VaultState } from '../enumerations/vault-state';

/** Arbitrary 32-byte encryption key */
export const arbEncryptionKey = fc.uint8Array({
  minLength: 32,
  maxLength: 32,
});

/** Arbitrary Recipe with 1–4 block IDs of 16 bytes each */
export const arbRecipe = fc.record({
  blockIds: fc.array(fc.uint8Array({ minLength: 16, maxLength: 16 }), {
    minLength: 1,
    maxLength: 4,
  }),
  totalBlockCount: fc.integer({ min: 1, max: 100 }),
});

/** Arbitrary valid tree depth (8–12 for test speed) */
export const arbTreeDepth = fc.integer({ min: 8, max: 10 });

/** Arbitrary 32-byte tree seed */
export const arbTreeSeed = fc.uint8Array({
  minLength: 32,
  maxLength: 32,
});

/** Arbitrary leaf index for depth 8 (0–255) */
export const arbLeafIndex = fc.integer({ min: 0, max: 255 });

/** Arbitrary VaultState */
export const arbVaultState = fc.constantFrom(
  VaultState.Sealed,
  VaultState.Accessed,
  VaultState.Destroyed,
);

/** Arbitrary VaultLedgerEntryType */
export const arbVaultLedgerEntryType = fc.constantFrom(
  VaultLedgerEntryType.vault_created,
  VaultLedgerEntryType.vault_read_requested,
  VaultLedgerEntryType.vault_destroyed,
  VaultLedgerEntryType.key_released,
);

/** Arbitrary operation sequence for state machine testing */
export const arbOperationSequence = fc.array(
  fc.constantFrom('read', 'destroy'),
  { minLength: 1, maxLength: 5 },
);

/** Arbitrary proof field mutation target */
export const arbProofFieldMutation = fc.constantFrom(
  'treeSeed',
  'nonce',
  'timestamp',
  'signature',
);
