export interface ExportRequest {
  id: string;
  userId: string;
  documentId: string;
  format: ExportFormat;
  template: ExportTemplate;
  options: ExportOptions;
  webhookUrl?: string;
  status: ExportStatus;
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  failedAt?: Date;
  downloadUrl?: string;
  downloadExpiresAt?: Date;
  fileSize?: number;
  errorMessage?: string;
  progress: number; // 0-100
}

export type ExportFormat = 'docx' | 'pdf' | 'epub' | 'markdown' | 'txt' | 'html';

export type ExportTemplateType = 'manuscript' | 'book' | 'screenplay' | 'academic' | 'blog' | 'custom';

export type ExportStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'expired';

export interface ExportOptions {
  // Document structure
  includeOutline?: boolean;
  includeCharacters?: boolean;
  includeMetadata?: boolean;
  chapterBreaks?: boolean;
  
  // Formatting
  fontSize?: number;
  fontFamily?: string;
  lineSpacing?: number;
  margins?: PageMargins;
  pageSize?: PageSize;
  
  // Content options
  includeImages?: boolean;
  imageQuality?: 'low' | 'medium' | 'high';
  includeComments?: boolean;
  includeRevisionHistory?: boolean;
  
  // Headers and footers
  header?: string;
  footer?: string;
  pageNumbers?: boolean;
  pageNumberStyle?: 'numeric' | 'roman' | 'alphabetic';
  
  // Custom styling
  customCSS?: string;
  customTemplate?: string;
  
  // Export-specific options
  pdfOptions?: PDFExportOptions;
  epubOptions?: EPUBExportOptions;
  docxOptions?: DOCXExportOptions;
}

export interface PageMargins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export type PageSize = 'A4' | 'A5' | 'Letter' | 'Legal' | 'Custom';

export interface PDFExportOptions {
  orientation?: 'portrait' | 'landscape';
  quality?: number; // 0-100
  printBackground?: boolean;
  displayHeaderFooter?: boolean;
  headerTemplate?: string;
  footerTemplate?: string;
  scale?: number; // 0.1-2
}

export interface EPUBExportOptions {
  author?: string;
  publisher?: string;
  language?: string;
  coverImage?: string;
  description?: string;
  isbn?: string;
  subject?: string[];
  rights?: string;
}

export interface DOCXExportOptions {
  creator?: string;
  description?: string;
  subject?: string;
  keywords?: string[];
  category?: string;
  comments?: string;
  trackRevisions?: boolean;
}

export interface BatchExportRequest {
  id: string;
  userId: string;
  documentIds: string[];
  format: ExportFormat;
  template: ExportTemplate;
  options: ExportOptions;
  webhookUrl?: string;
  status: ExportStatus;
  createdAt: Date;
  completedAt?: Date;
  failedAt?: Date;
  downloadUrl?: string;
  downloadExpiresAt?: Date;
  totalDocuments: number;
  completedDocuments: number;
  failedDocuments: number;
  progress: number; // 0-100
  individualExports: ExportRequest[];
}

export interface ExportTemplate {
  id: string;
  name: string;
  description: string;
  format: ExportFormat;
  options: ExportOptions;
  customCSS?: string;
  customTemplate?: string;
  isBuiltIn: boolean;
  createdBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ExportStats {
  totalExports: number;
  completedExports: number;
  failedExports: number;
  averageProcessingTime: number; // in seconds
  formatBreakdown: Record<ExportFormat, number>;
  templateBreakdown: Record<string, number>;
  fileSizeStats: {
    total: number;
    average: number;
    largest: number;
  };
}