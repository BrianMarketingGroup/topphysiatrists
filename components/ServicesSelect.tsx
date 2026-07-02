"use client";

import { services } from "@/content/services";

interface ServicesSelectProps {
  value: string[];
  onChange: (selected: string[]) => void;
  error?: string;
}

export default function ServicesSelect({ value, onChange, error }: ServicesSelectProps) {
  function toggle(label: string) {
    if (value.includes(label)) {
      onChange(value.filter((v) => v !== label));
    } else {
      onChange([...value, label]);
    }
  }

  const allLabels = services.map((s) => s.label);
  const allSelected = allLabels.every((l) => value.includes(l));

  function toggleAll() {
    onChange(allSelected ? [] : allLabels);
  }

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {services.map((service) => {
          const selected = value.includes(service.label);
          return (
            <label
              key={service.id}
              className={`flex items-start gap-3 rounded-xl border-2 cursor-pointer p-3.5 transition-all ${
                selected
                  ? "border-teal bg-teal/5"
                  : "border-sky-dark hover:border-teal/40 bg-white"
              }`}
            >
              <input
                type="checkbox"
                checked={selected}
                onChange={() => toggle(service.label)}
                className="mt-0.5 h-4 w-4 rounded accent-teal flex-shrink-0"
              />
              <p className="font-semibold text-sm text-navy leading-snug">{service.label}</p>
            </label>
          );
        })}
        <label
          className={`flex items-start gap-3 rounded-xl border-2 cursor-pointer p-3.5 transition-all sm:col-span-2 ${
            allSelected
              ? "border-teal bg-teal/5"
              : "border-sky-dark hover:border-teal/40 bg-white"
          }`}
        >
          <input
            type="checkbox"
            checked={allSelected}
            onChange={toggleAll}
            className="mt-0.5 h-4 w-4 rounded accent-teal flex-shrink-0"
          />
          <p className="font-semibold text-sm text-navy leading-snug">All Specialties and Services</p>
        </label>
      </div>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}
