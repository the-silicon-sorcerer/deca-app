interface BufferProps {
  height: string;
}

const Buffer = ({ height }: BufferProps) => {
  return <div style={{ height: height }}></div>;
};

export default Buffer;
