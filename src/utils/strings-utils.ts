
export const ConcatString = (main: string, complement: string, sep:string=",") => {
  let text: string = main;
  

  if (text) {
    if (complement) {
      text += `${sep} ${complement}`;
    }
  } else {
    text = complement;
  }
  return text;
};