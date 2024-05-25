import { useState } from "react";

interface SwitchProps {
  checked?: boolean;
  onToggle?: (checked: boolean) => void; // Define the type for the onToggle prop
}

const Switch: React.FC<SwitchProps> = ({ checked = false, onToggle }) => {
  const [isChecked, setChecked] = useState(checked);

  const toggleSwitch = () => {
    const newState = !isChecked;
    setChecked(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div className="relative">
      <input type="checkbox" className="sr-only" readOnly checked={isChecked} />
      <div onClick={toggleSwitch}>
        <div className={`block ${isChecked ? "bg-neutral-800" : "bg-neutral-500"} w-14 h-8 rounded-full`}></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
            isChecked && "transform translate-x-full"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Switch;
