import React from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tag?: HeadingTag;
  className?: string;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  tag = "h2",
  className = "",
  children,
  ...props
}) => {
  const Tag = tag as HeadingTag;
  const baseStyles = "font-bold text-gray-900";
  const headingStyles: Record<HeadingTag, string> = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-base",
  };

  return (
    <Tag
      className={`${baseStyles} ${headingStyles[tag]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;
