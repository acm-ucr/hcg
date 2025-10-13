const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-hcg-gold flex w-2/3 flex-col gap-4 items-center gap-1 p-8 justify-self-center p-8">
      <div className="bg-hcg-pastel-brown w-1/2 p-5 text-center">
        {props.text1}
      <div>
      <div className="m-5 flex w-1/2 flex-row gap-1">
        <div className="bg-hcg-medium-brown w-full rouned-lg p-5 text-center">
          {props.text2}
        </div>
        <div className="bg-hcg-pastel-brown w-full rounded-lg p-5 text-center">
          {props.text2}
        </div>
      </div>
      <div className="bg-hcg-medium-brown text-hcg-white w-1/2 p-5 text-center">
        {props.text3}
      </div>
    <div>
  );
};

export default Example;
