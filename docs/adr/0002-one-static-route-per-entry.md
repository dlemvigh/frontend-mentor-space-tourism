# One static route per Entry, with a link-based Entry Switcher

Every Entry gets its own statically generated URL (for example `/destination/moon` or `/crew/douglas-hurley`), so each one can be shared and works without JavaScript. As a result, the Entry Switcher is a set of navigation links marked with `aria-current`, not an ARIA `tablist`. Using tab roles for controls that navigate between URLs is an anti-pattern, so don't "fix" this into tabs.

## Considered Options

- **One page per Section with client-side tabs**: rejected. Entries couldn't be linked to, and the site would need JavaScript to show anything other than the first Entry.
