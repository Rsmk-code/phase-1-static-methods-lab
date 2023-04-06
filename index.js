class Formatter {
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }
  static titleize(sentence) {
    let words = sentence.split(" ");
    const excludedWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    words[0] = this.capitalize(words[0]);
    for (let i = 1; i < words.length; i++) {
      if (!excludedWords.includes(words[i])) {
        words[i] = this.capitalize(words[i]);
      }
    }
    return words.join(" ");
  }

}
console.log(Formatter.capitalize('hello')); // 'Hello'
console.log(Formatter.sanitize('he@llo!')); // 'hello'
console.log(Formatter.titleize('the quick brown fox jumps over the lazy dog')); // 'The Quick Brown Fox Jumps over the Lazy Dog'
console.log(Formatter.titleize('the bridge over the river kwai')); // 'The Bridge over the River Kwai'
