interface Props {
  children: JSX.Element;
}

export function App(props: Props) {
  const { children } = props;

  return <>{children}</>;
}
