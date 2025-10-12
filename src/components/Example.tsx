const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-hcg-gold flex w-2/3 flex-col items-center gap-1 justify-self-center p-8">
      <div className="bg-hcg-pastel-brown m-5 w-2/3 p-5 text-center text-lg">
        {props.text1}
      </div>
      <div className="flex w-2/3 flex-row gap-1">
        <div className="bg-hcg-medium-brown w-full rounded-xl p-5 text-center text-lg">
          {props.text2}
        </div>
        <div className="bg-hcg-pastel-brown w-full rounded-xl p-5 text-center text-lg">
          {props.text2}
        </div>
      </div>
      <div className="bg-hcg-medium-brown m-5 w-2/3 items-center gap-1 justify-self-center p-5 text-center text-lg text-white">
        Props
      </div>
    </div>
  );
};

export default Example;
