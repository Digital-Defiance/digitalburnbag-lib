import { PlatformID } from '@digitaldefiance/ecies-lib';
import type { IVaultContainerBase } from '../bases/vault-container';
import type {
  IAccessStatusCheck,
  IContainerDestructionResult,
  IContainerNonAccessResult,
  IContainerSealStatus,
  ICreateVaultContainerParams,
  IVaultContainerSummary,
  IVaultContainerUpdate,
} from '../params/vault-container-params';

/**
 * Service interface for vault container lifecycle management.
 *
 * Handles creation, listing, locking, cascade destruction,
 * aggregate non-access verification, and seal status reporting.
 */
export interface IVaultContainerService<TID extends PlatformID> {
  /** Create a new vault container with its root folder */
  createContainer(
    params: ICreateVaultContainerParams<TID>,
  ): Promise<IVaultContainerBase<TID>>;

  /** Get a vault container by ID */
  getContainer(
    containerId: TID,
    requesterId: TID,
  ): Promise<IVaultContainerBase<TID>>;

  /** List all vault containers for a user with summary info */
  listContainers(ownerId: TID): Promise<IVaultContainerSummary<TID>[]>;

  /** Update vault container metadata (name, description, quota, quorum) */
  updateContainer(
    containerId: TID,
    updates: IVaultContainerUpdate,
    requesterId: TID,
  ): Promise<IVaultContainerBase<TID>>;

  /** Lock a container — no modifications, reads still work */
  lockContainer(
    containerId: TID,
    requesterId: TID,
  ): Promise<IVaultContainerBase<TID>>;

  /**
   * Destroy a vault container and all file vaults within it.
   * Cascade-destroys every file version's vault, revokes all key wrappings,
   * records a container-level destruction entry on the ledger.
   * Best-effort: collects per-file results without aborting on individual failures.
   */
  destroyContainer(
    containerId: TID,
    requesterId: TID,
  ): Promise<IContainerDestructionResult<TID>>;

  /** Get aggregate seal status for a container */
  getSealStatus(
    containerId: TID,
    requesterId: TID,
  ): Promise<IContainerSealStatus<TID>>;

  /**
   * Verify non-access for an entire container.
   * Checks every file vault's seal and cross-references the ledger.
   * Returns true only if ALL file vaults are pristine with zero read entries.
   */
  verifyNonAccess(
    containerId: TID,
    requesterId: TID,
  ): Promise<IContainerNonAccessResult<TID>>;

  /**
   * Check a file's access status before reading.
   * Returns whether the file's vault is sealed (requiring seal-break confirmation)
   * so the UI can warn the user before irreversibly breaking the seal.
   */
  checkFileAccessStatus(
    fileId: TID,
    requesterId: TID,
  ): Promise<IAccessStatusCheck<TID>>;
}
