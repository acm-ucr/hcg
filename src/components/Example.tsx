const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-hcg-gold flex w-2/3 flex-col items-center gap-5 justify-self-center rounded-md p-8">
      <div className="bg-hcg-medium-brown w-full p-5 text-center">
        {props.text1}
      </div>

      <div className="flex w-full flex-row gap-5">
        <div className="bg-hcg-pastel-brown w-1/2 gap-1 rounded-2xl p-5 text-center">
          {props.text2}
        </div>
        <div className="bg-hcg-pastel-brown w-1/2 rounded-2xl p-5 text-center">
          {props.text2}
        </div>
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
      <div className="bg-hcg-medium-brown 3x1 w-full rounded p-5 text-center text-2xl text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
