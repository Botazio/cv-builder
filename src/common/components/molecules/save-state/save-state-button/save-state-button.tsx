
export default function SaveStateButton({ children }) {

  return (
    <div onClick={() => console.log("hello")}>
      {children}
    </div>
  );
}
