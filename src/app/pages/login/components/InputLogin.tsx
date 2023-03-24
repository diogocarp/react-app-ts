import React, { RefObject } from "react";

interface IInputLoginProps {
  label: string;
  value: string | undefined;
  type?: string;

  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>(
  (props, ref) => {
    return (
      <label>
        <span>{props.label}</span>
        <input
          ref={ref}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? props.onPressEnter && props.onPressEnter()
              : undefined
          }
          type={props.type}
        />
      </label>
    );
  }
);
