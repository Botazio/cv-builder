import Dialog from "@common/components/atoms/dialog/dialog";

function TemplateEditor({ active, setActive }: { active: boolean, setActive: Function; }) {
  return (
    <Dialog active={active} setActive={setActive} />
  );
}

export default TemplateEditor;