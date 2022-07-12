import styles from './collaboration-panel.module.css';
import { ReactComponent as CodeTyping } from './media/undraw_code_typing.svg';
import { ReactComponent as Collaboration } from './media/undraw_collaboration.svg';

export default function CollaborationPanel() {
  return (
    <div className={styles.container}>
      <h1>Project values</h1>
      <p>
        The idea behind this project is that people looking for a job can access a free CV builder. <br />
        At the same time, I also want an open source project in which developers, designers or volunteers can collaborate.
      </p>
      <Collaboration />
      <p>
        The repository has MIT license, this means anyone can use the code for any purpose, without asking for permission.
        You can find the project hosted on <a href='https://github.com/Botazio/cv-builder'>Github</a>.
      </p>
      <CodeTyping />
    </div>
  );
}
