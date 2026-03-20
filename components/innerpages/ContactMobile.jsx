"use client";

export default function ContactMobile() {
  const vehicleParts = [
    { label: "Rear LH Wing", options: ["Scratches", "Dents"] },
    { label: "Rear LH Tyre", options: ["1-3mm", "3-5mm", "5-9mm"] },
    { label: "Rear LH Door", options: ["Scratches", "Dents"] },
    { label: "Front LH Door", options: ["Scratches", "Dents"] },
    { label: "Front LH Tyre", options: ["1-3mm", "3-5mm", "5-9mm"] },
    { label: "Front LH Wing", options: ["Scratches", "Dents"] },
    { label: "Rear Bumper", options: ["Scratches", "Dents"] },
    { label: "Boot Lid", options: ["Scratches", "Dents"] },
    { label: "Roof", options: ["Scratches", "Dents"] },
    { label: "Bonnet", options: ["Scratches", "Dents"] },
    { label: "Front Bumper", options: ["Scratches", "Dents"] },
    { label: "Rear RH Wing", options: ["Scratches", "Dents"] },
    { label: "Rear RH Tyre", options: ["1-3mm", "3-5mm", "5-9mm"] },
    { label: "Rear RH Door", options: ["Scratches", "Dents"] },
    { label: "Front RH Door", options: ["Scratches", "Dents"] },
    { label: "Front RH Tyre", options: ["1-3mm", "3-5mm", "5-9mm"] },
    { label: "Front RH Wing", options: ["Scratches", "Dents"] },
  ];

  return (
    <div className="p-3 dark:text-white d-block lg:d-none">
      <h3 className="text-lg font-semibold mb-2">Vehicle Condition</h3>
      <p className="text-sm mb-3">
        Please indicate any panel damage and tyre wear your current car has:
      </p>

      <div className="mt-4 text-[13px] flex flex-wrap gap-4">
        {vehicleParts.map((item, idx) => (
          <div
            key={idx}
            className="border rounded p-4 mb-4 bg-white dark:bg-gray-800/80 w-[48%]"
          >
            <p className="font-semibold text-sm">{item.label}</p>
            {/* ✅ Options stacked as column */}
            <div className="flex flex-col gap-1 mt-2">
              {item.options.map((opt, i) => (
                <label
                  key={i}
                  className="d-flex gap-1 text-sm"
                >
                  <input type="checkbox" name={`${item.label}-${opt}`} />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
