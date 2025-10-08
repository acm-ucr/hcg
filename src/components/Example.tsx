const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-hcg-gold flex w-2/3 flex-col items-center gap-1 justify-self-center p-8 rounded-sm text-lg">
        <div className="bg-hcg-pastel-brown w-1/2 p-5 text-left mb-3">{props.text1}</div>

        <div className="flex w-1/2 flex-row gap-1 mb-3">
            <div className="bg-hcg-medium-brown w-full p-5 text-left rounded-lg">props.text2</div>
            <div className="bg-hcg-pastel-brown w-full p-5 text-right rounded-lg">{props.text2}</div>
        </div>

        <div className="bg-hcg-medium-brown w-1/2 p-5 text-left">Test</div>
    </div>
  );
};

export default Example;
