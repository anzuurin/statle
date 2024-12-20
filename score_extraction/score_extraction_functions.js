// Load required libraries
const strExtract = (text, pattern) => {
    const match = text.match(new RegExp(pattern));
    return match ? parseInt(match[0]) : null;
};
 
const contextoScore = (contextoText) => {
    const pattern = '(?<=in\s)(.*?)(?=\sguesses)';
    const match = contextoText.match(new RegExp(pattern));
    return match ? parseInt(match[1]) : null;
};
 
const wordleScore = (wordleText) => {
    const pattern = '\\d+(?=/)';
    return strExtract(wordleText, pattern);
};
 
const bandleScore = (bandleText) => {
    const pattern = '\\d+(?=/)';
    return strExtract(bandleText, pattern);
};
 
const spotleScore = (spotleText) => {
    const pattern = '#\\d+';
    const cleanedText = spotleText.replace(new RegExp(pattern), '');
    return cleanedText.length - 21;
};
