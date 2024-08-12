type FooProps = {};

export const Foo: React.FC<FooProps> = () => {
  return <>FOO</>;
};

// ---
interface KaaProps {
  parameterName: string;
}

export function Kaa({ parameterName }: KaaProps): JSX.Element {
  // Code der Komponente

  return (
    <>
      <p>{parameterName}</p>
    </>
  );
}
