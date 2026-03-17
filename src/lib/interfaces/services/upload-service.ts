import { PlatformID } from '@digitaldefiance/ecies-lib';
import type { IFileMetadataBase } from '../bases/file-metadata';
import type { IUploadSessionBase } from '../bases/upload-session';
import type {
  IChunkReceipt,
  ICreateNewVersionSessionParams,
  ICreateUploadSessionParams,
  IUploadSessionStatus,
} from '../params/upload-service-params';

/**
 * Service interface for chunked file upload with resume capability.
 *
 * Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.6, 1.7, 8.2
 */
export interface IUploadService<TID extends PlatformID> {
  /** Create a new upload session */
  createSession(
    params: ICreateUploadSessionParams<TID>,
  ): Promise<IUploadSessionBase<TID>>;

  /**
   * Create an upload session for a new version of an existing file.
   * Validates that the MIME type matches the original file.
   * @throws MimeTypeMismatchError if the MIME type differs from the original
   * @throws FileNotFoundError if the file does not exist
   */
  createNewVersionSession(
    params: ICreateNewVersionSessionParams<TID>,
  ): Promise<IUploadSessionBase<TID>>;

  /** Receive and verify a single chunk */
  receiveChunk(
    sessionId: TID,
    chunkIndex: number,
    data: Uint8Array,
    checksum: string,
  ): Promise<IChunkReceipt>;

  /** Finalize: reassemble, encrypt, create vault, store metadata */
  finalize(sessionId: TID): Promise<IFileMetadataBase<TID>>;

  /** Get session status (for resume) */
  getSessionStatus(sessionId: TID): Promise<IUploadSessionStatus>;

  /** Clean up expired sessions */
  purgeExpiredSessions(): Promise<number>;
}
