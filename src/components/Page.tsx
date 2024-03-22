import classnames from "classnames";

interface PageProps {
  children?: any;
  className?: string;
  pageIdentifier?: string;
}

function Page({ children, className, pageIdentifier, ...rest }: PageProps) {
  return (
    <section
      className={classnames(["page", className])}
      id={pageIdentifier}
      {...rest}
    >
      {children}
    </section>
  );
}

export default Page;
