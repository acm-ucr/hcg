const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-hcg-gold flex w-2/3 flex-col items-center gap-1 justify-self-center rounded-sm p-8 text-lg">
      <div className="bg-hcg-pastel-brown mb-4 w-1/2 p-5 text-center">
        {props.text1}
      </div>

      <div className="mb-4 flex w-1/2 flex-row gap-1">
        <div className="bg-hcg-medium-brown w-full rounded-lg p-5 text-center">
          {props.text2}
        </div>
        <div className="bg-hcg-pastel-brown w-full rounded-lg p-5 text-center">
          {props.text2}
        </div>
      </div>

      <div className="bg-hcg-medium-brown w-1/2 p-5 text-center text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
