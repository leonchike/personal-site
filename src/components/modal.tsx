import * as Dialog from "@radix-ui/react-dialog";

export default function ModalBase({ children }: { children: React.ReactNode }) {
  <Dialog.Root>
    <Dialog.Trigger />
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title />
        <Dialog.Description />
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
