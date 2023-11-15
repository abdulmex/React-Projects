export function Footer({ OnClearTask }) {
  return (
    <footer className="footer fixed-bottom text-center bg-secondary p-3">
      <>
        <button className="btns px-5" onClick={OnClearTask}>
          Clear Tasks ⛔
        </button>
      </>
    </footer>
  );
}
