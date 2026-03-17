import { PlatformID } from '@digitaldefiance/ecies-lib';

/**
 * Upload session tracking chunked file uploads with resume capability.
 */
export interface IUploadSessionBase<TID extends PlatformID> {
  id: TID;
  userId: TID;
  fileName: string;
  mimeType: string;
  totalSizeBytes: number;
  chunkSizeBytes: number;
  totalChunks: number;
  receivedChunks: Set<number>;
  /** Per-chunk checksums for integrity */
  chunkChecksums: Map<number, string>;
  expiresAt: Date | string;
  createdAt: Date | string;
  /** Target folder for the uploaded file */
  targetFolderId: TID;
  /** Vault container for the uploaded file */
  vaultContainerId: TID;
}
