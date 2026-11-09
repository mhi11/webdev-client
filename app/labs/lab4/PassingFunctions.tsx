export default function PassingFunctions({
  message,
  theFunction,
  theFunction2,
  theOtherFunction,
}: {
  message: string;
  theFunction: (message: string) => void;
  theFunction2: () => void;
  theOtherFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      <button
        type="button"
        onClick={theFunction2}
        id="wd-pass-functions-click-2"
        className="rounded bg-purple-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Second Function
      </button>
      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
        className="rounded bg-orange-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Other Function
      </button>
      <hr />
    </div>
  );
}