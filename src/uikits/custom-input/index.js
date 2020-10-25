import * as React from "react";
import "../../css/custom-input/index.css";

type Props = {
  label: string,
  type: string,
  name: string,
  id: string,
};

/**
 * @param {String} props.label
 * @param {String} props.type
 * @param {String} props.name
 * @param {String} props.id
 * @return {React.Node}
 */
export default function CustomInput({
  label,
  type,
  name,
  id,
  error,
  onChange,
}: Props): React.Node {
  return (
    <React.Fragment>
      <div class="field">
        <input
          type={type}
          name={name}
          id={id}
          placeholder="Empty"
          required
          onChange={(e) => {
            onChange(e);
          }}
        />
        <label for={id}>{label}</label>
      </div>
    </React.Fragment>
  );
}
