try {
  const theme = localStorage.getItem("vg-theme");
  if (theme === "dark" || theme === "light")
    document.documentElement.dataset.theme = theme;
} catch {
  /* Default dark theme when storage is unavailable. */
}
