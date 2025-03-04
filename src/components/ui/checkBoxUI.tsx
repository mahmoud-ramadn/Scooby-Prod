"use client";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
// Define the props interface
interface CheckboxDemoProps {
    label: string;
    unique: string;
}

export function CheckboxDemo({ label, unique }: CheckboxDemoProps) {
    const [isChecked, setIsChecked] = useState(false); // Use boolean for checkbox state

    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                id={unique} // Link the checkbox to the label
                checked={isChecked} // Controlled checkbox
                onCheckedChange={(checked) => setIsChecked(checked as boolean)} // Handle change
            />
            <label
                htmlFor={unique} // Link the label to the checkbox
                className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {label}
            </label>
        </div>
    );
}