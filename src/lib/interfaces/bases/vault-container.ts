import { PlatformID } from '@digitaldefiance/ecies-lib';
import { VaultContainerState } from '../../enumerations/vault-container-state';

/**
 * A Vault Container is the top-level organizational unit in Digital Burnbag.
 * Every folder and file lives inside exactly one vault container.
 *
 * Vault containers provide:
 * - Container-level ACLs (inherited by all contents unless overridden)
 * - Container-level canary bindings (apply to everything within)
 * - Container-level sharing rules and quorum policies
 * - Aggregate non-access verification (all file vaults pristine)
 * - Cascade destruction (destroy all file vaults atomically)
 *
 * The cryptographic Vault per file version is unchanged — the container
 * is a metadata/organizational concept, not a new cryptographic primitive.
 */
export interface IVaultContainerBase<TID extends PlatformID> {
  id: TID;
  ownerId: TID;
  name: string;
  description?: string;
  /** Root folder for this vault container's file hierarchy */
  rootFolderId: TID;
  /** Container-level ACL (inherited by all contents unless overridden) */
  aclId?: TID;
  /** Whether sensitive operations require quorum approval */
  approvalGoverned: boolean;
  /** Current lifecycle state */
  state: VaultContainerState;
  /** Optional per-container storage quota in bytes */
  quotaBytes?: number;
  /** Current storage usage in bytes */
  usedBytes: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  createdBy: TID;
  updatedBy: TID;
}
