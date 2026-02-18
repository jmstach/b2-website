# B2 Release Notes

## 0.2.8 — 2026-02-16

### New
- "What's New" changelog — see what changed in each update

### Fixed
- Fixed a crash when using absolute cell references with `$` (e.g., `$A$1`, `$A1`, `A$1`)
- Fixed syntax highlighting for absolute cell references in formulas
- Fixed caret misalignment in the cell editor when typing lowercase formulas
- Fixed currency formatting for negative values across all locales
- Fixed currency formatting to work correctly with non-US locale number formats
- Fixed format changes not propagating to formula cells
- Fixed renamed files not being marked as saved
- Fixed "Learn More" link in the registration window
- Removed a macOS Keychain password prompt that appeared on first launch
- Improved trial period security

## 0.2.7 — 2026-02-14

### Fixed
- Fixed save failures on fresh installs when the default save directory didn't exist

## 0.2.6 — 2026-02-13

### Improved
- Formulas are now case-insensitive — `=sum(a1:a5)` works the same as `=SUM(A1:A5)`
- Formulas are automatically normalised to uppercase when entered

## 0.2.5 — 2026-02-12

### Fixed
- Fixed licensing activation and environment configuration
- Fixed trial not starting after deactivating a license
- Fixed popover and keyboard shortcut behaviour
- Fixed auto-update system reliability

### Improved
- Refined notification and banner styling
