import SavedSection from "../components/molecules/saved-section/saved-section";

export function displaySavedSections(arr, type: string) {
  arr.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id).map((element) => {
    return (
      <SavedSection key={type + element.id} title={element.title} startDate={element.startDate} endDate={element.endDate} />
    );
  });
}
