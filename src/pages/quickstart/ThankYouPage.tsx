import { OptionalBlock } from "@/components/quickstart/blocks";

export default function ThankYouPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Thank You</h1>

      <OptionalBlock>
        <p className="font-medium mb-3">Appreciation</p>
        <p className="mb-2">Thank you to:</p>
        <p className="mb-1">The open-source community.</p>
        <p className="mb-1">The Hyprland developers.</p>
        <p className="mb-3">
          And <strong>Candy</strong>, a friend who helped shape the Moonveil website and documentation journey.
        </p>
        <p className="mb-1">Moonveil was built from frustration.</p>
        <p className="mb-1">Refined with patience.</p>
        <p>Shared with intention.</p>
      </OptionalBlock>
    </div>
  );
}
