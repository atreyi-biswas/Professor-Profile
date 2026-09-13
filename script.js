// Assigns every department box its own color, evenly spaced around the
// full hue wheel (0-360 degrees), so each box lights up in a different
// bright pastel neon shade on hover/click. Same idea as an RGB gradient,
// just expressed in HSL (easier to keep saturation/lightness constant so
// every color reads as equally bright/pastel).

document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.dept-box');
  const total = boxes.length;

  boxes.forEach((box, index) => {
    const hue = Math.round((360 / total) * index);
    const color = `hsl(${hue}, 90%, 70%)`; // bright, pastel-leaning neon
    box.style.setProperty('--box-color', color);
  });

  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      // Clear any other active box first (single selection at a time).
      boxes.forEach((b) => {
        if (b !== box) b.classList.remove('active');
      });

      box.classList.toggle('active');

      const deptName = box.textContent.trim();
      const deptId = box.id;
      console.log(`Selected department: ${deptName} (id: ${deptId})`);

      // Example hook for future use:
      // window.location.href = `professors.html?dept=${deptId}`;
    });
  });
});