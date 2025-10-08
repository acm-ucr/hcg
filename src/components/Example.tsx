const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-hcg-gold flex w-3/4 flex-col items-center gap-1 justify-self-center p-8">
        <div className="bg-hcg-white w-1/2 p-5 text-left">{props.text1}</div>

        <div className="flex w-1/2 flex-row gap-1">
            <div className="bg-hcg-white w-full p-5 text-left">props.text2</div>
            <div className="bg-hcg-white w-full p-5 text-right">{props.text2}</div>
        </div>

        <div className="bg-hcg-white w-1/2 p-5 text-left">Test</div>
    </div>
  );
};

export default Example;
