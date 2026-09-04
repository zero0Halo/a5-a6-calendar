import type { ReactNode } from "react";

interface NavigationItemProps {
  children: ReactNode;
  className: string;
  link?: string | boolean;
}

function NavigationItem({
  children,
  className,
  link = false,
}: NavigationItemProps) {
  if (typeof link !== "boolean") {
    return (
      <a className={className} href={`#${link}`}>
        {children}
      </a>
    );
  } else {
    return <div className={className}>{children}</div>;
  }
}

export default NavigationItem;
