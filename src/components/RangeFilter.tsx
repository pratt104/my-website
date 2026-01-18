"use client";

type RangeFilterProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function RangeFilter({ value, onChange }: RangeFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-900 dark:text-white"
    >
      <option value="7">Last 7 Days</option>
      <option value="30">Last 30 Days</option>
    </select>
  );
}
