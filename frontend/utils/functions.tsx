export function handleAdd(arr: any[], setActiveForm: Function, handleDefaultForm: Function): void {
  const max = arr.reduce((a: { id: number; }, b: { id: number; }) => (a.id > b.id) ? a.id : b.id, 0);
  setActiveForm(handleDefaultForm(max + 1));
};

export function handleSave(name: string, dispatch: Function, activeForm: any, setActiveForm: Function): void {
  if (!activeForm) return;

  dispatch({ type: "addToArray", name: name, value: activeForm });
  setActiveForm(null);
};

export function handleChange(e: any, activeForm: any, setActiveForm: Function): void {
  const name: string = e.target.name;
  const value: string = e.target.value;
  setActiveForm({ ...activeForm, [name]: value });
};

export function handleDelete(name: string, element: any, dispatch: Function): void {
  dispatch({ type: "deleteFromArray", name: name, value: element });
};

export function handleEdit(name: string, element: any, dispatch: Function, activeForm: any, setActiveForm: Function): void {
  handleSave(name, dispatch, activeForm, setActiveForm);
  dispatch({ type: "deleteFromArray", name: name, value: element });
  setActiveForm(element);
};