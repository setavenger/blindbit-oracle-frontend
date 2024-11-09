import { useEffect } from "react";
import { useConfig } from "../context/ConfigContext";
import { Button, Input } from "@material-tailwind/react";
import { FiCopy } from "react-icons/fi";

export function ConnectionInfo() {
  const { baseURL, torBaseURL, port } = useConfig();

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-3">Connection Info</h2>
      <div className="space-y-4">
        <CopyField label="Clearnet Address" value={baseURL} />
        <CopyField label="Tor Address" value={torBaseURL} />
        <CopyField label="Port" value={`${port}`} />
      </div>
    </div>
  );
}

function CopyField({ label, value }: { label: string; value: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
    .then(() => console.log("copied to clipboard"))
    .catch(e => {throw e});
  };

  useEffect(() => {
    console.log("c-field:", value);
  }, [value])

  return (
    <div className="flex items-center space-x-2">
      <div className="flex-1">
        {/*@ts-expect-error incomplete props*/}
        <Input label={label} value={value} readOnly />
      </div>
      <Button variant="text" size="sm" onClick={copyToClipboard}>
        <FiCopy size={20} />
      </Button>
    </div>
  );
}

