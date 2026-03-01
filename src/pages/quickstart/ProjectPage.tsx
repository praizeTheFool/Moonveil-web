import { AutomatedBlock, OptionalBlock } from "@/components/quickstart/blocks";

export default function ProjectPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-10">Project</h1>

      {/* Versioning */}
      <section id="versioning" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-display font-semibold mb-6">Versioning</h2>
        <AutomatedBlock>
          <p className="font-medium mb-3">Moonveil follows structured semantic versioning:</p>
          <p className="font-mono mb-4">MAJOR.MINOR.PATCH</p>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">MAJOR</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                <li>Architectural shifts</li>
                <li>Installer logic changes</li>
                <li>Breaking config redesign</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">MINOR</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                <li>Feature additions</li>
                <li>Distro expansion</li>
                <li>Structural refinements</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">PATCH</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                <li>Bug fixes</li>
                <li>Performance tweaks</li>
                <li>Minor corrections</li>
              </ul>
            </div>
          </div>
          <p className="mt-4">Moonveil avoids silent breaking changes.</p>
          <p>Every version reflects intentional evolution.</p>
        </AutomatedBlock>
      </section>

      {/* Release Notes */}
      <section id="release-notes" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-display font-semibold mb-6">Release Notes</h2>
        <AutomatedBlock>
          <p className="font-medium mb-3">Each release documents:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>Added</strong> — new features</li>
            <li><strong>Improved</strong> — enhancements</li>
            <li><strong>Fixed</strong> — bug fixes</li>
            <li><strong>Internal changes</strong></li>
          </ul>
          <p className="mb-2">Release notes must always explain:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Whether reinstall is required</li>
            <li>Whether dependencies changed</li>
            <li>Whether configuration structure changed</li>
          </ul>
          <p>Transparency over surprise.</p>
        </AutomatedBlock>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-display font-semibold mb-6">Roadmap</h2>
        <OptionalBlock>
          <p className="mb-4">
            Moonveil evolves slowly and intentionally.<br />
            It does not chase trends.<br />
            It refines foundations.
          </p>

          <p className="font-semibold text-lg mb-3">Near-Term Goals</p>
          <ul className="list-disc list-inside space-y-1 mb-6">
            <li>Improved installer logging with clearer output</li>
            <li>Dependency verification summary report</li>
            <li>More granular error reporting</li>
            <li>Cleaner Debian package mapping</li>
          </ul>

          <p className="font-semibold text-lg mb-3">Mid-Term Goals</p>
          <ul className="list-disc list-inside space-y-1 mb-6">
            <li>Modular configuration layering</li>
            <li>Optional lightweight module toggles</li>
            <li>Extended dynamic color presets</li>
            <li>Wallpaper auto-switch pipeline improvements</li>
            <li>Performance profiling documentation</li>
          </ul>

          <p className="font-semibold text-lg mb-3">Long-Term Vision</p>
          <p className="mb-3">Moonveil aims to become:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>A reference-grade lightweight Hyprland environment</li>
            <li>Fully documented and reproducible</li>
            <li>Hardware-efficient by default</li>
            <li>Architecturally stable across distro ecosystems</li>
          </ul>

          <p className="mb-3">Future possibilities:</p>
          <ul className="list-disc list-inside space-y-1 mb-6">
            <li>Scripted backup/restore system</li>
            <li>Config snapshot versioning</li>
            <li>Installer dry-run mode</li>
            <li>Automated validation checks before deploy</li>
          </ul>

          <p className="font-medium">
            Moonveil will always prioritize:<br />
            Performance. Clarity. Intentional structure. Author-led stability.
          </p>
        </OptionalBlock>
      </section>
    </div>
  );
}
