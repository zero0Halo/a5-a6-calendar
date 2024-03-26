import { MEETINGS, PAGE_ONE, PAGE_TWO, TODO } from "./DayPage";

interface NavigationItemProps {
  children: any;
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
