import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  //   DialogTrigger,
} from "@/components/ui/dialog";
import { useAppState } from "@/data/storage";

import React from "react";
import { Button } from "./ui/button";

function DialogPhoto({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { photo } = useAppState();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent className="dark text-foreground">
        <DialogHeader>
          <DialogTitle className="text-foreground">
            Do you want to continue and secure this photo?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col w-full h-full gap-2">
          <div
            className={`flex flex-col items-center mt-4 ${
              photo ? "block" : "hidden"
            }`}
          >
            <img
              src={photo || ""}
              alt="Captured"
              className="border border-black w-[300px] h-[300px]"
            />
          </div>
          <div className="w-full flex flex-row gap-2 justify-between items-center">
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Go back
            </Button>
            <Button className="w-full">Continue</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogPhoto;
