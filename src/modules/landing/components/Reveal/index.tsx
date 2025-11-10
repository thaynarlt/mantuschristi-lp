import { createElement, useEffect, useMemo, useRef } from "react";
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from "react";
import "./style.css";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  direction?: "up" | "right" | "left";
  delay?: number;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Reveal<T extends ElementType = "div">(
  props: RevealProps<T>,
) {
  const {
    as,
    children,
    className,
    direction = "up",
    delay = 0,
    style,
    ...rest
  } = props;
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("reveal--visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const composedClassName = useMemo(() => {
    return ["reveal", `reveal--${direction}`, className]
      .filter(Boolean)
      .join(" ");
  }, [className, direction]);

  const handleRef = (node: Element | null) => {
    elementRef.current = node as HTMLElement | null;
  };

  const Component = (as ?? "div") as ElementType;

  return createElement(
    Component,
    {
      ...rest,
      ref: handleRef,
      className: composedClassName,
      style: {
        ...(style as CSSProperties),
        transitionDelay: `${delay}ms`,
      },
    },
    children,
  );
}

