const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
  const text = textInput.value.trim();

  // Word count: split by spaces and filter out empty strings
  const words = text === "" ? 0 : text.split(/\s+/).length;

  // Character count: count all characters
  const characters = textInput.value.length;

  wordCount.textContent = words;
  charCount.textContent = characters;
});
