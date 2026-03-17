import { PlatformID } from '@digitaldefiance/ecies-lib';

/**
 * A single permission grant within an ACL document.
 * Supports user, group, or share link principals with optional
 * IP range, time window, and expiration constraints.
 */
export interface IACLEntryBase<TID extends PlatformID> {
  /** User, group, or share link */
  principalType: 'user' | 'group' | 'share_link';
  principalId: TID;
  /** Built-in permission level OR 'custom' for custom permission set */
  permissionLevel: string;
  /** Custom permission set ID (when permissionLevel is 'custom') */
  customPermissionSetId?: TID;
  /** Whether this grantee can re-share */
  canReshare: boolean;
  /** Block download — view-only in browser, no download or magnet URL */
  blockDownload: boolean;
  /** Optional IP range constraint (CIDR notation) */
  ipRange?: string;
  /** Optional time window start (HH:mm) */
  timeWindowStart?: string;
  /** Optional time window end (HH:mm) */
  timeWindowEnd?: string;
  /** Timezone for time window evaluation */
  timeWindowTimezone?: string;
  /** Expiration for time-limited grants */
  expiresAt?: Date | string;
}
