import cn from 'classnames';
import { useClientRect } from 'common/utils/hooks';
import styles from './template-preview.module.css';
import NextPDFViewer from '../next-pdf-viewer/next-pdf-viewer';

interface TemplatePreviewInterface {
  delimitedBy: "width" | "height",
  document: any,
  setUrl?: Function,
}

/**
 * Displays a preview for a pdf document. Gets the dimensions from a container reference
 */
export default function TemplatePreview({ delimitedBy, document, setUrl }: TemplatePreviewInterface) {
  const [rect, ref] = useClientRect();

  return (
    <div ref={ref}
      className={cn({
        [styles.container]: true,
        [styles.delimited_by_width]: delimitedBy === "width",
        [styles.delimited_by_height]: delimitedBy === "height"
      })}>
      {rect !== null && <NextPDFViewer width={rect.width} height={rect.height} doc={document} setUrl={setUrl} />}
    </div>
  );
}