import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton() {
  return (
    <div className="  bg-white flex w-full max-w-sm items-center space-x-2">
      <Input type="Value" placeholder="Search" />
      <Button type="submit" variant={"custom"}>
        <img src="images/img_search.svg" alt="Search" /> Search
      </Button>
    </div>
  );
}
