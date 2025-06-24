function titleCased() {
  const tutorials = [
    "what does the this keyword mean?",
    "What is the Constructor OO pattern?",
    "implementing Blockchain Web API",
    "The Test Driven Development Workflow",
    "What is NaN and how Can we Check for it",
    "What is the difference between stopPropagation and preventDefault?",
    "Immutable State and Pure Functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?"
  ];

  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      // Preserve existing capitalization of special terms
      if (/[A-Z]/.test(word.slice(1))) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      // Capitalize first letter, lowercase the rest for normal words
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  });
}