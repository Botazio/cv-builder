export function WordsSeparator({ words, divider }: { words: Array<string>, divider: string; }) {
  // First filter the array taking off empty words
  const filteredWords = words.filter(word => (
    word !== ''
  ));

  return (
    <>
      {filteredWords.join(divider)}
    </>
  );
}