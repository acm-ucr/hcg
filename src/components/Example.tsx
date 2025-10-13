const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-hcg-gold flex w-2/3 flex-col items-center gap-4 justify-self-center rounded-sm p-8 text-center text-2xl">
      <div className="bg-hcg-pastel-brown w-1/2 p-5">{props.text1}</div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-hcg-medium-brown w-full rounded-lg p-5">
          {props.text2}
        </div>
        <div className="bg-hcg-pastel-brown w-full rounded-lg p-5">
          {props.text2}
        </div>
      </div>
      <div className="bg-hcg-medium-brown text-hcg-white w-1/2 p-5">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
