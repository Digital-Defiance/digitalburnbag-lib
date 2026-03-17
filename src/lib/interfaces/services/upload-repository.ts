import { PlatformID } from '@digitaldefiance/ecies-lib';
import type { IFileMetadataBase } from '../bases/file-metadata';
import type { IUploadSessionBase } from '../bases/upload-session';

/**
 * Repository interface abstracting BrightDB access for upload session operations.
 * The API layer (digitalburnbag-api-lib) provides the concrete implementation
 * backed by BrightDB collections.
 */
export interface IUploadRepository<TID extends PlatformID> {
  /** Get an upload session by ID, or null if not found */
  getSession(sessionId: TID): Promise<IUploadSessionBase<TID> | null>;

  /** Create a new upload session */
  createSession(session: IUploadSessionBase<TID>): Promise<void>;

  /** Update an existing upload session (e.g., mark chunk received) */
  updateSession(session: IUploadSessionBase<TID>): Promise<void>;

  /** Delete an upload session (after finalization or expiration) */
  deleteSession(sessionId: TID): Promise<void>;

  /** Get all sessions that have expired (expiresAt < now) */
  getExpiredSessions(): Promise<IUploadSessionBase<TID>[]>;

  /** Store chunk data for a session */
  storeChunkData(
    sessionId: TID,
    chunkIndex: number,
    data: Uint8Array,
  ): Promise<void>;

  /** Get chunk data for a session, ordered by chunk index */
  getChunkData(sessionId: TID, chunkIndex: number): Promise<Uint8Array | null>;

  /** Delete all chunk data for a session */
  deleteChunkData(sessionId: TID): Promise<void>;

  /** Create a file metadata record and return it */
  createFileMetadata(
    metadata: IFileMetadataBase<TID>,
  ): Promise<IFileMetadataBase<TID>>;

  /** Get file metadata by ID, or null if not found */
  getFileMetadata(fileId: TID): Promise<IFileMetadataBase<TID> | null>;
}
