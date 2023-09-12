export function colorPicker(event) {
  event.target.style.setProperty("--bg_clr", `var(--${event.target.value}_clr)`);
}
