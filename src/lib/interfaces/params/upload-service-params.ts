import { PlatformID } from '@digitaldefiance/ecies-lib';

/**
 * Parameters for creating a new upload session.
 */
export interface ICreateUploadSessionParams<TID extends PlatformID> {
  userId: TID;
  fileName: string;
  mimeType: string;
  totalSizeBytes: number;
  targetFolderId: TID;
  vaultContainerId: TID;
}

/**
 * Receipt returned after a chunk is received.
 */
export interface IChunkReceipt {
  chunkIndex: number;
  received: boolean;
  /** Progress as a number between 0 and 1 */
  progress: number;
}

/**
 * Status of an upload session (for resume).
 */
export interface IUploadSessionStatus {
  sessionId: string;
  receivedChunks: number[];
  totalChunks: number;
  expired: boolean;
}

/**
 * Parameters for creating a new-version upload session for an existing file.
 */
export interface ICreateNewVersionSessionParams<TID extends PlatformID> {
  userId: TID;
  /** The existing file to create a new version of */
  fileId: TID;
  fileName: string;
  mimeType: string;
  totalSizeBytes: number;
}
