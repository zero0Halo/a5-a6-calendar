interface PageProps {
  children?: any;
  pageIdentifier?: string;
}

function Page({ children, pageIdentifier, ...rest }: PageProps) {
  return (
    <section className="page" id={pageIdentifier} {...rest}>
      {children}
    </section>
  );
}

export default Page;
