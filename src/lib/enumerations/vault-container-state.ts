/**
 * @enum VaultContainerState
 * @description The lifecycle states of a Vault Container.
 * Active → Locked → Destroyed (irreversible transitions).
 * Active → Destroyed is also valid (skip lock).
 */
export enum VaultContainerState {
  /** Normal operation — files can be read, written, shared */
  Active = 'active',
  /** No modifications allowed; reads still work but break seals */
  Locked = 'locked',
  /** All file vaults destroyed; container is a tombstone with proofs */
  Destroyed = 'destroyed',
}
