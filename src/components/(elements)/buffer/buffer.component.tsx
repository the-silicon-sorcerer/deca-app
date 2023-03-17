interface BufferProps {
  height?: string;
  className?: string;
}

const Buffer = ({ height, className }: BufferProps) => {
  return <div className={`${className}`} style={{ height: height }}></div>;
};

export default Buffer;
