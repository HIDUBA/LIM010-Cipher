window.cipher = {
  encode: (offset, string) => {
    /* Acá va  código que cifra*/
    let toAcsii;
    let masKey;
    let msjResultado='';
    for (let i = 0; i < string.length; i++) {
      toAcsii = string.charCodeAt(i);
      
      if (65<=toAcsii && toAcsii<=90) {
        masKey = (toAcsii - 65 + parseInt(offset))%26 +65;
        msjResultado += String.fromCharCode(masKey);
      }
      else if(97<=toAcsii && toAcsii<=122) {
        masKey = (toAcsii - 97 + parseInt(offset))%26 + 97;
        msjResultado += String.fromCharCode(masKey);
      }
      else{
        msjResultado += String.fromCharCode(toAcsii);
      }
    }
  return msjResultado.toUpperCase();
  },

  decode: (offset, string) => {
    /* Acá va  código que descifra*/
    let toAcsii;
    let masKey;
    let msjResultado='';

    for (let i = 0; i < string.length; i++) {
      toAcsii = string.charCodeAt(i);
      
      if (65<=toAcsii && toAcsii<=90) {
        masKey = (toAcsii -39 - parseInt(offset))%26 + 65;
        msjResultado += String.fromCharCode(masKey);
      }
        else if(97<=toAcsii && toAcsii<=122) {
          masKey = (toAcsii - 71 - parseInt(offset))%26 + 97;
          msjResultado += String.fromCharCode(masKey);
      }
      else{
        msjResultado += String.fromCharCode(toAcsii);
      }
    }
  return msjResultado.toUpperCase();
  }
};